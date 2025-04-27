import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles/productDetails.style';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants';

const ProductDetails = ({ route, navigation }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1)

  const addQuantity = ()=>{
    setQuantity(quantity + 1)
  }
  
  const reduceQuantity = ()=>{
    quantity > 1 && setQuantity(quantity - 1)
  }

  const iconName = isFavorite ? 'heart' : 'heart-outline';
  const { product } = route.params;

  product.rating = 3.5;

  return (
    <View style={styles.container}>
        
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.favoriteIcon}>
            <Ionicons name='chevron-back' size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setIsFavorite(!isFavorite)} style={styles.favoriteIcon}>
              <Ionicons name={iconName} size={30} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
        <Image source={{ uri: product.images[0] }} style={styles.image} />

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
              <Text >Lorem, ipsum dolor.</Text>
            </View> 

          </View>

        </ScrollView>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>

    </View>
  );
};



export default ProductDetails;
