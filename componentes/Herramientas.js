import React, { Component, useState } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import NetInfo from '@react-native-community/netinfo';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet} from 'react-native';
import * as Location from 'expo-location';


function Compruebaconexion() {
    const checkConnection = async () => {
        const connectionInfo = await NetInfo.fetch();
        // console.log(connectionInfo);
        console.log(connectionInfo.details.cellularGeneration);
        const message = `Tipo de conexión: ${connectionInfo.type}\n  Red: ${connectionInfo.details.carrier}\n  Conexion: ${connectionInfo.details.cellularGeneration}`;


        alert('Información de conexión :' + '\n' + message);
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

// function MapsComponent() {

//     const [location, setLocation] = useState(null);
//     const [errorMsg, setErrorMsg] = useState(null);

//     (async () => {

//         let { status } = await Location.requestForegroundPermissionsAsync();
//         if (status !== 'granted') {
//             setErrorMsg('Permission to access location was denied');
//             return;
//         }

//         let location = await Location.getCurrentPositionAsync({});
//         console.log("esta es la loc" + location.coords.longitude)
//         setLocation(location);
//     })();

//     let text = 'Waiting..';
//     if (errorMsg) {
//         text = errorMsg;
//     } else if (location) {
//         text = JSON.stringify(location);
//         const region = {
//             latitude: location.coords.latitude,
//             longitude: location.coordslongitude,
//         };
//     }

//     const region = region;

//     return (
//         <View style={styles.container}>
//             <MapView
//                 style={styles.map}
//                 region={region}
//                 showsUserLocation={true}
//                 followUserLocation={true}
//             >
//             </MapView>
//         </View>
//     );
// }

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
                    <Card.Title>Contacto</Card.Title>
                    <Card.Divider />

                    <Text style={{ margin: 20 }}>
                        Kaixo Mendizale!

                        Si quieres participar en las salidas de montaña que organizamos o
                        quieres hacerte soci@ de Gaztaroa, puedes contactar con nosotros a
                        través de diferentes medios. Puedes llamarnos por teléfono los jueves
                        de las semanas que hay salida (de 20:00 a 21:00). También puedes
                        ponerte en contacto con nosotros escribiendo un correo electrónico, o
                        utilizando la aplicación de esta página web. Y además puedes
                        seguirnos en Facebook.

                        Para lo que quieras, estamos a tu disposición!

                    </Text>
                    <Text style={{ margin: 20 }}>
                        Tel: +34 948 277151
                    </Text>
                    <Text style={{ margin: 20 }}>
                        Email: gaztaroa@gaztaroa.com
                    </Text>
                    <Compruebaconexion />
                    {/* <MapsComponent/> */}


                </Card>
            </ScrollView>
        );
    }
}

export default Herramientas;