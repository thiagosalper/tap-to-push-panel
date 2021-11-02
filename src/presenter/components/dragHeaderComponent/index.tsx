import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { DragHeader } from './models';

export default class DragHeaderComponent extends React.PureComponent<DragHeader> {
  render() {
    return (
      <View style={this.props.styleBase}>
        <TouchableOpacity onPress={this.props.resetPanel}>
          <Entypo
            name={'chevron-thin-down'} 
            size={24} 
            color={'blue'} 
          />
        </TouchableOpacity>

        <Text style={this.props.styleTitle}>{this.props.title}</Text>
        <TouchableOpacity onPress={this.props.leftAction}>
          <Text>{this.props.leftLabel}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
