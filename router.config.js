import Home from './pages/Home';
import Doc from './pages/Doc';
import Tuto from './pages/Tuto';
import Blog from './pages/Blog';
import Comm from './pages/Comm';
import Login from './pages/Login';
import Core from './pages/Core';
import Guide from './pages/Guide';
import Api from './pages/Api';
import Hooks from './pages/Hooks';
// import DocContent from './pages/DocContent';

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/doc',
        component: Doc,
        pri: true,
        routes: [
            // {
            //     path: '/doc/:type',
            //     component: Doc,
            // },
            {
                path: '/doc/core',
                name:'Core',
                component: Core,
            },
            {
                path: '/doc/guide',
                name:'Guide',
                component: Guide,
            },
            {
                path: '/doc/api',
                name:'Api',
                component: Api,
            },
            {
                path: '/doc/hooks',
                name:'Hooks',
                component: Hooks,
            },
        ]
    },{
        path: '/tuto',
        component: Tuto,
        pri: true
    },
    {
        path: '/blog',
        component: Blog
    },
    {
        path: '/comm',
        component: Comm
    },
    {
        path: '/login',
        component: Login
    },


    // <template>
    //     <div id="app">
    //         <router-view></router-view>
    //         <router-view  name="Core"></router-view> //将渲染Core组件
    //         <router-view  name="Guide"></router-view>   //将渲染Guide组件
    //         <router-view  name="Api"></router-view> 
    //         <router-view  name="Hooks"></router-view> 
    //         <router-view  name="Tuto"></router-view> 
    //         <router-view  name="Blog"></router-view> 
    //         <router-view  name="Comm"></router-view> 
    //         <router-view  name="Login"></router-view> 
    //     </div>
    // </template>
        
]



export default routes;