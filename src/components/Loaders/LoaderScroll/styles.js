import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../styles';
import { wpd, hpd } from '../../../helpers/index';

const styles = StyleSheet.create({
  contentLoader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 999,
    bottom: 0,
    backgroundColor: colors.primary400,
    padding: wpd(2)
  },
  textLoader: {
    color: colors.light
  }
});

export default styles;
