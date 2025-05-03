import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import styles from './styles/productCardView.style'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../constants'
import { useNavigation } from '@react-navigation/native'
<<<<<<< HEAD
import { useCart, useFavorites } from '../../stateManagement/contexts'

const ProductCardView = ({product}) => {
    const { addToCart, cartItems, removeFromCart } = useCart()
    const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

    const toggleFavorite = () => {
        if (isFavorite(product._id)) {
            removeFromFavorites(product._id);
        } else {
            addToFavorites(product);
        }
    };

    const inCart = cartItems.some(item => item.product._id === product._id);
    const favorite = isFavorite(product._id)

    const iconName = favorite ? 'heart' : 'heart-outline'
    const cartIconName = inCart ? 'cart' : 'cart-outline'

    const image = product.images.length > 0 ? product.images[0].url : '';

=======


const ProductCardView = ({product}) => {
    const [isFavorite, setIsFavorite] = useState(false)
    const [isInCart, setIsInCart] = useState(false)

    const iconName = isFavorite ? 'heart' : 'heart-outline'
    const cartIconName = isInCart ? 'cart' : 'cart-outline'
    const image = product.images[0]
>>>>>>> 9cb7e11535ce99d81d01a764bd0bd2d3c94eb845
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
<<<<<<< HEAD
                    <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteIcon}>
=======
                    <TouchableOpacity onPress={()=>setIsFavorite(!isFavorite)} style={styles.favoriteIcon}>
>>>>>>> 9cb7e11535ce99d81d01a764bd0bd2d3c94eb845
                        <Ionicons name={iconName} size={26} color={COLORS.primary} />
                    </TouchableOpacity>
                </View>

                <View style={styles.details}>
                    <Text style={styles.productName} numberOfLines={1}>{product.name}</Text>
                    <View style={styles.productDetails}>
                        <Text style={styles.productPrice}>${product.price}</Text>
<<<<<<< HEAD
                        <TouchableOpacity 
                        onPress={() => {
                            inCart ? removeFromCart(product._id) : addToCart(product);
                        }}
                        >
=======
                        <TouchableOpacity onPress={()=>setIsInCart(!isInCart)}>
>>>>>>> 9cb7e11535ce99d81d01a764bd0bd2d3c94eb845
                            <Ionicons name={cartIconName} size={28} color={COLORS.primary} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCardView