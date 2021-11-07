import {StyleSheet} from 'react-native';

const TEXT = {
  color: '#fff',
  fontFamily: 'OpenSans-Bold',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EA1E63',
    padding: 20,
    justifyContent: 'center',
  },
  textHeader: {
    ...TEXT,
    fontSize: 28,
  },
  textAction: {
    ...TEXT,
    fontSize: 16,
    marginTop: 30,
    fontFamily: 'OpenSans-Medium',
    letterSpacing: 1,
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
  },
  textInput: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
    fontFamily: 'OpenSans-Light',
    paddingBottom: 4,
  },
  btnForget: {
    marginTop: 10,
    marginLeft: 'auto',
  },
  textForget: {
    ...TEXT,
    fontFamily: 'OpenSans-SemiBold',
    letterSpacing: 1,
  },
  btnSubmit: {
    alignSelf: 'center',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: '#f5f5f5',
    borderRadius: 5,
    marginTop: 50,
  },
  textSubmit: {
    ...TEXT,
    color: '#f5f5f5',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  footer: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 50,
  },
  textFooter: {
    ...TEXT,
    fontFamily: 'OpenSans-Medium',
  },
  btnSignup: {
    marginLeft: 5,
  },
  textSignup: {
    ...TEXT,
    fontSize: 15,
    textDecorationLine: 'underline',
  },
});

export default styles;
