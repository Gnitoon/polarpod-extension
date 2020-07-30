// let page = document.getElementById('buttonDiv');
// const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];


// function constructOptions(kButtonColors) {
//     for (let item of kButtonColors) {
//         let button = document.createElement('button');
//         button.style.backgroundColor = item;
//         button.addEventListener('click', function () {
//             chrome.storage.sync.set({ color: item }, function () {
//                 console.log('color is ' + item);
//             })
//         });
//         page.appendChild(button);
//     }
// }
// constructOptions(kButtonColors);


app = new Vue({
    el: "#polar",
    data:{
        hover: 0,
        selected: 0,
        opList:{
            actions:[
                'Home',
                'About',
                'Docs',
                'Github',
                'Settings'
            ],
            
        },
        
    },
})

Vue.component('corners', {
    template:`
    <div>
        <svg width="60" class="corners c-top-l" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5H55V55" stroke="white" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg width="60" class="corners c-top-r" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5H55V55" stroke="white" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg width="60" class="corners c-bot-l" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5H55V55" stroke="white" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg width="60" class="corners c-bot-r" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5H55V55" stroke="white" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
    
    `
})


 