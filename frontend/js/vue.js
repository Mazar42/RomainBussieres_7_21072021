// var app = new Vue({
//     el : "#app",
//     data : {
//         user : "M4z4R"
//     }
// })



const Lobby = {
    template: `<nav>
    <ul id="icons">
        <li><i class="fas fa-user-plus" alt="Inscription"></i>
            <div class="desktop-only">Inscription</div>
        </li>
        <li><i class="fas fa-sign-in-alt" alt="Connexion"></i>
            <div class="desktop-only">Connexion</div>
        </li>
    </ul>
    </nav>`,
    name: 'Lobby'
}

const UserSettings = {
    template: '<h1>UserSettings</h1>',
    name: 'UserSettings'
}

const UserSpace = {
    template: '<h1>UserSpace</h1>',
    name: 'UserSpace'
}


//router
const router = new VueRouter({
    routes: [
        { path: '/', component : Lobby, name : 'Lobby'},
        { path: '/user-settings', component : UserSettings, name : 'UserSettings' },
        { path: '/user-space', component : UserSpace, name : 'UserSpace' },
    ]
})

const vue = new Vue((
    router
)).$mount('#app');