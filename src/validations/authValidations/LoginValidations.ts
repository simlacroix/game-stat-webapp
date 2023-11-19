import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    username: yup
        .string()
        .required('Username can\'t be empty')
        .max(50, 'Username can\'t be longer than 50 characters')
        .matches(/^[a-zA-Z0-9_.-]*$/, 'Username can only contains numbers, letters or , .  -'),
    password: yup
        .string()
        .required('Password can\'t be empty')
        .max(50, 'Password can\'t be longer than 50 characters')
        .min(8, 'Password must be at least 8 characters')
        .matches(/^(?=.*[a-z]).+$/, 'Password must have at least one lowercase letter')
        .matches(/^(?=.*[A-Z]).+$/, 'Password must have at least one uppercase letter')
        .matches(/^(?=.*\d).+$/, 'Password must have at least one number')
        .matches(/^(?=.*[-+_!@#$%^&*.,?]).+$/, 'Password must have at least one special character.'),
});