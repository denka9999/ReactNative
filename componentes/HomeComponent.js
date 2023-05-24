import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import { Card } from '@rneui/themed';
// import { EXCURSIONES } from '../comun/excursiones';
// import { CABECERAS } from '../comun/cabeceras';
// import { ACTIVIDADES } from '../comun/actividades';
import { baseUrl } from '../comun/comun';
import { colorGaztaroaClaro,colorGaztaroaOscuro} from '../comun/comun';
import { connect } from 'react-redux';
import { IndicadorActividad } from './IndicadorActividadComponent';

const mapStateToProps = state => {
    return {
        actividades: state.actividades,
        excursiones: state.excursiones,
        cabeceras: state.cabeceras
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    title: {
        color: 'chocolate',
        padding: 10,
        fontSize: 20,
        position: 'absolute',
        left: 0,
        padding: 10,
        fontSize: 30,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
    },
    card: {
        borderRadius: 10,
        overflow: 'hidden',
    },
    imageContainer: {
        position: 'relative',
    },
});

function RenderItem(props) {

    const item = props.item;
    console.log(item)

    if(props.isLoading){
        return(
            <IndicadorActividad />
        );
    }
    
    else if(props.errMess){
        return(
            <View>
                <Text>{props.errMess}</Text>
            </View>
        );
    }

    if (item != null) {
        return (
            <Card containerStyle={styles.card} >
                <View style={styles.imageContainer}>
                  <Card.Image
                    source={{uri: item.imagen}}
                    style={styles.image}
                  ></Card.Image>
                  <Text style={styles.title}>{item.nombre}</Text>
                  <Text style={{margin: 20}}>
                        {item.descripcion}
                    </Text>
                </View>
              </Card>
        );
    }
    else {
        return (<View></View>);
    }
}

class Home extends Component {



    render() {

        return (
            <ScrollView>
                <RenderItem item={this.props.cabeceras.cabeceras.filter((cabecera) => cabecera.destacado)[0]} />
                <RenderItem item={this.props.excursiones.excursiones.filter((excursion) => excursion.destacado)[0]} 
                    isLoading={this.props.excursiones.isLoading}
                    errMess={this.props.excursiones.errMess}
                    />
                {/* ese cero al final lo que hace es coger el primer elemento que este a true, si fuese 1, cogeria el segundo con true */}
                <RenderItem item={this.props.actividades.actividades.filter((actividad) => actividad.destacado)[0]} />
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(Home);