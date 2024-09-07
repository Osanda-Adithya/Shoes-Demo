import {styled} from 'nativewind';
import React, {FC, useMemo} from 'react';
import {TouchableOpacity, Platform, Image, Text} from 'react-native';
import AddLabel from './AddLabel';
import Badge from './Badge';
import {ProductListData} from '../models';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

interface ProductCardProps {
  item: ProductListData;
  onPress?: () => void;
}

const ProductCard: FC<ProductCardProps> = ({item, onPress}) => {
  const selector = useSelector((state: RootState) => state.cartSlice);
  const {cart} = selector;
  const StyledTouchableOpacity = styled(TouchableOpacity);

  const product = useMemo(() => {
    const itemList = cart.filter(i => i.product.SKU === item.SKU);
    return itemList.reduce((sum, productItem) => {
      return sum + Number(productItem.qty);
    }, 0);
  }, [cart, item.SKU]);

  return (
    <StyledTouchableOpacity
      className={`basis-1/2 rounded-md shadow ${
        Platform.OS === 'ios' ? 'shadow-black/20' : 'shadow-black'
      }  bg-white`}
      onPress={onPress}>
      <Image
        source={{uri: item.mainImage}}
        className="w-[120px] h-[120px] self-center"
      />
      <Badge title={item.stockStatus} />
      <Text className="text-black text-[16px] font-semibold px-3">
        {item.name}
      </Text>
      <Text className="text-gray-500 text-[16px] font-medium px-3 pt-1 pb-3">
        {item.price.currency}
        {item.price.amount}
      </Text>
      <AddLabel count={product} />
    </StyledTouchableOpacity>
  );
};

export default ProductCard;
