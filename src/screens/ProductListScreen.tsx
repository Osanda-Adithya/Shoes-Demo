import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {RootStack} from '../navigator/StackNavigator';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../redux/store';
import {fetchProductListThunk} from '../redux/repositeries';
import {ProductCard} from '../components';
import {ProductListData} from '../models';
import {TabStack} from '../navigator/BottomTabNavigator';
import {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

type ProductListScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabStack, 'ProductList'>,
  NativeStackScreenProps<RootStack>
>;

const ProductListScreen: FC<ProductListScreenProps> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const selector = useSelector((state: RootState) => state.productListSlice);
  const {productList} = selector;
  const GAP_BETWEEN = 10;

  useEffect(() => {
    dispatch(fetchProductListThunk());
  }, [dispatch]);

  const renderProductItem = ({item}: {item: ProductListData}) => {
    return (
      <ProductCard item={item} onPress={() => navigateToProductDetail(item)} />
    );
  };

  const navigateToProductDetail = (product: ProductListData) => {
    navigation.navigate('ProductDetailScreen', {product} as never);
  };

  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 mt-4">
        <FlatList
          data={productList}
          keyExtractor={(i, _) => i.id}
          renderItem={renderProductItem}
          numColumns={2}
          contentContainerStyle={{
            marginHorizontal: GAP_BETWEEN,
            gap: GAP_BETWEEN / 2,
            marginBottom: GAP_BETWEEN,
            paddingTop:GAP_BETWEEN
          }}
          columnWrapperStyle={{
            marginRight: GAP_BETWEEN,
            gap: GAP_BETWEEN,
            marginBottom: GAP_BETWEEN,
          }}
        />
      </View>
    </View>
  );
};

export default ProductListScreen;
