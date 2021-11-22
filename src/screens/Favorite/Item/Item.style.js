import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  item: {
    height: 200,
    margin: 8,
    width: WIDTH * 0.5 - 16,
    flexDirection: 'column',
    marginBottom: 50,
  },
  itemImage: {
    height: '95%',
    width: '100%',
    resizeMode: 'contain',
    borderRadius: 15,
    marginBottom: 5,
  },
  itemText: {
    color: '#000',
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 3,
  },
  
});

export default styles;
