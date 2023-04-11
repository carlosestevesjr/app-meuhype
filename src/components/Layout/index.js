import React from 'react';
import { ImageBackground, View, SafeAreaView, ScrollView } from 'react-native';

import styles from './styles';

export default Layout = ({ children }) => {
  return (
    <View style={styles.container} >
      {/* <SafeAreaView> */}
        {children}
      {/* </SafeAreaView> */}
    </View >
  );
};

