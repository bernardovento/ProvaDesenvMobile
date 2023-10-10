import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d3d3d3',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: '200px',
        height: '200px',
        marginBottom: '20px'
    },
    input:{
        width: '75%',
        height: '50px',
        backgroundColor: '5A5A5A',
        padding: '10px',
        fontSize: '20px',
        opacity: '0.9',
        border: '1px solid black',
        borderRadius: '5px',
        marginBottom: '5px'
    },
    buttonStyle: {
        backgroundColor: '#5A5A5A',
        height: '40px',
        width: '75%',
        borderRadius: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
      
    },
    buttonText: {
        fontSize: '22px',
        color: 'Black'
    },
    viewLinks:{
        flexDirection: 'row',
        width: '75%',
        justifyContent: 'space-between',
        marginTop: '15px',
        textDecorationLine: 'underline',
        alignContent: 'center',
    },
    text:{
        fontFamily: 'Cochin',
        fontSize: 20,
    },
});

export default styles;