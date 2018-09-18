import { delay } from 'redux-saga'


export default {
    namespace : "printer",//全局state上的key
    state : {
        content: "你好吗。我是谁谁谁。住在哪儿啊。晚饭吃了么。啦啦啦。啦啦啦。你好吗。我是谁谁谁。住在哪儿啊。晚饭吃了么。啦啦啦。啦啦啦。",//文章内容
        title:"",//文章标题
        date:"",//日期
        isTyping:false,//是否正在打字
        typeText:"你好吗。我是谁谁谁。住在哪儿啊。晚饭吃了么。啦啦啦。啦啦啦。你好吗。我是谁谁谁。住在哪儿啊。晚饭吃了么。啦啦啦。啦啦啦。",//正在打印的字
        nextText:"",//下一句话
        speed:100,//打字速度
        index:0,//第几个字，打的
        article:"你好吗。我是谁谁谁。住在哪儿啊。晚饭吃了么。啦啦啦。啦啦啦。你好吗。我是谁谁谁。住在哪儿啊。晚饭吃了么。啦啦啦。啦啦啦。",
    },

    subscriptions : {
        // setup({dispatch, history}) { // eslint-disable-line
        // // }
        // keyEvent({dispatch}) {
        //     key('onClick', () => { alert('hello') });
        //   },
    },

    effects : {
        // *fetch({ payload }, { call, put }) {  // eslint-disable-line   yield put({
        // type: 'save' }); },
        *type({payload,isTyping},{call,put}){
            // console.log(action);
            console.log('111111');
            const {article}=payload;
            for(let i=0;i<=article.length;i++){
                yield delay(100);
                yield put({type:"test",article:article.slice(0,i)})
            }
            // yield delay(100);
            // yield put({type:"test"})
           // yield put({type:"type"})
        }
    },

    //reducers 聚合积累的结果是当前 model 的 state 对象
    //能进来，说明调用的肯定是counter里的reducer  
    reducers : {
        //dva自己会去找  namespace/action.type（这里就是counter/plus和counter/minus），所以不需要switch判断，判断也行
        test(state,action){
            //没有在打字，开始打字
            return {...state,...{article:action.article}}
        }
    }
}