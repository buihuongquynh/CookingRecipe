import {StyleSheet, Dimensions} from 'react-native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnSetting: {
    marginLeft: 20,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: WIDTH,
    height: HEIGHT,
  },
  btnItem: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#fff',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconItem: {
    marginRight: 20,
  },
  textItem: {
    fontWeight: '600',
    fontSize: 16,
    color: '#000',
  },
});

export default styles;
