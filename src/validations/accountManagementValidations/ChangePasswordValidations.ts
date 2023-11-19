import * as yup from 'yup';

export const passwordChangeSchema = yup.object().shape({
    currentPassword: yup
        .string()
        .required('Current password can\'t be empty')
        .max(50, 'Password can\'t be longer than 50 characters')
        .min(8, 'Password must be at least 8 characters')
        .matches(/^(?=.*[a-z]).+$/, 'Password must have at least one lowercase letter')
        .matches(/^(?=.*[A-Z]).+$/, 'Password must have at least one uppercase letter')
        .matches(/^(?=.*\d).+$/, 'Password must have at least one number')
        .matches(/^(?=.*[-+_!@#$%^&*.,?]).+$/, 'Password must have at least one special character.'),
    newPassword: yup
        .string()
        .required('New password can\'t be empty')
        .max(50, 'Password can\'t be longer than 50 characters')
        .min(8, 'Password must be at least 8 characters')
        .matches(/^(?=.*[a-z]).+$/, 'Password must have at least one lowercase letter')
        .matches(/^(?=.*[A-Z]).+$/, 'Password must have at least one uppercase letter')
        .matches(/^(?=.*\d).+$/, 'Password must have at least one number')
        .matches(/^(?=.*[-+_!@#$%^&*.,?]).+$/, 'Password must have at least one special character.'),
    newPasswordConfirm: yup
        .string()
        .required('New password confirmation can\'t be empty')
        .max(50, 'Password can\'t be longer than 50 characters')
        .min(8, 'Password must be at least 8 characters')
        .matches(/^(?=.*[a-z]).+$/, 'Password must have at least one lowercase letter')
        .matches(/^(?=.*[A-Z]).+$/, 'Password must have at least one uppercase letter')
        .matches(/^(?=.*\d).+$/, 'Password must have at least one number')
        .matches(/^(?=.*[-+_!@#$%^&*.,?]).+$/, 'Password must have at least one special character.')
        .test('password-match', 'Passwords don\'t match', (value, testContext) => {
            return testContext.parent.newPassword === value;
        }),
});