import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  styWrapContent: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: -50,
    overflow: 'hidden',
    padding: 10,
  },
  styWrapBtn: {
    borderWidth: 1,
    borderColor: COLORS.GREEEN,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: COLORS.GREEEN,
  },
});

export default styles;
