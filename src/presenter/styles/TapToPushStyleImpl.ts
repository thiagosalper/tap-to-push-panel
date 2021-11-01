import { StyleSheet } from "react-native";
import { ScreenSize } from '../../constants';
import { TapToPushStyle } from "./model";

const styles = StyleSheet.create<TapToPushStyle>({
  base: {
    position: "absolute",
    left: 0,
    right: 0,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    bottom:  -(ScreenSize.HEIGHT - 160),
    width: ScreenSize.WIDTH,
    height: ScreenSize.HEIGHT,
    padding: 10,
    borderRadius: 12,
    shadowColor: `rgba(0,0,0,.1)`,
    shadowRadius: 7,
    elevation: 1,
    backgroundColor: '#fff',
  },
  dragButton: {
    backgroundColor: '#ccc',
    borderRadius: 4,
    marginVertical: 0,
    alignSelf: 'center',
    width: 60,
    height: 8,
  },
  title: {
    fontSize: 16,
    alignSelf: 'center',
  },
  flexHorz: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  baseHeader: {
    marginHorizontal: 8
  },

});

export default styles;
