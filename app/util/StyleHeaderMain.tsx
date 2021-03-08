import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contain: {
    paddingHorizontal: 10,
    // backgroundColor: '#4267B2',
    paddingVertical: 3,
  },
  styWrapHeader: {
    justifyContent: 'space-between',
    marginTop: 15,
  },
  stySearch: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginHorizontal: 10,
    borderColor: '#FFF',
    backgroundColor: '#FFF',
    flex: 1,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  styInput: {
    color: '#000',
    marginHorizontal: 5,
  },
});

export default styles;
