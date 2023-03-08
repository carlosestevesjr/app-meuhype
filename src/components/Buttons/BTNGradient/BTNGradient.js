import React from 'react';

import { TouchableOpacity, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import LottieView from 'lottie-react-native';

import { colors } from '../../../styles';
import MyIcons from '../../MyIcons';

import styles from './styles';

import loadingJson from '../../../assets/images/loading.json';

const BTNGradient = ({
  title,
  width,
  iconName,
  iconColor,
  widthIcon,
  heightIcon,
  btnSizeType,
  gradientColors,
  fontColor,
  fontSize,
  loading,
  iconLeft,
  iconRight,
  alignGeral,
  onPress,
  disabled,
}) => {

  const montContent = () => (
    <View
      style={[
        styles.montContent,
        (!loading) &&
        (alignGeral && alignGeral === 'left') && { justifyContent: 'flex-start' },
        (alignGeral && alignGeral === 'center') && { justifyContent: 'center' },
        (alignGeral && alignGeral === 'right') && { justifyContent: 'flex-end' },
        (alignGeral && alignGeral === 'evenly') && { justifyContent: 'space-evenly'}
      ]}
    >
      {
        iconLeft && !loading && (
          <MyIcons
            iconName={iconName}
            iconColor={iconColor}
            widthIcon={widthIcon}
            heightIcon={heightIcon}
            btnSizeType={btnSizeType}
          />
        )
      }
      {textButton()}
      {
        iconRight && !loading && (
          <MyIcons
            iconName={iconName}
            iconColor={iconColor}
            widthIcon={widthIcon}
            heightIcon={heightIcon}
            btnSizeType={btnSizeType}
          />
        )
      }
    </View>
  )

  const getBtnSizeType = () => {
    if (btnSizeType && btnSizeType === 'small') {
      return <LinearGradient
        // Button Linear Gradient
        key="small"
        colors={gradientColors ? gradientColors : ['#F7F8F8', '#eaebeb']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={
          [
            styles.buttonContainerGradientSmall,
            (width) && { width: width },
          ]
        }
      >
        {montContent()}
      </LinearGradient>
    } else if (btnSizeType && btnSizeType === 'medium') {
      return <LinearGradient
        // Button Linear Gradient
        key="medium"
        colors={gradientColors ? gradientColors : ['#F7F8F8', '#eaebeb']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={
          [
            styles.buttonContainerGradientMedium,
            (width) && { width: width },
          ]
        }
      >
        {montContent()}
      </LinearGradient>
    } else if (btnSizeType && btnSizeType === 'large') {
      return <LinearGradient
        // Button Linear Gradient
        colors={gradientColors ? gradientColors : ['#F7F8F8', '#eaebeb']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={
          [
            styles.buttonContainerGradientLarge,
            (width) && { width: width },
          ]
        }
      >
        {montContent()}
      </LinearGradient>
    } else {
      return <LinearGradient
      // Button Linear Gradient
      key="none"
      colors={gradientColors ? gradientColors : ['#F7F8F8', '#eaebeb']}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
      style={
        [
          styles.buttonContainerGradientDefault,
          (width) && { width: width },
        ]
      }
    >
      {montContent()}
    </LinearGradient>
    }
  }

  const textButton = () => {
    if (title) {
      if (loading) {
        return (
          <LottieView
            source={loadingJson}
            autoPlay
            loop
            style={styles.loading}
          />
        );
      }
      return (
        <Text
          style={[
            styles.buttonTextGradient,
            (fontColor) && { color: fontColor },
            (fontSize && fontSize === 'small') && { fontSize: colors.fontSmall },
            (fontSize && fontSize === 'medium') && { fontSize: colors.fontMedium },
            (fontSize && fontSize === 'large') && { fontSize: colors.fontLarge }
          ]}
        >
          {title}
        </Text>
      );
    }
    return '';
  }

  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
      >
        {
          getBtnSizeType()
        }
      </TouchableOpacity>
    </>
  );
};

export default BTNGradient;
