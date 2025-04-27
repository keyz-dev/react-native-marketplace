import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import styles from './styles/productCardView.style'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../constants'
import { useNavigation } from '@react-navigation/native'


const ProductCardView = ({product}) => {
    const [isFavorite, setIsFavorite] = useState(false)
    const [isInCart, setIsInCart] = useState(false)

    const iconName = isFavorite ? 'heart' : 'heart-outline'
    const cartIconName = isInCart ? 'cart' : 'cart-outline'
    const image = product.images[0]
    const navigation = useNavigation()
    const handlePress = () => {
        navigation.navigate('ProductDetails', {product})
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image 
                        source={{uri: image}}
                        resizeMode='cover'
                        style={{aspectRatio: 1}}
                    />
                    <TouchableOpacity onPress={()=>setIsFavorite(!isFavorite)} style={styles.favoriteIcon}>
                        <Ionicons name={iconName} size={26} color={COLORS.primary} />
                    </TouchableOpacity>
                </View>

                <View style={styles.details}>
                    <Text style={styles.productName} numberOfLines={1}>{product.name}</Text>
                    <View style={styles.productDetails}>
                        <Text style={styles.productPrice}>${product.price}</Text>
                        <TouchableOpacity onPress={()=>setIsInCart(!isInCart)}>
                            <Ionicons name={cartIconName} size={28} color={COLORS.primary} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCardView