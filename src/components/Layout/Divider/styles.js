import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../styles';
import { hpd, wpd } from '../../../helpers';

const styles = StyleSheet.create({
  container: {
    flow: 1,
  },
  containerContent: {
    marginVertical:hpd(1),
    flexDirection:'row',
    alignContent:'center',
    backgroundColor:colors.divider,
    height: 1,
  },
});

export default styles;
