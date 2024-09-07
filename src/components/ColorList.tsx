import React, {FC, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import ItemCard from './ItemCard';

interface ColorListProps {
  className?: string;
  type: string;
  onPress?: (color: string) => void;
}

const ColorList: FC<ColorListProps> = ({className, type, onPress}) => {
  const [color, setColor] = useState<string>('');

  const onColorPress = (colorName: string) => {
    setColor(colorName);
    onPress && onPress(colorName);
  };

  return (
    <View className={`flex-row ${className}`}>
      {type === 'multicoloured' ? (
        ['Orange', 'Black', 'Red'].map((item: string, index: number) => (
          <TouchableOpacity key={index} onPress={() => onColorPress(item)}>
            <ItemCard isSelected={color === item} item={item} />
          </TouchableOpacity>
        ))
      ) : (
        <TouchableOpacity onPress={() => onColorPress(type)}>
          <ItemCard isSelected={color === type} item={type} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ColorList;
