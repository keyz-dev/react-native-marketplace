import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles/newRival.style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '../components'
import { ProductList } from '../components/products'

const NewRivals = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Header title={"Products"}/>
        <ProductList />
    </SafeAreaView>
  )
}

export default NewRivals