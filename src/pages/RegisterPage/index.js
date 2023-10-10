import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from '../../styles/stylePages'
import { Link } from '@react-navigation/native';


export default function RegisterPage(){
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
            <TextInput placeholder='Email' style={styles.input}/>
            <TextInput placeholder='Senha' style={styles.input}/>
            <TextInput placeholder='Confirmar Senha' style={styles.input}/>
            <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'ForgotPasswordPage'}}>Esqueceu a senha?</Link>
                <Link to={{screen: 'LoginPage'}}>Login</Link>
            </View>
        </View>
    )
}