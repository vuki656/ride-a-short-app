import { z } from 'zod'

import { ValidationErrors } from '../../lib'

export const registerValidation = z.object({
    firstName: z.string().min(1, ValidationErrors.Required),
    lastName: z.string().min(1, ValidationErrors.Required),
    password: z.string().min(1, ValidationErrors.Required),
    passwordConfirmation: z.string().min(1, ValidationErrors.Required),
    username: z.string().min(1, ValidationErrors.Required),
})
    .refine((formValue) => {
        return formValue.password === formValue.passwordConfirmation
    }, {
        message: 'Passwords must match',
        path: ['passwordConfirmation'],
    })
