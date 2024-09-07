import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {FlatList, Text, View} from 'react-native';
import {TabStack} from '../navigator/BottomTabNavigator';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../redux/store';
import {Cart, ProductListData} from '../models';
import {BottomCard, Button, CartCard} from '../components';
import {addToCart, removeCart} from '../redux/featuers/cart/CartSlice';

type CartScreenProps = NativeStackScreenProps<TabStack, 'Cart'>;

const CartScreen: FC<CartScreenProps> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const selector = useSelector((state: RootState) => state.cartSlice);
  const {cart} = selector;

  const onMinPress = (product: ProductListData) => {
    dispatch(removeCart(product));
  };

  const onPlusPress = (product: ProductListData) => {
    dispatch(addToCart(product));
  };

  const renderCartItem = ({item, index}: {item: Cart; index: number}) => {
    const {product} = item;
    return (
      <CartCard
        className={`${index === cart.length - 1 ? 'mb-[100px]' : 'mb-0'}`}
        item={item}
        onMinPress={() => onMinPress(product)}
        onPlusPress={() => onPlusPress(product)}
      />
    );
  };

  const getTotal = (): number => {
    return cart.reduce((sum, current) => {
      return sum + Number(current.product.price.amount) * current.qty;
    }, 0);
  };

  const navigatToProductList = () => navigation.navigate('ProductList');

  return (
    <View className="flex-1 bg-white ">
      {cart.length <= 0 ? (
        <View className="flex-1 items-center justify-center">
          <Text className="text-center text-[18xp] text-black font-medium">
            Add Some Shoes to Bucket
          </Text>
          <View className="ml-9 mt-4">
            <Button
              title="Go to Store"
              onPress={navigatToProductList}
              isDisable={false}
            />
          </View>
        </View>
      ) : (
        <FlatList
          className="mt-4"
          data={cart}
          keyExtractor={(_, i) => i.toString()}
          renderItem={renderCartItem}
        />
      )}
      {cart.length > 0 && (
        <BottomCard
          buttonTitle="Checkout"
          price={`GBP ${getTotal()}`}
          isDisable={false}
          onPress={() => {}}
        />
      )}
    </View>
  );
};

export default CartScreen;
