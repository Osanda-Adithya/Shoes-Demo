import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface ButtonProps {
  title: string;
  isDisable: boolean;
  className?: string;
  onPress?: () => void;
}

const Button: FC<ButtonProps> = ({title, isDisable, onPress}) => {
  const onButtonPress = () => onPress && onPress();

  return (
    <TouchableOpacity
      disabled={isDisable}
      onPress={onButtonPress}
      className={`mr-10 ${
        isDisable ? 'bg-gray-400' : 'bg-black'
      } rounded-full`}>
      <Text className={`${isDisable ? 'text-gray-700' : 'text-white'} text-[16xp] font-semibold px-6 py-2`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
