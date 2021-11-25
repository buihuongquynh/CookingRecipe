import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  item: {
    height: 200,
    margin: 10,
    width: WIDTH - 16,
    flexDirection: 'column',
    position: 'relative',
  },
  itemImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  itemContent: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  itemText: {
    color: '#6e0500',
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 3,
    fontFamily: 'OpenSans-Bold',
  },
  textCategory: {
    fontSize: 18,
    fontFamily: 'OpenSans-Medium',
    color: '#fa615a',
  },
});

export default styles;
