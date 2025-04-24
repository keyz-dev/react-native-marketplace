import { View, Text } from 'react-native'
import React from 'react'
import styles from './welcome.style'
import { COLORS, SIZES } from '../../constants'

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeText(COLORS.black, SIZES.xSmall)}>Welcome to</Text>
        <Text style={styles.welcomeText(COLORS.primary, 0)}>Online MarketPlace</Text>
      </View>

      {/* Search bar */}
      
    </View>
  )
}

export default Welcome