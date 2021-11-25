import React, {useRef, useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './Signup.style';
import {Auth} from '../../services';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [confirmSecureTextEntry, setConfirmSecureTextEntry] = useState(true);
  const inputEl1 = useRef();
  const inputEl2 = useRef();

  const handleCreate = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Lỗi', 'Chưa nhập dữ liệu.');
    } else {
      if (password !== confirmPassword) {
        Alert.alert('Lỗi', 'Mật khẩu nhập lại không chính xác.');
      } else {
        Auth.signUp(email, password);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./../../images/logo.png')}
        style={{alignSelf: 'center', marginBottom: 50}}
      />
      <View style={styles.formGroup}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>REGISTER</Text>
        </View>
        <Text style={styles.textAction}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#fff" size={20} />
          <TextInput
            placeholder="Your Email"
            placeholderTextColor="#fff"
            style={styles.textInput}
            autoCapitalize="none"
            value={email}
            onChangeText={e => setEmail(e)}
            onSubmitEditing={() => inputEl1.current.focus()}
          />
        </View>
        <Text style={styles.textAction}>Password</Text>
        <View style={styles.action}>
          <Feather name="lock" color="#fff" size={20} />
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#fff"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={e => setPassword(e)}
            secureTextEntry={secureTextEntry ? true : false}
            ref={inputEl1}
            onSubmitEditing={() => inputEl2.current.focus()}
          />
          <TouchableOpacity
            onPress={() => setSecureTextEntry(!secureTextEntry)}>
            {secureTextEntry ? (
              <Feather name="eye-off" color="#fff" size={18} />
            ) : (
              <Feather name="eye" color="#fff" size={18} />
            )}
          </TouchableOpacity>
        </View>
        <Text style={styles.textAction}>Confirm Password</Text>
        <View style={styles.action}>
          <Feather name="lock" color="#fff" size={20} />
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#fff"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={e => setConfirmPassword(e)}
            secureTextEntry={confirmSecureTextEntry ? true : false}
            ref={inputEl2}
          />
          <TouchableOpacity
            onPress={() => setConfirmSecureTextEntry(!confirmSecureTextEntry)}>
            {confirmSecureTextEntry ? (
              <Feather name="eye-off" color="#fff" size={18} />
            ) : (
              <Feather name="eye" color="#fff" size={18} />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnForget}>
          <Text style={styles.textForget}>Forget Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btnSubmit} onPress={handleCreate}>
        <Text style={styles.textSubmit}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.textFooter}>Have an account?</Text>
        <TouchableOpacity
          style={styles.btnSignup}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textSignup}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
