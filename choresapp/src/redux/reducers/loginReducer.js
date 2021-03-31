const initialState ={
   userId: '',
   email:'',
   isAdmin:false,

}

const  LoginReducer = (state = initialState, action)=>{

    const {type,payload}= action

    switch(type){
        case "LoginUser" :
              return  {...state, ...payload}
       case "LogOutUser":
           return {...state,...payload}
           default  : 
           return state
              
    }


}

export default LoginReducer;