import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';
import { hpd, wpd } from '../../helpers';

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: hpd(94.7),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: wpd(10),
  },
  headerUser: {
    fontFamily: 'TradeGothicBold',
    fontSize: colors.fontUltraLarge,
    color: colors.light,
    padding: wpd(2)
  },
  contentText: {
    textAlign: 'center',
    flexDirection: 'row',
  },
  contentText2: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    margin: wpd(3),
    fontFamily: 'TradeGothic',
    fontSize: colors.fontLarge,
    color: colors.light,
  },
  textDestaque: {
    textAlign: 'left',
    fontFamily: 'TradeGothicBold',
    fontSize: colors.fontLarge,
    color: colors.primary300,
  },
  contentBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: wpd(10),
  }
  // modalBtn: {
  //   padding: metrics.basePadding,
  //   marginVertical: metrics.baseMargin / 4,
  // },
});

export default styles;
