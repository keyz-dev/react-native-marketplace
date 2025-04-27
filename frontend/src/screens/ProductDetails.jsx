import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles/productDetails.style';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants';
import { useCart, useFavorites } from '../stateManagement/contexts'


const ProductDetails = ({ route, navigation }) => {
  const { product } = route.params;
  
  const { addToCart, cartItems, removeFromCart } = useCart()
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const toggleFavorite = () => {
      if (isFavorite(product._id)) {
          removeFromFavorites(product._id);
      } else {
          addToFavorites(product);
      }
  };

  const [quantity, setQuantity] = useState(1)

  const addQuantity = ()=>{
    setQuantity(quantity + 1)
  }
  const reduceQuantity = ()=>{
    quantity > 1 && setQuantity(quantity - 1)
  }

  const inCart = cartItems.some(item => item.product._id === product._id);
  const favorite = isFavorite(product._id)

  const iconName = favorite ? 'heart' : 'heart-outline'
  const cartButtonText = inCart ? 'cart' : 'cart-outline'
  
  const image = product.images.length > 0 ? product.images[0].url : '';

  return (
    <View style={styles.container}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.favoriteIcon}>
            <Ionicons name='chevron-back' size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteIcon}>
              <Ionicons name={iconName} size={30} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
        <Image source={{ uri: image}} style={styles.image} />

        {/* Info section */}
        <ScrollView style={styles.details} showsVerticalScrollIndicator={false}>
          <View style={styles.titleRow}>
            <Text style={styles.name}>{product.name}</Text>
            <View style={styles.priceWrapper}>
              <Text style={styles.price}>${product.price}</Text>
            </View>
          </View>    

          <View style={styles.ratingRow}>
            <View style={styles.rating}>
              {[1,2,3,4,5].map((item) => (
                <Ionicons key={item} name='star' size={20} color={item <= product.rating ? "gold" : COLORS.gray2} />
              ))}

              <Text style={styles.ratingText}>({product.rating})</Text>
            </View>

            <View style={styles.rating}>
              <TouchableOpacity onPress={addQuantity}>
                <SimpleLineIcons name='plus' size={20} />
              </TouchableOpacity>

              <Text style={styles.ratingText}>{quantity}</Text>
              
              <TouchableOpacity onPress={reduceQuantity}>
                <SimpleLineIcons name='minus' size={20} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.descriptionWrapper}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>

          <View styles={{marginBottom: SIZES.small}}>
            <View style={styles.location}>
              
              <Ionicons name='location-outline' size={20} />
              <Text >
                Yaounde, Cameroon
              </Text>
            </View> 

          </View>

        </ScrollView>
      
      
      <TouchableOpacity 
        onPress={() => {
            inCart ? removeFromCart(product._id) : addToCart(product);
        }}
        style={!inCart ? styles.addButton : styles.removeButton}>
          {inCart ? (
            <Text style={styles.removeButtonText}>Remove from Cart</Text>
          ): (
            <Text style={styles.addButtonText}>Add to Cart</Text>
          )}
      </TouchableOpacity>

    </View>
  );
};



export default ProductDetails;
