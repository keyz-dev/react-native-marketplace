import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles/search.style'
import { COLORS } from '../constants'
import { SearchComponent } from '../components/index'

const Search = () => {
  return (
    <SafeAreaView>
      <SearchComponent autoFocus={true}/>
    </SafeAreaView>
  )
}

export default Search