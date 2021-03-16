export const formValidation ={
    emailValidation: (input)=>{
    let email= input.target
        let emailFormat = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
        if(!email.value) return {error:true,errorMessage:"Please Enter Email"};
        else if (!emailFormat.test(email.value)) return {error:true,errorMessage:"Please enter a valid email"}

        else{
            return {error:false,errorMessage:""}
        }
    },
    passwordValidation: (input)=>{
    let password= input.target
       
        if (!password.value) return {error:true,errorMessage:"Please Enter Password"};
       

        else{
            return {error:false,errorMessage:""}
        }
    }
}