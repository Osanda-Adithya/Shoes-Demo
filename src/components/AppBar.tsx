import React, {FC} from 'react';
import {Text, View} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

interface AppBarProps {
  title: string;
  enableBackButton?: boolean;
  onBackPress?: () => void;
}

const AppBar: FC<AppBarProps> = ({title, enableBackButton, onBackPress}) => {
  return (
    <View className="h-[50px] flex-row items-center px-5 bg-white">
      {enableBackButton && (
        <FontAwesomeIcon
          name="arrow-left"
          color={'black'}
          size={18}
          onPress={onBackPress}
        />
      )}
      <Text className="text-base font-semibold text-black text-[18px] text-center flex-1">
        {title}
      </Text>
    </View>
  );
};

export default AppBar;
