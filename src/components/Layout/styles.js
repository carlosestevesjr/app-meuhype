import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';
import { hpd, wpd } from '../../helpers';

const styles = StyleSheet.create({
  image: {
    flex: 1,
    // height: hpd(94.7),
    backgroundColor: colors.secundary100
  },
  container: {
    // padding:wpd(2)
    // backgroundColor: 'rgba(255, 255, 255, 0.10)'
  },
});

export default styles;
