import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 1,
  },
  itemImage: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 60,
    marginRight: 20,
  },
  itemName: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'OpenSans-Bold',
  },
  itemCategory: {
    fontFamily: 'OpenSans-Medium',
  },
  itemArea: {
    fontSize: 15,
    fontFamily: 'OpenSans-Bold',
  },
});

export default styles;
