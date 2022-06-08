
import { createStore } from 'vuex'


export default createStore({
    state:{
        message: 'Hello Vuex!'
    },
    mutations: {
        setMessage(state){
            state.message = 'Hello again'
        }
    },
    actions:{
        setMessage({commit}){
            commit('setMessage')
        }
    },
    getters:{
        getMessage(state){
            return state.message
        }
    },
})

