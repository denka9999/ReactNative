import React, { Component, useState } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import NetInfo from '@react-native-community/netinfo';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import * as Location from 'expo-location';


function Compruebaconexion() {
    const checkConnection = async () => {
        const connectionInfo = await NetInfo.fetch();
        // console.log(connectionInfo);
        console.log(connectionInfo.details.cellularGeneration);
        if (connectionInfo.type == "wifi") {
            const message = `Tipo de conexión : ${connectionInfo.type}`;
            alert('Informacion de conexion :' + '\n' + message);
        } else {
            const message = `Tipo de conexión: ${connectionInfo.type}\n  Red: ${connectionInfo.details.carrier}\n  Conexion: ${connectionInfo.details.cellularGeneration}`;


            alert('Información de conexión :' + '\n' + message);
        }
    };
    return (
        <Icon
            raised
            reverse
            name={'wrench'}
            type='font-awesome'
            color='#0000ff'
            onPress={() => checkConnection()}
        />
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});



class Herramientas extends Component {

    render() {

        return (
            <ScrollView>
                <Card>
                    <Card.Title>Herramientas</Card.Title>
                    <Card.Divider />

                    <Text style={{ margin: 20 }}>
                        Hola buenas, de momento esta es una pequeña pagina de pruebas donde nosotros
                        vamos a ir colocando nuestras Herramientas.

                        De momento la primera sera la de colocar un pequeño icono con una herramienta que nos dira el tipo de conexion
                        de la que disponemos.

                        Lo interesante de esto es acceder a expo con los datos moviles, ya que de este modo nos dice la compañia y el tipo de red
                        a la cual estamos conectados.

                    </Text>

                    <Compruebaconexion />
                    {/* <MapsComponent/> */}


                </Card>
            </ScrollView>
        );
    }
}

export default Herramientas;