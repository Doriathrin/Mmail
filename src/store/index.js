import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
import storeA from './storea'
import storeB from './storeb'



Vue.use(Vuex)


export default new Vuex.Store({
    modules:{
        a:storeA,
        b:storeB
    },
    //本地存储
    // plugins:[
    //     createPersistedState({
    //         storage:window.localStorage
    //     })
    // ]
    
})