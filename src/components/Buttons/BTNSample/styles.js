import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../styles';
import { wpd, hpd } from '../../../helpers/index';

const alignButton = {
  borderColor: colors.primary50,
  borderRadius: metrics.baseRadius * 2,
  backgroundColor:colors.light,
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
  montContent:{
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
  },
  buttonContainerDefault: {
    ...alignButton,
    paddingVertical: wpd(2),
  },
  buttonContainerSmall: {
    ...alignButton,
    paddingVertical: wpd(1),
  },
  buttonContainerMedium: {
    ...alignButton,
    paddingVertical: wpd(2),
  },
  buttonContainerLarge: {
    ...alignButton,
    paddingVertical: wpd(3),
  },
  buttonText: {
    paddingHorizontal: wpd(1),
    color: colors.dark,
    fontFamily: 'TradeGothicBold',
    fontSize: colors.fontSmall,
  },
  loading: {
    stroke: '#000000',
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginBottom: metrics.baseMargin / 2,
  },
});

export default styles;
