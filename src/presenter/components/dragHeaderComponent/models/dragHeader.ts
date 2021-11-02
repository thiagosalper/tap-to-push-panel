import { TextStyle, ViewStyle } from "react-native";

export default interface DragHeader {
  styleBase: ViewStyle;
  title: string;
  styleTitle: TextStyle;
  resetPanel(): void;
  leftLabel: string;
  leftAction(): void;
}
