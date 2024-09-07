import React, {FC} from 'react';
import {Text, View} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

interface AddLabelProps {
  count: number;
  className?: string;
}

const AddLabel: FC<AddLabelProps> = ({className, count}) => {
  return (
    <View
      className={`absolute ${className} rounded-br-md bottom-0 right-0 bg-black w-[25px] h-[25px] items-center justify-center`}>
      {count === 0 ? (
        <FontAwesomeIcon name="plus" color={'white'} />
      ) : (
        <Text className="text-[14px] text-white font-semibold text-center">
          {count}
        </Text>
      )}
    </View>
  );
};

export default AddLabel;
