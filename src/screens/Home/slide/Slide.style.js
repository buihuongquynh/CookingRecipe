import {StyleSheet, Dimensions} from 'react-native';
const WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  wrapper: {
    height: 220,
    margin: 10,
  },
  slide1: {
    position: 'relative',
  },
  item: {
    width: WIDTH - 20,
    height: 220,
    borderRadius: 8,
  },
  content: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  textItem: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
  },
});
export default styles;
