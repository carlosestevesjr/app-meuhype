import * as React from 'react';

import { BTNSample } from '../../../Buttons';

import { colors } from '../../../../styles';

const Item = ({ icon, name, focus, onPress }) => {
  return (
    focus ? (
      <BTNSample
        title={name}
        bgColor={colors.primary500}
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
