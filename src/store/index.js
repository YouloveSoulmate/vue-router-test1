import { createStore } from 'vuex'

import store from '@/store'


export default createStore({
    getters:{
        getMessage(state){
            return state.message
        }
    },
    modules:{
        store:{}
    },
})

