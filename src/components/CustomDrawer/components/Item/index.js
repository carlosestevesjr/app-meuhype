import * as React from 'react';

import { BTNGradient, BTNSample } from '../../../Buttons';

import { colors } from '../../../../styles';

const Item = ({ icon, name, focus, onPress }) => {
  return (
    focus ? (
      <BTNGradient
        title={name}
        iconName={icon}
        fontColor={colors.light}
        iconColor={colors.light}
        loading={false}
        iconLeft={true}
        iconRight={false}
        fontSize={'medium'}
        alignGeral={'left'}
        btnSizeType={'medium'}
        gradientColors={[colors.gradientStart1, colors.gradientEnd1]}
        onPress={onPress}
      />
    )
      :
      (
        <BTNSample
          title={name}
          bgColor={colors.primary200}
          iconName={icon}
          iconColor={colors.light}
          fontColor={colors.light}
          loading={false}
          iconLeft={true}
          iconRight={false}
          fontSize={'medium'}
          alignGeral={'left'}
          btnSizeType={'medium'}
          onPress={onPress}
        />
      )
  );
};

export default Item;
