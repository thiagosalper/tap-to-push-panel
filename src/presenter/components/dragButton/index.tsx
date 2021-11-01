import React from 'react';
import { GestureResponderHandlers, View, ViewStyle } from 'react-native';

export default class DragButton extends React.PureComponent<{ styles: ViewStyle, panHandlers: GestureResponderHandlers }> {
  render() {
    return <View style={this.props.styles} {...this.props.panHandlers} />;
  }
}