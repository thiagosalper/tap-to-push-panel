import React, { useRef, useState } from 'react';
import {
  Animated,
  PanResponder,
  View,
} from 'react-native';
import { TapToPushView } from './models';
import { ScreenSize } from '../constants';
import { isDropArea } from './utils';
import { DragButtonComponent, DragHeaderComponent } from './components';

const TapToPushViewImpl: React.FC<TapToPushView> = ({ children, title, styles, leftLabel }) => {
  const [dragable, setDragable] = useState(true);
  const pan = useRef(new Animated.ValueXY()).current;

  const resetPanel = () => {
    setDragable(true);
    Animated.spring(pan, {
      toValue: { x: 0, y: 0 },
      friction: 5,
      useNativeDriver: false,
    }).start();
  }

  const panResponder = useRef(PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: Animated.event([
          null, { dx: pan.x, dy: pan.y }
      ]),
      onPanResponderRelease: (e, gesture) => {
        pan.flattenOffset();
        if (isDropArea(gesture)) {
          Animated.timing(pan, {
            toValue: { x: 0, y: -(ScreenSize.HEIGHT - 200)},
            duration: 250,
            useNativeDriver: false,
          }).start(() => setDragable(false));
        } else {
          //
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            friction: 5,
            useNativeDriver: false,
          }).start();
          //
        }
      },
    })).current;

  return (
    <Animated.View style={[styles.base, {transform: [{ translateY: pan.y }]}]}>
      {dragable && (
        <DragButtonComponent 
          styles={styles.dragButton} 
          panHandlers={panResponder.panHandlers} />
      )}
      {!dragable && (
        <DragHeaderComponent 
          styleBase={{...styles.baseHeader, ...styles.flexHorz}} 
          title={title}
          styleTitle={styles.title}
          resetPanel={resetPanel}
          leftLabel={leftLabel}
          leftAction={() => {}} />
      ) }
      <View>{children}</View>
    </Animated.View>
  )
};

export default TapToPushViewImpl;
