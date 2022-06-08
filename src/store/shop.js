export default createStore({
    state:{
        shopList:[
            {
                id: 1,
                title: 'Nike Red',
                desr: 'тут будет какой то текс пока хз какой но что точно да будет ',
                img: require('@/assets/img/1.png')

            }
        ]
    },
    mutation:{},
    action:{},
    getters:{
        getShopList (state) {
            return state.shopList
        }
    }
})