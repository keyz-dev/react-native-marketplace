import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, {useEffect, useRef, useState} from 'react'
import { COLORS, SIZES } from '../constants'
import { Feather, Ionicons } from '@expo/vector-icons'
import styles from './styles/search.style'

<<<<<<< HEAD
const SearchComponent = ({
    keyword,
    setKeyword,
    category,
    setCategory,
    performSearch, // renamed for clarity
    autoFocus = false,
    frontIcon = "",
    rearIcon = "search",
    handleSearch = ()=>{}
  }) => {
    const inputRef = useRef(null)
=======
const SearchComponent = ({handleSearch, autoFocus=false}) => {
    const inputRef = useRef(null)
    const [searchText, setSearchText] = useState("")

    const performSearch = () => {
        // perform search logic here
        
    }
>>>>>>> 9cb7e11535ce99d81d01a764bd0bd2d3c94eb845

    useEffect(() => {
        if (autoFocus) {
            const timer = setTimeout(() => {
              inputRef.current?.focus();
            }, 100);
      
            return () => clearTimeout(timer);
          }
    }, [autoFocus])

    return (
        <View style={styles.searchContainer}>
<<<<<<< HEAD
            <TouchableOpacity>
                <Feather name={frontIcon} size={24} color={COLORS.gray} style={styles.searchIcon}/>
            </TouchableOpacity>

            <View style={styles.searchWrapper}>
                <TextInput
                    ref={inputRef}
                    value={keyword}
                    onChangeText={setKeyword}
                    style={styles.searchInput}
                    placeholder="What are you looking for?"
                    returnKeyType="search"
                    onPress={handleSearch}
                />
            </View>
            
            <View>
                <TouchableOpacity style={styles.searchBtn} onPress={performSearch}>
                    <Ionicons name={rearIcon} size={SIZES.xLarge} color={COLORS.white} />
                </TouchableOpacity>
            </View>
=======
        <TouchableOpacity>
            <Feather name="search" size={24} color={COLORS.gray} style={styles.searchIcon}/>
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
            <TextInput
            ref={inputRef}
            value={searchText}
            onChangeText={setSearchText}
            style={styles.searchInput}
            onPress={handleSearch}
            placeholder='what are you looking for?'/>
        </View>
        
        <View>
            <TouchableOpacity style={styles.searchBtn} onPress={performSearch}>
            <Ionicons name='camera-outline' size={SIZES.xLarge} color={COLORS.white} />
            </TouchableOpacity>
        </View>

>>>>>>> 9cb7e11535ce99d81d01a764bd0bd2d3c94eb845
        </View>
    )
}

export default SearchComponent