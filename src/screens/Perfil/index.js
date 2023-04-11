import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Dimensions } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { Creators as AuthActions } from '../../store/reducers/authentication';

import { hpd, wpd } from '../../helpers';

// import styles from './styles';
import { colors, metrics } from '../../styles';

import Layout from '../../components/Layout';
import Lottie from 'lottie-react-native';
const Perfil = ({ navigation: { openDrawer, navigate } }) => {
  const animationRef = useRef(null)

  useEffect(() => {
    // animationRef.current?.play()

    // Or set a specific startFrame and endFrame with:
    animationRef.current?.play(30, 120);
  }, [])
  return (
    <Lottie
      autoPlay
      loop
      ref={animationRef}
      source={require('./../../assets/lottie/camera-cinema.json')}
    />
  );
};

export default Perfil;
