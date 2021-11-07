import auth from '@react-native-firebase/auth'
import { Alert } from 'react-native'

const signUp = (email, password) => {
    return auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
        console.log('Tạo người dùng thành công')
    })
    .catch(e => {
        Alert.alert('Lỗi', 'Đã tồn tại người dùng.')
    })
}

const signIn = (email, password) => {
    return auth().signInWithEmailAndPassword(email, password)
    .then(() => {
        console.log('Đăng nhập thành công')
    })
    .catch(e => {
        Alert.alert('Lỗi', 'Không tồn tại người dùng.')
    })
}

const forgetPassword = (email) => {
    if(!email) {
        Alert.alert('Error', 'Please Enter.')
    }
    return auth().sendPasswordResetEmail(email)
}

const SignOut = () => {
    return auth().signOut()
}

const Auth = {
    signUp,
    signIn,
    forgetPassword,
    SignOut
}

export default Auth