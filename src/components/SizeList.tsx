import React, {FC, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import ItemCard from './ItemCard';

interface SizeListProps {
  className?: string;
  sizeList: string[];
  onPress?: (size: string) => void;
}

const SizeList: FC<SizeListProps> = ({className, sizeList, onPress}) => {
  const [size, setSize] = useState<string>('');

  const onColorPress = (colorName: string) => {
    setSize(colorName);
    onPress && onPress(colorName);
  };

  return (
    <View className={`flex-row ${className}`}>
      {sizeList.map((item: string, index: number) => (
        <TouchableOpacity
          key={index}
          onPress={() => onColorPress(item)}
          className="w-[45px]">
          <ItemCard isSelected={size === item} item={item}/>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SizeList;
