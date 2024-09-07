import React, {FC} from 'react';
import {View, Image, Platform, Text} from 'react-native';
import CartQtyCounter from './CartQtyCounter';
import ItemCard from './ItemCard';
import {Cart} from '../models';
import {styled} from 'nativewind';

interface CartCardProps {
  item: Cart;
  className?: string;
  onMinPress: () => void;
  onPlusPress: () => void;
}

const CartCard: FC<CartCardProps> = ({
  item,
  className,
  onMinPress,
  onPlusPress,
}) => {
  const {product, qty} = item;
  const StylesView = styled(View);
  return (
    <View className={`flex-1 flex-row px-3 rounded-md my-1 ${className}`}>
      <Image
        source={{uri: product.mainImage}}
        resizeMode="contain"
        className="w-[150px] h-[150px] bg-white"
      />
      <StylesView
        className={`flex-1 justify-center pl-3 ml-3 bg-white rounded-lg shadow ${
          Platform.OS === 'ios' ? 'shadow-black/15' : 'shadow-black/60'
        }`}>
        <Text className="text-black text-[14px] font-semibold ml-1 mb-1">
          {product.name}
        </Text>
        <View>
          <View className="flex-row">
            <ItemCard item={product.colour} isSelected={false} />
            <ItemCard item={product.sizes[0]} isSelected={false} />
          </View>
        </View>
        <Text className="text-black text-[14px] font-semibold ml-2 mt-1">
          {product.price.currency} {Number(product.price.amount) * qty}
        </Text>
      </StylesView>
      <View className="absolute bottom-3 right-7">
        <CartQtyCounter
          count={String(qty)}
          onMinPress={onMinPress}
          onPlusPress={onPlusPress}
        />
      </View>
    </View>
  );
};

export default CartCard;
