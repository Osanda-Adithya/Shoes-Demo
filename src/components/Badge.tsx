import React, {FC} from 'react';
import {Text, View} from 'react-native';

interface BadgeProps {
  title: string;
  className?: string;
}

const Badge: FC<BadgeProps> = ({title, className}) => {
  const background = title === 'IN STOCK' ? 'bg-blue-500' : 'bg-red-500';
  return (
    <View className={`absolute ${background} rounded-tl-md ${className} `}>
      <Text className="text-white text-[12px] font-semibold px-4 py-[5px]">
        {title}
      </Text>
    </View>
  );
};

export default Badge;
