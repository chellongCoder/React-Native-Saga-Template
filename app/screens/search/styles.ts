import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
import { Platform } from '../../theme';

export default StyleSheet.create({
  contain: {
    flex: 1,
  },
  styWrapFilter: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    margin: 5,
    padding: 5,
  },
  styWrapFilterEle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: COLORS.LIGHT,
    margin: 5,
    padding: 5,
    backgroundColor: COLORS.LIGHT,
  },
  styWrapFilterEleActive: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: COLORS.GREEEN,
    margin: 5,
    padding: 5,
    backgroundColor: COLORS.GREEEN,
  },
  styTxtFilter: {
    fontSize: Platform.SizeScale(12),
    marginHorizontal: 3,
  },
  styTxtFilterActive: {
    fontSize: Platform.SizeScale(12),
    marginHorizontal: 3,
    color: COLORS.WHITE,
  },
  styWrapEmpty: {
    height: Platform.baseScreenHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
