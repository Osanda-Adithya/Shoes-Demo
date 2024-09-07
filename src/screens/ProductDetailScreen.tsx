import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useCallback, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {RootStack} from '../navigator/StackNavigator';
import {AppBar, Badge, BottomCard, ColorList, SizeList} from '../components';
import {ProductListData} from '../models';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../redux/store';
import {addToCart} from '../redux/featuers/cart/CartSlice';
import {StockStatus} from '../utils/enum';

type ProductDetailScreenProps = NativeStackScreenProps<
  RootStack,
  'ProductDetailScreen'
>;

const ProductDetailScreen: FC<ProductDetailScreenProps> = ({
  navigation,
  route,
}) => {
  const {product} = route.params;
  const [color, setColor] = useState<string | undefined>(undefined);
  const [size, setSize] = useState<string | undefined>(undefined);
  const dispatch = useDispatch<AppDispatch>();

  const onBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const validateButton = (): boolean => {
    if (
      color === undefined ||
      size === undefined ||
      product.stockStatus === StockStatus.OUTOFSTOCK
    ) {
      return true;
    }
    return false;
  };

  const onAddToCart = useCallback(() => {
    const payload: ProductListData = {
      ...product,
      colour: color!,
      sizes: [size!],
    };
    dispatch(addToCart(payload));
    onBackPress();
  }, [color, dispatch, onBackPress, product, size]);

  return (
    <>
      <AppBar
        enableBackButton
        title={"Men's Shoes"}
        onBackPress={onBackPress}
      />
      <ScrollView className="flex-1 bg-gray">
        <Image
          source={{uri: product.mainImage}}
          className="h-[300px] bg-white"
          resizeMode="contain"
        />
        <View className="bg-gray-100 bottom-[40px] rounded-[30px] mb-[60px]">
          <Text className="text-[20px] text-black font-bold px-6 pt-8">
            {product.name}
          </Text>
          <Badge title={product.stockStatus} className="rounded-tl-[30px]" />
          <Text className="text-[14px] text-gray-500 px-6 pt-2">
            {product.description}
          </Text>
          <Text className="text-[16px] text-black font-bold px-6 py-3">
            Select Colour :
          </Text>
          <ColorList
            className="ml-5"
            type={product.colour}
            onPress={value => setColor(value)}
          />
          {product.sizes.length > 0 && (
            <>
              <Text className="text-[16px] text-black font-bold px-6 py-3 ">
                Select Size :
              </Text>
              <SizeList
                className="ml-5 "
                sizeList={product.sizes}
                onPress={value => setSize(value)}
              />
            </>
          )}
        </View>
      </ScrollView>
      <BottomCard
        buttonTitle="Add to Cart"
        price={`${product.price.currency}${product.price.amount}`}
        isDisable={validateButton()}
        onPress={onAddToCart}
      />
    </>
  );
};

export default ProductDetailScreen;
