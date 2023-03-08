import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../styles';
import { wpd, hpd } from '../../../helpers/index';

import { checkOrientation } from '../../../styles/metrics'
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },
  modalView: {
    backgroundColor: colors.primary50,
    minHeight: (checkOrientation() == "Portrait") ? hpd(80) : hpd(30),
    marginHorizontal: wpd(2),
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    padding: wpd(4),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:wpd(2),
    borderBottomColor:colors.primary100,
    borderBottomWidth:1,
  },
  headerText:{
    fontFamily:'TradeGothicBold',
    color:colors.primary300,
    fontSize:colors.fontExtraLarge
  },
  modalContent:{
    flex:1,
    paddingVertical:wpd(2)
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loading: {
    stroke: '#000000',
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginBottom: metrics.baseMargin / 2,
  },
});

export default styles;
