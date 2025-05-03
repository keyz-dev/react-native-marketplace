import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useAuth } from '../../stateManagement/contexts';
import { COLORS, SIZES } from '../../constants'
import { useNavigation } from '@react-navigation/native';
import styles from './styles/login.style'
import { Button, Input } from '../../components'
import { Formik , Form, Field } from 'formik'
import * as Yup from 'yup'
import { MaterialCommunityIcons } from '@expo/vector-icons'


const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(5, 'Password Too Short!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const LoginScreen = ({ }) => {
  const { login, loading } = useAuth();
  const [obsecureText, setObsecureText] = useState(true);
  const navigation = useNavigation()

  const invalidForm = () =>{
    Alert.alert(
      "Invalid Form",
      "Please provide all required fields",
      [
        {
          text: "Cancel", onPress: ()=>{}
        },
        {
          text: "Continue", onPress: ()=>{}
        },
        {defaultIndex : 1}
      ]
    )
  }

  const submittionError = (err) =>{
    Alert.alert(
      "Login Error",
      err || "An error occured while processing the form",
      [
        {
          text: "Cancel", onPress: ()=>{}
        },
        {
          text: "Continue", onPress: ()=>{}
        },
        {defaultIndex : 1}
      ]
    )
  }

  const handleLogin = async (values) => {
    try {
      await login(values.email, values.password);
    } catch (err) {
      submittionError(err)
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Image 
        source={require('../../assets/images/bk.png')} 
        style={styles.image}  
      />
      <Text style={styles.title}>Unlimited Luxurious Products</Text>

      <Formik
        initialValues={{ email: "", password: ""}}
        validationSchema={LoginSchema}
        onSubmit={values => handleLogin(values)}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, touched, setFieldTouched }) => (
          <View>
            <Input 
              label='Email'
              placeholder='Enter your email'
              materialIconName='email'
              onFocus={()=>setFieldTouched('email')}
              onBlur={()=>setFieldTouched('email', '')}
              value={values.email}
              onChangeText={handleChange('email')}
              touched={touched.email}
              errors={errors.email}
              wrapperStyles={{
                marginBottom: 10
              }}
            />

            <Input 
              label='Password'
              secureText={obsecureText}
              placeholder='Enter your password'
              materialIconName='lock-outline'
              onFocus={()=>setFieldTouched('password')}
              onBlur={()=>setFieldTouched('password', '')}
              value={values.password}
              onChangeText={handleChange('password')}
              touched={touched.password}
              errors={errors.password}
            >
              <TouchableOpacity onPress={()=>setObsecureText(!obsecureText)}>
                <MaterialCommunityIcons 
                  name={obsecureText ? "eye-outline": "eye-off-outline"}
                  size={18} 
                  color={COLORS.placeholder}
                />
              </TouchableOpacity>
            </Input>

            <Button 
              handler={isValid ? handleSubmit : invalidForm}
              text={"LOGIN"}
              isValid={isValid}
              loader={loading}
              additionalTextStyles={{
                letterSpacing: SIZES.xSmall-4
              }}  
            />

            {/* Link to role selection page */}
            <TouchableOpacity onPress={() => navigation.navigate('RoleSelection')}>
              <Text style={styles.registerText}>Don't have an account? Register</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>


    </KeyboardAvoidingView>
    
  );
};

export default LoginScreen;
