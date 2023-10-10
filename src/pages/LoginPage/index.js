import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from '../../styles/stylePages'
import { Link } from '@react-navigation/native';

export default function LoginPage(){
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
            <TextInput
                placeholder='Email' 
                style={styles.input}
             />
            <TextInput placeholder='Senha' style={styles.input}/>
            <TouchableOpacity style={styles.buttonStyle}>
                <Link to={{screen: 'HomePage'}} style={styles.buttonText}>                 Login                 </Link>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'ForgotPasswordPage'}}>Esqueceu a senha?</Link>
                <Link to={{screen: 'RegisterPage'}}>Registre-se</Link>
            </View>
        </View>
    )
}