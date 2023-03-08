import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';
import { hpd, wpd } from '../../helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: wpd(5),
  },
});

export default styles;
