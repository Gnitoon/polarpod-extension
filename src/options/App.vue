<template>
  
    <div id="polar">
        <div id="header">
            <a href="https://polarpod.herokuapp.com">
                <img src="../assets/logo/POLARPOD-light.svg" class="logo" alt="logotype">
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

                                        <!-- <div class="checkbox">
                                            <svg v-if="settings.useApi || true" class="check-out" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M31 28.612V31H29.6058M2.39416 31H1V28.619M1.00269 3.38799V1H2.39685M29.6058 1H31V3.38799" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <svg v-if="settings.useApi || true" class="checked" width="326" height="326" viewBox="0 0 326 326" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.75 12.75L34.1786 34.1786L77.0357 77.0357L119.893 119.893L130.607 130.607M312.75 12.75L291.321 34.1786L248.464 77.0357L205.607 119.893L194.893 130.607M312.75 312.75L291.321 291.321L248.464 248.464L205.607 205.607L194.893 194.893M12.75 312.75L34.1786 291.321L77.0357 248.464L119.893 205.607L130.607 194.893" stroke="white" stroke-width="25" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                                
                                        </div> -->

                                        <checkbox
                                            width="24px"
                                            v-bind:checked="settings.useApi"
                                            @click="settings.useApi = !settings.useApi"
                                        />

                                        <br><br>

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
            settings:{
                useApi: false
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
        }
		
	},
    methods:{
        save: function(){
            chrome.storage.sync.set({settings: {...this.settings}}, function () {
                console.log("saved");
            });
        }
    }
};
</script>

