import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';
import { wpd, hpd } from '../../helpers/index';

const styles = StyleSheet.create({
  containerChannelsHighlight: {
    position: 'absolute',
    bottom: 50,
    // backgroundColor: colors.darkTransparent2,
  },
  contentChannelsHighlight: {
    borderColor:colors.gray,
    borderWidth:3,
    borderRadius:50,
    padding: wpd(2),
    margin: wpd(2),
    backgroundColor:colors.light
  },
  channelsHighlightLogo:{
    width: 65,
    height: 65
  },
  contentChannelsHighlightType:{
    position: 'absolute',
    bottom: '20%',
    right: '50%'
  }
});

export default styles;
