import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';

import MapView, { Marker } from 'react-native-maps';

import api from '../../services/api';
import pino from '../../assets/pino.png';

import styles from './styles';

export default function Map({ navigation, route }) {

    const { userPosition, category } = route.params;

    const { latitude, longitude } = userPosition;

    const [data, setData] = useState([]);

    const raio = 30;

    useEffect(() => { getData() }, []);

    const getData = async () => {

        try {

            const { data } = await api.get(`rest/estabelecimentos/latitude/${latitude}/longitude/${longitude}/raio/${raio}?categoria=${category}`);

            setData(data);

        } catch (error) {
            alert(error.message);
        }

    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MapView
                region={{ ...userPosition, latitudeDelta: 0.01, longitudeDelta: 0.01 }}
                showsUserLocation
                style={styles.mapStyle}
            >
                <Marker title="Minha posição" pinColor="green" coordinate={userPosition} />

                {data.map((place, key) => {
                    return (
                        <Marker
                            key={key}
                            onCalloutPress={() => navigation.navigate('Details', { place: place })}
                            image={pino}
                            coordinate={{ latitude: place.lat, longitude: place.long }}
                            title={place.nomeFantasia}
                            description={place.turnoAtendimento}
                        />
                    );
                })}
            </MapView>
        </SafeAreaView>
    )
}
