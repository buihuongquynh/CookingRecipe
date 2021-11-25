import {StyleSheet, Dimensions} from 'react-native';
const WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  Item: {
    width: WIDTH * 0.6,
    height: 200,
    margin: 5,
  },
  Title: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  itemImage: {
    height: 150,
    width: '100%',
    borderRadius: 10,
    marginBottom: 5,
  },
});
export default styles;
