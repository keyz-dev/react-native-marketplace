import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles/heading.style'
import { COLORS } from '../../constants'
import { Ionicons } from '@expo/vector-icons'

const Heading = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>New Arrivals</Text>
            <TouchableOpacity>
                <Ionicons name="grid" size={24} color={COLORS.primary} />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Heading