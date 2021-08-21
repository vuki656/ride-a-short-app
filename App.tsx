import { NativeBaseProvider } from 'native-base'
import React from 'react'

import { Register } from './src/modules'

export default function App() {
    return (
        <NativeBaseProvider>
            <Register />
        </NativeBaseProvider>
    )
}
