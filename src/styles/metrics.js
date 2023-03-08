import { Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

import * as ScreenOrientation from "expo-screen-orientation";

export const checkOrientation = async () => {
  const orientation = await ScreenOrientation.getOrientationAsync();
  console.log("orientation", orientation);

  if(orientation == 1 || orientation == 2){
    return 'LandScape'
  }else if(orientation == 3 || orientation == 4){
    return 'LandScape'
  }
  return null
};

export default {
  basePadding: 20,
  baseMargin: 30,
  paddingAbsolute: 20,
  marginAbsolute: 20,
  baseRadius: 5,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  marginTop: Platform.OS === 'ios' ? 34 : StatusBar.currentHeight + 10,
};
