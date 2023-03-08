import { wpd, hpd } from '../../helpers/index';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  drawerContentContainer: {
    flex: 1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'center',
    // minHeight:500
  },
  drawerContainer: {
    backgroundColor: colors.primary50,
    paddingTop:  metrics.basePadding,
    paddingBottom: metrics.basePadding,
  },
  containerContent: {
    width:'90%'
  },
  containerContentLogo: {
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'center',
  },
  textLogo: {
    marginVertical: wpd(2),
    color:colors.primary400,
    fontFamily: 'RobotoBold',
    fontSize: colors.fontSmall,
    textAlign: 'center',
  },
  logoMenu: {
    width: wpd(25),
    height: wpd(25),
  },
  focusContainer: {
    borderRadius: metrics.baseRadius,
    borderWidth: 1,
    borderColor: colors.black,
    width: 32,
    height: 32,
  },
 
  containerContentLogout:{
    flexDirection:'column',
    alignItems:'center'
  }

});

export default styles;
