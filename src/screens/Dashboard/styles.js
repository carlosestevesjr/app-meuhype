import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';
import { hpd, wpd } from '../../helpers';

const styles = StyleSheet.create({
  container: {
  },
  containerNews: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: wpd(2),
    // backgroundColor:colors.dark,
    // borderBottomWidth:1,
    marginBottom: wpd(2)
  },
  topNews: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: wpd(2)
  },

  contentNewsChannelLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    // width:wpd(30) ,

  },
  contentNewsBgChannelLogo: {
    borderRadius: 5,
    padding: wpd(2),
    backgroundColor: colors.light,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  newsChannelLogo: {
    width: 45,
    height: 27
  },
  newsChannelName: {
    marginHorizontal: wpd(2),
    fontFamily: 'TradeGothicBold',
    fontSize: colors.fontSmall,
    color: colors.black
  },
  newsDate: {
    marginHorizontal: wpd(2),
    fontFamily: 'RobotoRegular',
    fontSize: colors.fontSmall
  },

  contentNews: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: 5,
    paddingHorizontal: wpd(2),
  },
  newsContentImage: {
    position: 'relative',
    width: wpd(26),
    marginVertical: wpd(2),
  },
  newsImage: {
    borderRadius: 5,
    width: wpd(26),
    height: 60,
  },
  newsTitle: {
    textTransform: 'uppercase',
    margin: wpd(2),
    width: wpd(64),
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontFamily: 'TradeGothicBold',
    fontSize: colors.fontSmall,
    color: colors.black,
  },
  bottomNews: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: wpd(2),
  },
  newsContentTags: {
    // backgroundColor:'#d3d3d3',
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  newsTag: {
    margin: wpd(1),
    borderRadius: 20,
    padding: wpd(2),
    backgroundColor: colors.primary500
  },
  newsTagName: {
    fontFamily: 'TradeGothicBold',
    fontSize: colors.fontExtraSmall,
    color: colors.light
  },
});

export default styles;
