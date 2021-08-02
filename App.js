import React from 'react'
import { StatusBar } from 'react-native'
import Navigator from './src/components/Navigator'

export default function App() {
    StatusBar.setBackgroundColor('#0B2465')
    return (
        <Navigator />
    )
}