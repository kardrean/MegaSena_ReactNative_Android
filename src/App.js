import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

import Mega from './components/megaSena/Mega'

export default () => <SafeAreaView style={style.App}>
    <Mega qtdeNumeros={12} />

</SafeAreaView>

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    }
})