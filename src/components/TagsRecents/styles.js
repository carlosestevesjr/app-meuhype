import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';
import { wpd, hpd } from '../../helpers/index';

const styles = StyleSheet.create({
  containerTagsRecents: {
    backgroundColor: colors.gray,
  },
  contentTag: {
    padding: wpd(2)
  }
});

export default styles;
