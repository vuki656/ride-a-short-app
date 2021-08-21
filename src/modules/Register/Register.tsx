import { zodResolver } from '@hookform/resolvers/zod'
import {
    Button,
    Center,
    FormControl,
    Heading,
    Input,
    ScrollView,
    VStack,
} from 'native-base'
import * as React from 'react'
import {
    Controller,
    useForm,
} from 'react-hook-form'

import type { RegisterFormValueType } from './Register.types'
import { registerValidation } from './Register.validation'

export const Register: React.FunctionComponent = () => {
    const { control, formState, handleSubmit } = useForm<RegisterFormValueType>({
        defaultValues: {
            firstName: '',
            lastName: '',
            password: '',
            passwordConfirmation: '',
        },
        resolver: zodResolver(registerValidation),
    })

    const onSubmit = (formValue: RegisterFormValueType) => {
        // eslint-ignore next-line
        console.log('submiting with', formValue)
    }

    return (
        <ScrollView>
            <Center>
                <VStack
                    height="100%"
                    paddingY={5}
                    space={2}
                    width="80%"
                >
                    <Heading
                        alignSelf={{ base: 'center' }}
                        paddingBottom={10}
                    >
                        🚗 Ride a Short
                    </Heading>
                    <FormControl isInvalid={'username' in formState.errors}>
                        <FormControl.Label>
                            Username
                        </FormControl.Label>
                        <Controller
                            control={control}
                            name="username"
                            render={(controller) => (
                                <Input
                                    onBlur={controller.field.onBlur}
                                    onChangeText={(value) => {
                                        controller.field.onChange(value)
                                    }}
                                    placeholder="johny223"
                                    value={controller.field.value}
                                />
                            )}
                        />
                        <FormControl.ErrorMessage>
                            {formState.errors.username?.message}
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={'firstName' in formState.errors}>
                        <FormControl.Label>
                            First Name
                        </FormControl.Label>
                        <Controller
                            control={control}
                            name="firstName"
                            render={(controller) => (
                                <Input
                                    onBlur={controller.field.onBlur}
                                    onChangeText={(value) => {
                                        controller.field.onChange(value)
                                    }}
                                    placeholder="John"
                                    value={controller.field.value}
                                />
                            )}
                        />
                        <FormControl.ErrorMessage>
                            {formState.errors.firstName?.message}
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={'lastName' in formState.errors}>
                        <FormControl.Label>
                            Last Name
                        </FormControl.Label>
                        <Controller
                            control={control}
                            name="lastName"
                            render={(controller) => (
                                <Input
                                    onBlur={controller.field.onBlur}
                                    onChangeText={(value) => {
                                        controller.field.onChange(value)
                                    }}
                                    placeholder="Walker"
                                    value={controller.field.value}
                                />
                            )}
                        />
                        <FormControl.ErrorMessage>
                            {formState.errors.lastName?.message}
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={'password' in formState.errors}>
                        <FormControl.Label>
                            Password
                        </FormControl.Label>
                        <Controller
                            control={control}
                            name="password"
                            render={(controller) => (
                                <Input
                                    onBlur={controller.field.onBlur}
                                    onChangeText={(value) => {
                                        controller.field.onChange(value)
                                    }}
                                    type="password"
                                    value={controller.field.value}
                                />
                            )}
                        />
                        <FormControl.ErrorMessage>
                            {formState.errors.password?.message}
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={'passwordConfirmation' in formState.errors}>
                        <FormControl.Label>
                            Password Confirmation
                        </FormControl.Label>
                        <Controller
                            control={control}
                            name="passwordConfirmation"
                            render={(controller) => (
                                <Input
                                    onBlur={controller.field.onBlur}
                                    onChangeText={(value) => {
                                        controller.field.onChange(value)
                                    }}
                                    type="password"
                                    value={controller.field.value}
                                />
                            )}
                        />
                        <FormControl.ErrorMessage>
                            {formState.errors.passwordConfirmation?.message}
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <Button
                        colorScheme="green"
                        onPress={handleSubmit(onSubmit)}
                    >
                        Submit
                    </Button>
                </VStack>
            </Center>
        </ScrollView>
    )
}
