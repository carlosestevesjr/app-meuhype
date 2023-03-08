import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';
import { wpd, hpd } from '../../helpers/index';

const styles = StyleSheet.create({
  border:{
    position:'absolute',
    // right:-wpd(14),
    padding: wpd(4),
    borderRadius: 50,
    backgroundColor:colors.secundary400,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 6,
    // },
    // shadowOpacity: 0.37,
    // shadowRadius: 7.49,
    // elevation: 12,
  },
  icon: {
    paddingHorizontal: wpd(4),
    color:colors.dark,
    
  },
});

export default styles;
