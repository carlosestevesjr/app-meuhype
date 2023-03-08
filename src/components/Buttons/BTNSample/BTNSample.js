import React from 'react';

import { TouchableOpacity, Text, View } from 'react-native';

import LottieView from 'lottie-react-native';

import { colors } from '../../../styles';
import MyIcons from '../../MyIcons';

import styles from './styles';

import loadingJson from '../../../assets/images/loading.json';

const BTNSample = ({
  title,
  iconName,
  widthIcon,
  heightIcon,
  iconColor,
  bgColor,
  brdColor,
  btnSizeType,
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
      return <View
        style={
          [
            styles.buttonContainerSmall,
            (bgColor) && {'backgroundColor':bgColor},
            (brdColor) && {'borderWidth':1,'borderColor':brdColor},
          ]
        }
      >
        {montContent()}
      </View>
    } else if (btnSizeType && btnSizeType === 'medium') {
      return <View
        style={
          [
            styles.buttonContainerMedium,
            (bgColor) && {'backgroundColor':bgColor},
            (brdColor) && {'borderWidth':1,'borderColor':brdColor},
          ]
        }
      >
        {montContent()}
      </View>
    } else if (btnSizeType && btnSizeType === 'large') {
      return <View
        style={
          [
            styles.buttonContainerLarge,
            (bgColor) && {'backgroundColor':bgColor},
            (brdColor) && {'borderWidth':1,'borderColor':brdColor},
          ]
        }
      >
        {montContent()}
      </View>
    } else {
      return <View
        style={
          [
            styles.buttonContainerDefault,
            (bgColor) && {'backgroundColor':bgColor},
            (brdColor) && {'borderWidth':1,'borderColor':brdColor},
          ]
        }
      >
        {montContent()}
      </View>
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
            styles.buttonText,
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

export default BTNSample;
