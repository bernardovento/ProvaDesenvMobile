import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from '../../styles/stylePages'
import { Link } from '@react-navigation/native';


export default function HomePage(){
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
            <Text style={styles.text}>Home</Text>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'LoginPage'}}>Login</Link>
                <Link to={{screen: 'RegisterPage'}}>Registre-se</Link>
                <Link to={{screen: 'ForgotPasswordPage'}}>Esqueceu a Senha?</Link>
            </View>
        </View>
    )
}