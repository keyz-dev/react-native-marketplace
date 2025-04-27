import { TouchableOpacity, Text, View, ScrollView  } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles/home.style'
import { Ionicons, Fontisto } from '@expo/vector-icons'
import { Welcome, Carousel, Heading } from '../components/home'
import { ProductRow } from '../components/products'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      {/* AppBar */}

      <View style={styles.appBarWrapper}> 
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24}></Ionicons>
          <Text style={styles.location}>Yaounde, Cameroon</Text>
          <View style={{ alignItems: "flex-end"}}>
            <TouchableOpacity onPress={()=>{}}>
              <Ionicons name="menu" size={24} />
            </TouchableOpacity>
          </View>

        </View>
      </View>

      <ScrollView>
        <Welcome />
        <Carousel />
        <Heading /> 
        <ProductRow />

      </ScrollView>

    </SafeAreaView>
  )
}

export default Home

