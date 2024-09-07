import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import CartScreen from '../screens/CartScreen';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import ProductListScreen from '../screens/ProductListScreen';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

type TabStack = {
  ProductList: undefined;
  Cart: undefined;
};

const Tab = createBottomTabNavigator<TabStack>();

const ProductTabIcon = ({focused}: {size: number; focused: boolean}) => (
  <FontAwesomeIcon name="home" size={20} color={focused ? 'black' : 'gray'} />
);

const CartTabIcon = ({focused}: {size: number; focused: boolean}) => (
  <FontAwesomeIcon
    name="shopping-cart"
    size={22}
    color={focused ? 'black' : 'gray'}
  />
);

const BottomTabNavigator = () => {
  const selector = useSelector((state: RootState) => state.cartSlice);
  const {cart} = selector;

  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name="ProductList"
        component={ProductListScreen}
        options={{
          tabBarIcon: ProductTabIcon,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: CartTabIcon,
          tabBarBadge: cart.length > 0 ? cart.length : undefined,
        }}
      />
    </Tab.Navigator>
  );
};

export type {TabStack};
export default BottomTabNavigator;
