import React, {FC} from 'react';
import {Text, View} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

interface CartQtyCounterProps {
  count: string;
  onMinPress: () => void;
  onPlusPress: () => void;
}

const CartQtyCounter: FC<CartQtyCounterProps> = ({
  count,
  onMinPress,
  onPlusPress,
}) => {
  return (
    <View className="flex-1 flex-row items-center">
      <FontAwesomeIcon
        name="minus-circle"
        size={24}
        color={'black'}
        onPress={onMinPress}
      />
      <Text className="text-[16px] text-center text-black font-semibold px-4">
        {count}
      </Text>
      <FontAwesomeIcon
        name="plus-circle"
        size={24}
        color={'black'}
        onPress={onPlusPress}
      />
    </View>
  );
};

export default CartQtyCounter;
