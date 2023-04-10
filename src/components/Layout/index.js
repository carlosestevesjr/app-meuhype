import React from 'react';
import { ImageBackground, View, SafeAreaView, ScrollView } from 'react-native';

import styles from './styles';

export default Layout = ({ children }) => {
  return (
    <SafeAreaView>
      {/* <ScrollView> */}
        <View style={styles.container}>
          {children}
        </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

