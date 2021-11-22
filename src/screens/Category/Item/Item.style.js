import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  item: {
    height: 200,
    margin: 8,
    width: WIDTH ,
    flexDirection: 'column',
    marginBottom: 50,
  },
  itemImage: {
    height: '95%',
    width: '100%',
    borderRadius: 15,
    marginBottom: 5,
  },
  itemText: {
    color: '#000',
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 3,
      marginLeft:10,
  },
  textCategory:{
  marginLeft:10,
  }
});

export default styles;
