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
<<<<<<< HEAD
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="menu" size={24} />
            </TouchableOpacity>
          </View>
=======
            <TouchableOpacity onPress={()=>{}}>
              <Ionicons name="menu" size={24} />
            </TouchableOpacity>
          </View>

>>>>>>> 9cb7e11535ce99d81d01a764bd0bd2d3c94eb845
        </View>
      </View>

      <ScrollView>
        <Welcome />
        <Carousel />
<<<<<<< HEAD
        <Heading title={"Best Sellers"}/> 
=======
        <Heading /> 
>>>>>>> 9cb7e11535ce99d81d01a764bd0bd2d3c94eb845
        <ProductRow />

      </ScrollView>

    </SafeAreaView>
  )
}

export default Home

