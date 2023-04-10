import React, { useEffect, useRef } from 'react';

import LottieView from 'lottie-react-native';
import { View } from 'react-native';

//Styles
import styles from './Styles';

const MountAnimationLottie = (props) => {

  const animation = useRef(null);

  //Cicle Life
  useEffect(() => {
    animation.current.play();
  },[])

  return (
    <View >
      <LottieView
        style={{ width: 80, height: 80 }}
        ref={animation}
        source={props.nameLottie}
        loop
      />
    </View>
  )

}

export default MountAnimationLottie