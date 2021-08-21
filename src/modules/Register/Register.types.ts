import type { z } from 'zod'

import type { registerValidation } from './Register.validation'

export type RegisterFormValueType = z.infer<typeof registerValidation>
