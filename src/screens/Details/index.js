import React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';

import styles from './styles';

export default function Details({ route }) {

    const { place: { nomeFantasia, descricaoCompleta, logradouro, numero, telefone } } = route.params;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.contentInformation}>
                        <View style={styles.contentTitle}><Text style={styles.title}>Nome Fantasia</Text></View>
                        <View style={styles.contentDescription}><Text style={styles.content}>{nomeFantasia}</Text></View>
                    </View>
                    <View style={styles.contentInformation}>
                        <View style={styles.contentTitle}><Text style={styles.title}>Endereço</Text></View>
                        <View style={styles.contentDescription}><Text style={styles.content}>{`${logradouro}, ${numero}`}</Text></View>
                    </View>
                    <View style={styles.contentInformation}>
                        <View style={styles.contentTitle}><Text style={styles.title}>Telefone</Text></View>
                        <View style={styles.contentDescription}><Text style={styles.content}>{telefone}</Text></View>
                    </View>
                    <View style={styles.contentInformation}>
                        <View style={styles.contentTitle}><Text style={styles.title}>Descrição completa</Text></View>
                        <View style={styles.contentDescription}><Text style={styles.content}>{descricaoCompleta}</Text></View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
