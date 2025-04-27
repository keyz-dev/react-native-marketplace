import { View, Text } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS, CATEGORIES } from '../../constants'
import styles from './styles/carousel.style'

const Carousel = () => {
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={CATEGORIES.map(category => category.image)}
        dotColor={COLORS.primary}
        onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={styles.carouselImage}
        autoplay
        circleLoop
      />
    </View>
  )
}

export default Carousel