import React from 'react';
import { View } from 'react-native';
import { TapToPushStyleImpl } from './src/presenter/styles';
import TapToPushViewImpl from './src/presenter/TapToPushView';

class App extends React.PureComponent {
  render() {
    return (
      <View style={{ backgroundColor: 'tomato', flex: 1 }}>
        <TapToPushViewImpl title={'Open panel'} styles={TapToPushStyleImpl} leftLabel={'Help'} />
      </View>
    )
  }
}

export default App;
