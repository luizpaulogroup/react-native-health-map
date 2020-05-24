import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    contentInformation: {
        marginVertical: 10
    },
    contentTitle: {
        backgroundColor: '#6C63FF',
        borderRadius: 5,
        padding: 15,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    title: {
        fontWeight: '700',
        color: '#FFF'
    },
    contentDescription: {
        marginTop: 5,
    },
    content: {
        textTransform: 'capitalize',
    },
});

export default styles;