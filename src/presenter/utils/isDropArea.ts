import { PanResponderGestureState } from "react-native";
import { ScreenSize } from "../../constants";

export default function isDropArea(gesture: PanResponderGestureState) {
  return gesture.moveY < (ScreenSize.HEIGHT / 2);
}
