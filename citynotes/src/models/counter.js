export default {
    namespace : "counter",//全局state上的key
    state : {
        number: 5
    },

    subscriptions : {
        // setup({dispatch, history}) { // eslint-disable-line
        // }
    },

    effects : {
        // *fetch({ payload }, { call, put }) {  // eslint-disable-line   yield put({
        // type: 'save' }); },
    },

    //reducers 聚合积累的结果是当前 model 的 state 对象
    //能进来，说明调用的肯定是counter里的reducer  
    reducers : {
        //dva自己会去找  namespace/action.type（这里就是counter/plus和counter/minus），所以不需要switch判断，判断也行
        plus(state, action) {
            alert(action.type)
            return {number:state.number+1}
        },
        minus(state,action){
            return {number:state.number-1}
        }
    }
}