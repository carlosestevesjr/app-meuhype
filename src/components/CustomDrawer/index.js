import { DrawerContentScrollView } from '@react-navigation/drawer';
import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid';
import Item from './components/Item';
import LogoMenu from "./../../assets/images/logo-branca.svg";
import { BTNSample } from '../Buttons';

import styles from './styles';
import { colors } from '../../styles';
import Divider from '../Layout/Divider/Divider';

export default function CustomDrawerContent({
  props,
  navigation: { navigate },
  navigation
}) {

  const state = navigation;

  const getRouteName = state.getState().routeNames?.[state.getState()?.index];

  const items = [
    { icon: 'house', screen: 'Dashboard', name: 'Home' },
    { icon: 'user', screen: 'Perfil', name: 'Perfil' },
    { icon: 'users', screen: 'Clients', name: 'Clientes' },
    { icon: 'machine', screen: 'QuotationMount', name: 'Montar Cotação' },
    { icon: 'money', screen: 'Quotations', name: 'Cotações' },
    { icon: 'gear', screen: 'Configurations', name: 'Configurações' },
  ];

  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={styles.drawerContentContainer}
      style={styles.drawerContainer}
    >
      <View style={styles.containerContent}>
      <ScrollView  >
        <TouchableOpacity
          style={styles.containerContentLogo}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        >
          <LogoMenu
            width={styles.logoMenu.width}
            height={styles.logoMenu.height}
          />
          <Text style={styles.textLogo}>IG MÁQUINAS</Text>
        </TouchableOpacity>
        <View >
          {items.map(({ icon, name, func, screen, focused, route }, i) => (
            <Item
              key={i}
              name={name}
              icon={icon}
              onPress={() => {
                if (screen) {
                  navigate(screen);
                }
                if (screen && route) {
                  navigate(screen, route);
                }
                if (func) {
                  func();
                }
              }}
              focus={focused || getRouteName === screen}
            />
          ))}
        </View>
        <Divider />
        <View style={styles.containerContentLogout}>
          <BTNSample
            title={'Sair'}
            fontColor={colors.secundary900}
            iconColor={colors.secundary900}
            brdColor={colors.secundary900}
            iconName={'out'}
            loading={false}
            iconLeft={false}
            iconRight={true}
            fontSize={'small'}
            alignGeral={'center'}
            btnSizeType={'small'}
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
        </View>
      </ScrollView>
      </View>
    </DrawerContentScrollView>
  );
}
