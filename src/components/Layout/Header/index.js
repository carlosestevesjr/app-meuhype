import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import Menu from "./../../../assets/icons/menu.svg";
import ArrowLeft from "./../../../assets/icons/arrow_left.svg";
import LogoHeader from "./../../../assets/images/logo-branca.svg";

const Header = ({ title, navigation }) => {
  const state = navigation;
  const getRouteName = state.getState().routeNames?.[state.getState()?.index];

  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <View style={styles.containerContentLogo}>
          {
            (getRouteName == "Dashboard") ?
              <TouchableOpacity
                style={styles.logo}
                onPress={() => {
                  navigation.navigate('Dashboard');
                }}
              >
                <LogoHeader
                  width={styles.logo.width}
                  height={styles.logo.height}
                />
              </TouchableOpacity>
              :
              <TouchableOpacity
                style={styles.logo}
                onPress={() => {
                  navigation.navigate('Dashboard');
                }}
              >
                <ArrowLeft color={'#000'} width="35" height="35" />
              </TouchableOpacity>
          }
          <Text style={styles.textHeader}>{title}</Text>
        </View>
        <View style={styles.containerContentCenter}>
          <TouchableOpacity
            onPress={() => {
              navigation.toggleDrawer();
            }}
          >
            <Menu />
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

export default Header;
