import React from 'react';
import { View } from 'react-native';
import { DragButton } from './models';

export default class DragButtonComponent extends React.PureComponent<DragButton> {
  render() {
    return <View style={this.props.styles} {...this.props.panHandlers} />;
  }
}