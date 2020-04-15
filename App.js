import React from 'react';
import {NavigationContainer}from '@react-navigation/native';
import {CardStyleInterpolators,createStackNavigator}from '@react-navigation/stack';
import { Image,StyleSheet,TouchableOpacity,View } from 'react-native';

import HomeScreen from './HomeScreen';
import MessageScreen from './MessageScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
        <Stack.Screen name=" " component={HomeScreen} 
        options={{ 
          headerStyle: {
            height:0,
          },
        }}
        /> 
      
        <Stack.Screen
          name="MessageScreen"
          component={MessageScreen}
          options={{ 
            title:" ",
            headerStyle: {
              height:0,
              backgroundColor:'#fafafa',
            },
            headerLeft: null
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});

export default App;