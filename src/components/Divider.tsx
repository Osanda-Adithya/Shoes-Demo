import React, {FC} from 'react';
import {View} from 'react-native';

interface DividerProps {
  className?: string;
}

const Divider: FC<DividerProps> = ({className}) => {
  return <View className={`h-[0.5px] bg-gray-400 ${className}`} />;
};

export default Divider;
