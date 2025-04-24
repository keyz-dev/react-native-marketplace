import { TouchableOpacity, Text, View, ScrollView  } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../styles/home.style'
import { Ionicons, Fontisto } from '@expo/vector-icons'

import { Welcome } from '../components/home'

const Home = () => {
  return (
    <SafeAreaView>

      {/* AppBar */}

      <View style={styles.appBarWrapper}> 
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24}></Ionicons>
          <Text style={styles.location}>Yaounde, Cameroon</Text>
          <View style={{ alignItems: "flex-end"}}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>

        </View>
      </View>

      <ScrollView>
        <Welcome />
      </ScrollView>

    </SafeAreaView>
  )
}

export default Home

