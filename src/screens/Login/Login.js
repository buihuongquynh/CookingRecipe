import React, {useState} from 'react';
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
import styles from './Login.style';
import {Auth} from '../../services';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Lỗi', 'Chưa nhập dữ liệu.');
    } else {
      Auth.signIn(email, password);
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
          <Text style={styles.textHeader}>LOGIN</Text>
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
            value={password}
            onChangeText={e => setPassword(e)}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.btnForget}>
          <Text style={styles.textForget}>Forget Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btnSubmit} onPress={handleLogin}>
        <Text style={styles.textSubmit}>Login</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.textFooter}>Don't have an account?</Text>
        <TouchableOpacity
          style={styles.btnSignup}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.textSignup}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
