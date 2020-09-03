<template>
  
    <div id="polar">
        <div id="header">
            <a href="https://polarpod.herokuapp.com">
                <img src="/assets/logo/POLARPOD-light.svg" class="logo" alt="logotype">
            </a>
        </div>

        <div id="content">

            <div id="menu-cont">
    
                <div class="actions">
                    <h3
                        v-for="(op, i) in opList.actions"
                        :class="{'action-item':true, 'ai-selected': selected == i}"
                        @click="selected = i"
                    >{{op}}</h3>
                </div>
            </div>
    
            <div id="selected-item-cont">
                
                <div class="mini-card">
                    <div class="mini-card-content">
                        {{opList.actions[selected]}}
                    </div>
                    <corners/>
                </div>


                <div id="contents-containet" >
                    <div id="c-container-master">
                        <div id="cc-sub-container">

                            <!-- home -->
                            <div class="card text-card" v-show="selected == 0">
                                <p>
                                    Polarpod is a set of useful APIs for process and extract data. Has a little enfocus to be an alternative to similar paid services but for smaller projects.
                                </p>
                            </div>
                            
                            <!-- about -->
                            <div class="card text-card" v-show="selected == 1">
                                <p>
                                    Polarpod started as a service to abstract and remove some functions from a main personal project, as it grows up was decided to dedicate some time to make it useful for another porpuses, like the extension.
                                </p>
                            </div>

                            <!-- docs -->
                            <div class="card text-card" v-show="selected == 2">
                                <p>
                                    you can find Some documentation from available endpoints on 
                                    <a class="link" target="blank" href="https://github.com/matsukii/polarpod">Github repository</a>
                                </p>
                            </div>

                            <!-- Github links -->
                            <div class="card" v-show="selected == 3">
                                <a class="link" target="blank" href="https://github.com/matsukii/polarpod">Polarpod APIs</a>
                                <br>
                                <br>
                                <a class="link" target="blank" href="https://github.com/matsukii/polarpod-extension">Extension</a>
                            </div>

                            <simplebar class="scroll card settings" v-show="selected == 4" data-simplebar-auto-hide="false">
                                <div class="settings-container">
                                    <div id="openInApi">
                                        <a>Open context menu features in API</a>

                                        <checkbox
                                            width="24px"
                                            :checked="settings.useApi"
                                            @click="toggle('useApi')"
                                        />

                                    </div>

                                    <div id="openInApi">
                                        <a>Menu item sound</a>

                                        <checkbox
                                            width="24px"
                                            :checked="settings.itSound"
                                            @click="toggle('itSound')"
                                        />

                                    </div>

                                    <h3>Items </h3>
                                    <div id="context-menu-items-container">


                                        <!-- all on -->
                                        <div class="cmi-allon cmi-item">
                                            <checkbox
                                                width="24px"
                                                :checked="settings.allon"
                                                @click="toggle('allon')"
                                            />
                                            <a>All</a>
                                        </div>
                                        
                                        
                                        <!-- add to a array and loop to get all items -->
                                        <div v-for="(end, i) in endpoints" class="cmi-item">
                                            <checkbox
                                                width="24px"
                                                :checked="actives[i].active"
                                                @click="toggle(end.id)"
                                            />
                                            <a>{{end.name}}</a> <br>
                                            <a class="cmi-desc">{{end.desc}}</a>
                                        </div>




                                    </div>



                                    <button @click="save">Save</button>

                                </div>

                            </simplebar>


                            <corners/>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </div>
</template>




<script>

// npm run watch:dev

import simplebar from 'simplebar-vue';
import 'simplebar/dist/simplebar.min.css';

import corners from '../components/corners.vue'
import checkbox from '../components/checkbox.vue'

import endpoints from '../endpoints.js'
console.log(endpoints);

export default {
  	name: "Polar",
	components:{
        corners,
        simplebar,
        checkbox
    },
    
	data(){
		return {
			hover: 0,
            selected: 4,
            endAvail: endpoints.avail(),
            settings:{
                useApi: false,
                itSound: true,
                allon: true,
            },
			opList:{
				actions:[
					'Home',
					'About',
					'Docs',
					'Github',
					'Settings'
				],
            },
            endpoints: endpoints.endpoints,
            actives:[

            ]
        }
		
    },
    created(){
        this.actives = this.endpoints.map(el => {
            return {
                ...el.id,
                ...el.active
            }
        })
    },
    methods:{
        save: function(){
            chrome.storage.sync.set({settings: {...this.settings}}, function () {
                console.warn("settings saved");
            });
        },

        /**
        * @description toggle a item in settings and save to storage
        * @param {String} what item to toggle in settings
        */
        toggle: function(what){
            if(/useApi|itSound|allon/gi.test(what)){
                this.settings[what] = !this.settings[what];
            }

            // can use array.includes()
            if(this.endAvail.test(what)){
  
                this.actives.filter(el => {
                    if(el.id == what){
                        el.active = !el.active
                    }
                })
                
                //console.log("hi");
                //if(this.actives.lastIndexOf(what) == -1){
                //    this.actives.push(what)
                //}
                //else{
                //    this.actives.splice(this.actives.lastIndexOf(what), 1)
                //}
            }

            this.settings.actives = this.actives;

            console.log(this.settings.actives);
            //this.save()
        }
    }
};
</script>

