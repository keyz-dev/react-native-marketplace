import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles/heading.style'
import { COLORS } from '../../constants'
import { Ionicons } from '@expo/vector-icons'
<<<<<<< HEAD
import { useNavigation } from '@react-navigation/native'

const Heading = ({title, children}) => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("ProductsList")}>
=======

const Heading = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>New Arrivals</Text>
            <TouchableOpacity>
>>>>>>> 9cb7e11535ce99d81d01a764bd0bd2d3c94eb845
                <Ionicons name="grid" size={24} color={COLORS.primary} />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Heading