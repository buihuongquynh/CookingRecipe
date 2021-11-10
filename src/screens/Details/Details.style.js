import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: HEIGHT * 0.3,
    width: '100%',
    resizeMode: 'cover',
  },
  content: {
    padding: 15,
  },
  nameText: {
    fontSize: 22,
    color: '#000',
    fontWeight: '600',
  },
  tagText: {
    marginVertical: 12,
    fontSize: 15,
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 16,
    color: '#000',
    fontWeight: '700',
    marginBottom: 15,
  },
  textInstruc: {
    fontSize: 16,
    lineHeight: 25,
    color: 'black'
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 20,
  },
  textIngredient: {
    fontSize: 16,
    lineHeight: 30,
    marginLeft: 15,
    color: 'black'
  }
});

export default styles;
