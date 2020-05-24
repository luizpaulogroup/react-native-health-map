import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native';

import Constants from 'expo-constants';
import * as Location from 'expo-location';

import map from '../../assets/map.png';

import styles from './styles';

export default function Home({ navigation }) {

    const [message, setMessage] = useState('Carregando...');
    const [location, setLocation] = useState(false);

    useEffect(() => { getPosition() }, []);

    const getPosition = async () => {

        const { status } = await Location.requestPermissionsAsync();

        if (status !== 'granted') {
            return setMessage('Cliente não autorizou o uso da geolocalização');
        }

        const location = await Location.getCurrentPositionAsync();

        setMessage(null);
        setLocation(location.coords);

    }

    const handleHospital = () => navigation.navigate('Map', { userPosition: location, category: 'HOSPITAL' });

    const handleHealthCenter = () => navigation.navigate('Map', { userPosition: location, category: 'POSTO DE SAÚDE' })

    const handleSamu = () => navigation.navigate('Map', { userPosition: location, category: 'SAMU' });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
            <View style={styles.container}>
                <Image style={styles.logo} source={map}></Image>
                <Text style={styles.title}>MAPA DA SAÚDE</Text>
                <Text>{message}</Text>
            </View>
            {location && (
                <View style={styles.buttons}>
                    <TouchableOpacity onPress={handleHospital} style={styles.button}>
                        <Text style={styles.buttonText}>Procurar Hospitais</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleHealthCenter} style={styles.button}>
                        <Text style={styles.buttonText}>Procurar Postos de Sáude</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSamu} style={styles.button}>
                        <Text style={styles.buttonText}>Procurar Samu</Text>
                    </TouchableOpacity>
                </View>
            )}
        </SafeAreaView>
    )
}
