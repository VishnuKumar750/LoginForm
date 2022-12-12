const loginInputs = [
    {
        id: 1,
        name: 'email',
        type: 'text',
        placeholder: 'email',
        errorMessage: 'It should be valid email address',
        label: 'Email',
        pattern: '[a-z0-9]+@[a-z]+\.[a-z]{2,3}',
        required: true,
    },
    {
        id: 2,
        name: 'password',
        type: 'password',
        placeholder: 'password',
        errorMessage:`Password should be 8-15 charactes and include atleast 1 Capital letter, 1 small letter,
         1 number and 1 special Character`,
        label: 'Password',
        pattern: '(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,15}).*$',
        required: true,
    },

]

const registerInputs = [
    {
        id: 1,
        name: 'username',
        type: 'text',
        label: 'username',
        placeholder: 'username',
        errorMessage: 'Username should be atleast 3 characters',
        pattern: "^[A-Za-z][A-Za-z0-9_]{2,15}$",
        required: true,
    },
    {
        id: 2,
        name: 'email',
        type: 'text',
        placeholder: 'email',
        errorMessage: 'It should be valid email address',
        label: 'Email',
        pattern: '[a-z0-9]+@[a-z]+\.[a-z]{2,3}',
        required: true,
    },
    {
        id: 3,
        name: 'password',
        type: 'password',
        placeholder: 'password',
        errorMessage:`Password should be 8-15 charactes and include atleast 1 Capital letter, 1 small letter,
         1 number and 1 special Character`,
        label: 'Password',
        pattern: '(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,15}).*$',
        required: true,
    },
    {
        id: 4,
        name: 'ConfirmPassword',
        type: 'password',
        placeholder: 'confirm Password',
        errorMessage:`Password should be 8-15 charactes and include atleast 1 Capital letter, 1 small letter,
         1 number and 1 special Character`,
        label: 'Password',
        pattern: '(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,15}).*$',
        required: true,
    }
]

module.exports = {loginInputs, registerInputs};