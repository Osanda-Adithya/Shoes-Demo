import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import {ProductListData} from '../models';
import BottomTabNavigator from './BottomTabNavigator';

type RootStack = {
  Product: undefined;
  ProductDetailScreen: {
    product: ProductListData;
  };
};

const Stack = createNativeStackNavigator<RootStack>();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Product" component={BottomTabNavigator} />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
};

export type {RootStack};
export default StackNavigator;
