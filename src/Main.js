import React, {useEffect} from "react";
import  {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

// Importing user screens
import {
    Login,
    Home,
    SignUp,
} from "./screens/index";

import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";
import { loadUser} from "./stateManagement/actions/userAction";

const Main = () => {
    const Stack = createNativeStackNavigator();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(loadUser());
    }, [dispatch]);
    
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName='home' 
                screenOptions={{headerShown: false}}
            >
                <Stack.Group>
                    <Stack.Screen name="login" component={Login} />
                    <Stack.Screen name="signup" component={SignUp} />
                    <Stack.Screen name="home" component={Home} />
                </Stack.Group>
            </Stack.Navigator>
            <Toast position="top" />
        </NavigationContainer>
    );
}
export default Main;