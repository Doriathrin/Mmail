export default{
    namespaced:true,
    state:{
        id:0,
        categoryId:0,
        scope:{},
        // <td>{{list.orderItemVoList[0].productName}}</td>
    },
    mutations:{
        changCtiyValue(state,city){//  state  传过来的值
            state.id=city
            console.log(state.id);
        },
        categoryId(state,city){
            state.categoryId=city
            console.log(state.categoryId);
        },
        scope(state,city){
            state.scope=city
            // console.log(state.scope);
        }
    },
    getters:{
        doubleCity(state){
            return state.city
        }
    },
    actions:{
       
    },
}
