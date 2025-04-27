import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, {useEffect, useRef, useState} from 'react'
import { COLORS, SIZES } from '../constants'
import { Feather, Ionicons } from '@expo/vector-icons'
import styles from './styles/search.style'

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
        </View>
    )
}

export default SearchComponent