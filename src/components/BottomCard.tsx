import React, {FC} from 'react';
import {View, Text} from 'react-native';
import Button from './Button';

interface BottomCardProps {
  buttonTitle: string;
  price: string;
  isDisable?: boolean;
  onPress?: () => void;
}

const BottomCard: FC<BottomCardProps> = ({
  buttonTitle,
  price,
  isDisable = false,
  onPress,
}) => {
  return (
    <View className="absolute w-11/12 h-[80px] bg-gray-100 bottom-[10px] mx-4 rounded-lg flex-row items-center">
      <View className="flex-1 ml-8">
        <Text className="text-[14px] text-gray-400 font-semibold">Price</Text>
        <Text className="text-black font-bold text-[18sp]">{price}</Text>
      </View>
      <Button title={buttonTitle} onPress={onPress} isDisable={isDisable} />
    </View>
  );
};

export default BottomCard;
