import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Icon } from '@rneui/themed';
// import { EXCURSIONES } from '../comun/excursiones';
// import { COMENTARIOS } from '../comun/comentarios';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { ListItem } from 'react-native-elements';
import { baseUrl } from '../comun/comun';
import { connect } from 'react-redux';
import { postFavorito } from '../redux/ActionCreators';


const mapStateToProps = state => {
    return {
        actividades: state.actividades,
        excursiones: state.excursiones,
        cabeceras: state.cabeceras,
        comentarios: state.comentarios,
        favoritos:state.favoritos
    }
}
const mapDispatchToProps=dispatch=>({
    postFavorito: (excursionId)=>dispatch(postFavorito(excursionId))
})
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    title: {
        color: 'white',
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


function RenderExcursion(props) {

    const excursion = props.excursion;

    if (excursion != null) {
        return (
            <Card containerStyle={styles.card} >
                <View style={styles.imageContainer}>
                    <Card.Image
                        source={{uri:baseUrl + excursion.imagen}}
                        style={styles.image}
                    ></Card.Image>
                    <Text style={styles.title}>{excursion.nombre}</Text>
                    <Text style={{ margin: 20 }}>
                        {excursion.descripcion}
                    </Text>
                </View>
                <Icon
                    raised
                    reverse
                    name={props.favorita ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    onPress={() => props.favorita ? console.log('La excursión ya se encuentra entre las favoritas') : props.onPress()}
                />
               
            </Card>
        );
    }
    else {
        return (<View></View>);
    }
}
function RenderComentario(props) {
    const comentarios = props.comentarios;

    if (comentarios != null) {
        return (
            <Card>
                <Card.Title>Comentarios</Card.Title>
                <Card.Divider />
                {comentarios.map((item, index) => {
                    return (
                        <>
                            <Text style={{ margin: 20 }}>Autor: {item.autor}</Text>
                            <Text style={{ margin: 20 }}> Comentario: {item.comentario}</Text>
                            <Text style={{margin:20}}>Fecha: {item.dia}</Text>
                            <Text style={{margin:20}}>***********************************************</Text>

                        </>
                    )
                }
                )}
            </Card>
        )
    } else {
        return (
            <Text>Problemas</Text>
        )
    }


}

class DetalleExcursion extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         // excursiones: EXCURSIONES,
    //         // comentarios: COMENTARIOS,
    //         favoritos: []

    //     };
    // }
    marcarFavorito(excursionId) {
        // this.setState({ favoritos: this.state.favoritos.concat(excursionId) })
        this.props.postFavorito(excursionId);
    };

    
    render() {
        const { excursionId } = this.props.route.params; // ESE RUOTER.PARAMS ES PORQUE EL ID SE LO PASO DESDE CALENDARIO
     
        // 
        return (

            <ScrollView>
                <RenderExcursion
                    excursion={this.props.excursiones.excursiones[+excursionId]}
                    // favorita={this.state.favoritos.some(el => el === excursionId)}
                    favorita={this.props.favoritos.favoritos.some(el=>el===excursionId)}
                    onPress={() => this.marcarFavorito(excursionId)}
                />
                <RenderComentario
                    comentarios={this.props.comentarios.comentarios.filter((comentario) => comentario.excursionId === excursionId)}
                />
            </ScrollView>

        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DetalleExcursion);
