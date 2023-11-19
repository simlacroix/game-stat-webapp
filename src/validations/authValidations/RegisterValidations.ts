import * as yup from 'yup';

export const registerSchema = yup.object().shape({
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
    passwordConfirm: yup
        .string()
        .required('Password confirmation can\'t be empty')
        .max(50, 'Password can\'t be longer than 50 characters')
        .min(8, 'Password must be at least 8 characters')
        .matches(/^(?=.*[a-z]).+$/, 'Password must have at least one lowercase letter')
        .matches(/^(?=.*[A-Z]).+$/, 'Password must have at least one uppercase letter')
        .matches(/^(?=.*\d).+$/, 'Password must have at least one number')
        .matches(/^(?=.*[-+_!@#$%^&*.,?]).+$/, 'Password must have at least one special character.')
        .test('password-match', 'Passwords don\'t match', (value, testContext) => {
            return testContext.parent.password === value;
        }),
    email: yup
        .string()
        .required('Email can\'t be empty')
        .max(255, 'Email can\'t be longer than 255 characters')
        .email('Must respect email format (something@email.com)'),
    emailConfirm: yup
        .string()
        .required('Email confirmation can\'t be empty')
        .max(255, 'Email can\'t be longer than 255 characters')
        .email('Must respect email format (something@email.com)')
        .test('email-match', 'Emails don\'t match', (value, testContext) => {
            return testContext.parent.email === value;
        }),
});