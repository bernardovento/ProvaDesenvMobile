import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from '../../styles/stylePages'
import { Link } from '@react-navigation/native';


export default function ForgotPasswordPage(){
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
            <TextInput placeholder='Email' style={styles.input}/>
            <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.btnTxt}>Recuperar Senha</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'RegisterPage'}}>Registre-se</Link>
                <Link to={{screen: 'LoginPage'}}>Login</Link>
            </View>
        </View>
    )
}