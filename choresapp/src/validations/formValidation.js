export const formValidation = {
    emailValidation: (input) => {
        let email = input.target
        let emailFormat = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
        if (!email.value) return { error: true, errorMessage: "Please Enter Email" };
        else if (!emailFormat.test(email.value)) return { error: true, errorMessage: "Please enter a valid email" }

        else {
            return { error: false, errorMessage: "" }
        }
    },
    passwordValidation: (input) => {
        let password = input.target

        if (!password.value) return { error: true, errorMessage: "Please Enter Password" };


        else {
            return { error: false, errorMessage: "" }
        }
    },

    confirmPassword: (input) => {
        let confirmPassword = input.target;
        let password = document.getElementsByName('password')
        if (!confirmPassword.value) return { error: true, errorMessage: "Please Confirm Password" };
        else if (confirmPassword.value !== password[0].value) return { error: true, errorMessage: "Password Must Match" }
        else {
            return { error: false, errorMessage: "" }
        }
    }


}