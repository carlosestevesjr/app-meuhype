import { StyleSheet } from 'react-native';
import { colors } from '../../../styles';
import { hpd, wpd } from '../../../helpers';

const styles = StyleSheet.create({
  container: {
    flow: 1,
    paddingLeft: hpd(2),
    paddingRight: hpd(2),
    paddingTop: hpd(5),
    // paddingBottom: hpd(1),
    height: hpd(11),
    backgroundColor: colors.primary500,
  },
  containerContent: {
    with: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerContentLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginRight: wpd(2),
    width: 35,
    height: 35,
  },
  textHeader: {
    fontFamily: 'RobotoBold',
    fontSize: colors.fontMedium,
    color: colors.light,
  },
  containerContentCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wpd(2),
    paddingVertical: wpd(1),
  },
});

export default styles;
