<<<<<<< HEAD
import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles/profile.style'
import { useAuth } from '../stateManagement/contexts'
import { StatusBar } from 'expo-status-bar'
import { COLORS, SIZES } from '../constants'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
  const { user } =  useAuth()
  const navigation = useNavigation()

  if (! user) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', }}>
          <Text style={{fontFamily: 'semibold', fontSize: 30, ...styles.name}}>Please login to access this resource</Text>
          <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
            <View style={styles.loginBtn}>
              <Text style={styles.menuText}> L O G I N </Text>
            </View>
          </TouchableOpacity>
        </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {/* <StatusBar backgroundColor={COLORS.gray}/> */}
        <View style={{width: '100%'}}>
          <Image 
            source={require('../assets/images/space.jpg')}
            style={styles.cover}
          />
        </View>
        <View style={styles.profileContainer}>
          <Image 
            source={{uri: user.avatar.url}}
            style={styles.profile}
          />

          <Text style={styles.name}>{user.name}</Text>
          <TouchableOpacity>
            <View style={styles.loginBtn}>
              <Text style={styles.menuText}>{ user.email }</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      
    </View>
  )
}

export default Profile
=======
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = () => {
  return (
    <SafeAreaView>
      <Text>Profile</Text>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})
>>>>>>> 9cb7e11535ce99d81d01a764bd0bd2d3c94eb845
