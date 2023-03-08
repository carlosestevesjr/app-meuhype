import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { Creators as AuthActions } from '../../store/reducers/authentication';

import styles from './styles';
import { colors } from '../../styles';

import LogoGreen from "./../../assets/icons/icon_logo_green.svg";
import Layout from '../../components/Layout';
import { BTNGradient } from '../../components/Buttons';
import { ModalSimple } from '../../components/Modals';

import { GlobalContext } from "../../contexts/GlobalContext";

const Dashboard = ({ navigation }) => {

  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const { data } = useSelector((state) => (state.authentication))

  const {
    appContext,
    statusModalUpdatePassword
  } = useContext(GlobalContext)

  return (
    <Layout>
      <TouchableOpacity
        style={[]}
        onPress={() => statusModalUpdatePassword(true)}>
        <Text style={styles.textStyle}>Mudar Context</Text>
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <LogoGreen></LogoGreen>
          <Text style={styles.headerUser}>Admin 2</Text>
        </View>
        <View style={[styles.contentText2]}>
          <Text style={styles.text}>Bem Vindo ao <Text style={styles.textDestaque}>IG MÁQUINAS</Text></Text>
        </View>
        <View style={styles.contentText}>
          <Text style={styles.text}>Esse aplicativo tem o objetivo de facilitar e agilizar o processo de venda ao cliente além de propiciar maior autonomia ao vendedor no campo.</Text>
        </View>
        <View style={styles.contentText}>
          <Text style={styles.text}>Dúvidas entre em contato com o administrador do aplicativo.</Text>
        </View>
        <View style={styles.contentText}>
          <Text style={styles.text}>Boas Vendas !!!</Text>
        </View>
        <View style={styles.contentBtn}>
          <BTNGradient
            title={'MONTAR COTAÇÃO'}
            iconName={'machine'}
            widthIcon={30}
            heightIcon={30}
            fontColor={colors.light}
            iconColor={colors.secundary400}
            loading={false}
            iconRight={true}
            fontSize={'medium'}
            alignGeral={'left'}
            gradientColors={[colors.gradientStart1, colors.gradientEnd1]}
            onPress={() => {
              navigation.navigate('Quotations')
            }}
          />
        </View>
        <ModalSimple
          title={'Alterar Senha'}
          modalVisible={appContext.modalUpdatePasswordOpen}
          onRequestClose={
            () => {
              statusModalUpdatePassword(false)
            }
          }
        >
          <Text>dasdasdsaddsdss dsadas dasdasas dsdas dasdas</Text>
          <Text>dasdasdsaddsdss dsadas dasdasas dsdas dasdas</Text>
          <Text>dasdasdsaddsdss dsadas dasdasas dsdas dasdas</Text>
          <Text>dasdasdsaddsdss dsadas dasdasas dsdas dasdas</Text>
          <Text>dasdasdsaddsdss dsadas dasdasas dsdas dasdas</Text>
          <Text>dasdasdsaddsdss dsadas dasdasas dsdas dasdas</Text>
          <Text>dasdasdsaddsdss dsadas dasdasas dsdas dasdas</Text>
          <Text>dasdasdsaddsdss dsadas dasdasas dsdas dasdas</Text>
          <Text>dasdasdsaddsdss dsadas dasdasas dsdas dasdas</Text>
          <Text>dasdasdsaddsdss dsadas dasdasas dsdas dasdas</Text>
          <Text>dasdasdsaddsdss dsadas dasdasas dsdas dasdas</Text>
          <Text>dasdasdsaddsdss dsadas dasdasas dsdas dasdas</Text>
          <Text>dasdasdsaddsdss dsadas dasdasas dsdas dasdas</Text>
          <Text>dasdasdsaddsdss dsadas dasdasas dsdas dasdas</Text>
          <Text>dasdasdsaddsdss dsadas dasdasas dsdas dasdas</Text>
          <Text>dasdasdsaddsdss dsadas dasdasas dsdas dasdas</Text>
          <Text>dasdasdsaddsdss dsadas dasdasas dsdas dasdas</Text>
          <Text>dasdasdsaddsdss dsadas dasdasas dsdas dasdas</Text>
          <Text>dasdasdsaddsdss dsadas dasdasas dsdas dasdas</Text>
          <Text>dasdasdsaddsdss dsadas dasdasas dsdas dasdas</Text>
          <Text>dasdasdsaddsdss dsadas dasdasas dsdas dasdas</Text>
          <Text>dasdasdsaddsdss dsadas dasdasas dsdas dasdas</Text>
          <Text>dasdasdsaddsdss dsadas dasdasas dsdas dasdas</Text>
          <Text>dasdasdsaddsdss dsadas dasdasas dsdas dasdas</Text>
          <Text>dasdasdsaddsdss dsadas dasdasas dsdas dasdas</Text>
          <Text>dasdasdsaddsdss dsadas dasdasas dsdas dasdas</Text>
          <Text>dasdasdsaddsdss dsadas dasdasas dsdas dasdas</Text>
        </ModalSimple>
      </View>
    </Layout>
  );
};

export default Dashboard;
