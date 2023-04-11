import React from 'react';

import { Text, View } from 'react-native';

import styles from './styles';
import MountAnimationLottie from '../../MountAnimationLottie/MountAnimationLottie';

const LoaderScroll = () => {
  return (
    <View style={styles.contentLoader }>
      <Text style={styles.textLoader}>Carregando...</Text>
      <MountAnimationLottie nameLottie={require("../../../assets/lottie/animation-1.json")} />
    </View>
  );
};

export default LoaderScroll;
