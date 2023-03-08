import React, { useState } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { Creators as AuthActions } from '../../store/reducers/authentication';

import { hpd, wpd } from '../../helpers';

import styles from './styles';
import { colors, metrics } from '../../styles';
import Layout from '../../components/Layout';

const QuotationMount = ({ navigation: { openDrawer, navigate } }) => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => (state.authentication))

  return (
    <Layout>
      <View style={styles.contentContainer}>
        <View style={styles.insideContainer}>
          <Text style={styles.text}>Quotations Mount {Dimensions.get('window').height}</Text>
        </View>
        <View style={styles.insideContainer}>
          {
            data &&
            data?.results?.map((item, i) => (
              <View key={i}>
                <Text>{item.name}</Text>
              </View>
            ))
          }
        </View>
        <View style={styles.insideContainer}>
          {
            data &&
            data?.results?.map((item, i) => (
              <View key={i}>
                <Text>{item.name}</Text>
              </View>
            ))
          }
        </View>
        <View style={styles.insideContainer}>
          {
            data &&
            data?.results?.map((item, i) => (
              <View key={i}>
                <Text>{item.name}</Text>
              </View>
            ))
          }
        </View>
      </View>
    </Layout>
  );
};

export default QuotationMount;
