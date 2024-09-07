import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import {StackNavigator} from './src/navigator';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {SafeAreaView} from 'react-native';

const App: FC = () => {
  return (
    <SafeAreaView className="flex-1">
      <Provider store={store}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
