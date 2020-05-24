import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    logo: {
        width: 150,
        height: 150,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#6C63FF'
    },
    buttons: {
        flex: 1,
        paddingHorizontal: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: '100%',
        height: 48,
        marginBottom: 20,
        borderRadius: 8,
        backgroundColor: '#6C63FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        textTransform: 'uppercase',
        fontWeight: '700',
        color: '#FFF'
    }
});

export default styles;