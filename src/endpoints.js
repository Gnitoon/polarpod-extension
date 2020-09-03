export default {
    parentURL: 'https://polarpod.herokuapp.com',

    /**
     * @description construct an RegExp with items from prvided array,
     * can be used to create an regex to test if have specific item
     *
     * @param {Array<*>} items array of items to add as regex option
     * @param {String} flags regex flags
     * @returns {RegExp} RegExp
     * @example construct(["foo", "bar"], "gi").test("foo") -> true
     */
    constructRegex: function(items, flags = "gi"){
        let reg = `(\\/?)(`;
        items.forEach((item, i) => {
            reg = reg.concat(`^${item}$`);
            if(i+1 < items.length){
                reg = reg.concat('|');
            }
        });
        reg = reg.concat(`)(\\/?)`);
        return new RegExp(reg, flags)
    },

    /**
     * @description construct regex with available endpoints
     */
    avail: function(){
        return this.constructRegex(this.ids(), "gi")
    },

    /**
     * @description get endpints ids
     */
    ids(){
        return this.endpoints.map(el => el.id)
    },

    
    /**
    * @description transform the array of available context menu endpoints
    * into a object, if take endObj out of the function and uncomment the if,
    * will be accesible from endpoints.endObj and will return it if call again  
    */
    toObject: function(){
        // if((Object.keys(this.endObj)).length > 0) return this.endObj
        endObj = {};

        let keys = this.ids()
        keys.forEach((id, i) => {
            this.endObj[id] = this.endpoints[i]
        })
        return this.endObj;
    },

    endpoints:[
        {
            id: "ogtags",
            name:"Open Graph Tags (OG tags)",
            parentId:'polar-main',
            title: "OG (Open Graph) meta tags",
            desc: "Get og meta tags (site image, name...), also can be used to get final link from some shortners",
            contexts: ['selection', 'link'],
            active: true,
            urls: {
                api: `/apis/ogtags?u=/%/`,
                page: `/ogtags?url=/%/`
            }
        },
        {
            id: "cleanfb",
            name:"Clean fb / Clean URL",
            parentId:'polar-main',
            title: "CleanURL",
            desc: "removes tracking queries/extrack url",
            contexts: ['selection', 'link'],
            active: true,
            urls: {
                api: `/apis/cleanfb?u=/%/`,
                page: `/cleanfb?url=/%/`
            }
        },
    ],

    tenplate: {
        id: "",
        name:"",
        parentId:'',
        title: "",
        desc: "",
        contexts: ['selection', 'link'],
        active: true,
        urls: {
            api: `/apis/  ?u=/%/`,
            page: `/  ?url=/%/`
        }
    },
}