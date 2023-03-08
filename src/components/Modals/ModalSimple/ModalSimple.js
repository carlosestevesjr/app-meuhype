import React, { useState } from 'react';

import { TouchableOpacity, Modal, Text, View, ScrollView } from 'react-native';

import LottieView from 'lottie-react-native';

import { colors } from '../../../styles';
import MyIcons from '../../MyIcons';

import styles from './styles';

import loadingJson from '../../../assets/images/loading.json';

const ModalSimple = ({
  title,
  modalVisible,
  onRequestClose,
  children
}) => {
  const montContent = () => (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={onRequestClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text style={styles.headerText}>{title}</Text>
              <TouchableOpacity
                style={[]}
                onPress={() => onRequestClose(!modalVisible) }
              >
                <MyIcons
                  iconName={'close'}
                  iconColor={colors.bgDanger}
                  // widthIcon={widthIcon}
                  // heightIcon={heightIcon}
                  btnSizeType={'large'}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.modalContent}>
              <ScrollView>
                {children}
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )

  return (
    <>
      {montContent()}
    </>
  );
};

export default ModalSimple;
