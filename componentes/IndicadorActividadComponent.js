import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { colorGaztaroaOscuro } from '../comun/comun';


// vamos a utilizar este componente para mejorar la experincia de usuario a 
// funcionalidades de la aplicacion que es probable que se produzcan retrasos
// en nuestro caso, cualquier peticion al servidor

export const IndicadorActividad = () => {
    return (
        <View style={StyleSheet.indicadorView}>
            <ActivityIndicator size="large" color={colorGaztaroaOscuro} />
            <Text style={styles.indicadorText}>En proceso . . . </Text>
        </View>
    );

};

const styles = StyleSheet.create({
    indicadorView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    indicadorText: {
        color: colorGaztaroaOscuro,
        fontSize: 14,
        fontWeight: 'bold'
    }
});
