import React, {FC} from 'react';
import {Text, View} from 'react-native';

interface ItemCardProps {
  isSelected: boolean;
  item: string;
}

const ItemCard: FC<ItemCardProps> = ({isSelected, item}) => (
  <View
    className={`${
      isSelected ? 'border-black' : 'border-gray-300'
    }  border-[1.5px] rounded p-2 mx-1`}>
    <Text
      className={`${
        isSelected ? 'text-black' : 'text-gray-400'
      } font-medium text-center`}>
      {item}
    </Text>
  </View>
);

export default ItemCard;
