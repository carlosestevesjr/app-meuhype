import React from 'react';
import { ImageBackground, View, SafeAreaView, ScrollView } from 'react-native';

import styles from './styles';
import bg1 from './../../assets/images/bg-1.png'

export default Layout = ({ children }) => {
  return (
    <ImageBackground
      source={bg1}
      resizeMode="cover"
      style={styles.image}
    >
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            {children}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

