import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../styles';
import { wpd, hpd } from '../../../helpers/index';

const alignButton = {
  borderColor: colors.primary50,
  backgroundColor: colors.light,
  borderRadius: metrics.baseRadius * 2,
  marginVertical: wpd(1),
  paddingHorizontal: wpd(2),
  alignSelf: 'stretch',
  // shadowColor: "#000",
  // shadowOffset: {
  //   width: 0,
  //   height: 6,
  // },
  // shadowOpacity: 0.37,
  // shadowRadius: 7.49,

  // elevation: 12,
}

const styles = StyleSheet.create({
  montContent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainerGradientDefault: {
    ...alignButton,
    paddingVertical: wpd(1),
  },
  buttonContainerGradientSmall: {
    ...alignButton,
    paddingVertical: wpd(1),
  },
  buttonContainerGradientMedium: {
    ...alignButton,
    paddingVertical: wpd(2),
  },
  buttonContainerGradientLarge: {
    ...alignButton,
    paddingVertical: wpd(3),
  },
  buttonTextGradient: {
    paddingHorizontal: wpd(1),
    color: colors.dark,
    fontFamily: 'TradeGothicBold',
    fontSize: colors.fontSmall,
  },
  loading: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginBottom: metrics.baseMargin / 2,
  },
});

export default styles;
