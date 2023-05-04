import React, { Component } from 'react';
import { ListItem, Avatar } from '@rneui/themed';
import { SafeAreaView, FlatList } from 'react-native';
import { Card } from '@rneui/base';
import { ScrollView } from 'react-native';
import { Text, View } from 'react-native';
import { CABECERAS } from '../comun/cabeceras';
// import { ACTIVIDADES } from '../comun/actividades';
import { baseUrl } from '../comun/comun';
import { connect } from 'react-redux';
import { IndicadorActividad } from './IndicadorActividadComponent';


const mapStateToProps = state => {
    return {
        actividades: state.actividades
    }
}


function Historia() {
    return (
        <Card>
            <Card.Title>Un poquito de historia</Card.Title>
            <Card.Divider />
            <Text style={{ margin: 20 }}>
                El nacimiento del club de montaña Gaztaroa se remonta a la
                primavera de 1976 cuando jóvenes aficionados a la montaña y
                pertenecientes a un club juvenil decidieron crear la sección
                montañera de dicho club. Fueron unos comienzos duros debido sobre
                todo a la situación política de entonces. Gracias al esfuerzo
                económico de sus socios y socias se logró alquilar una bajera.
                Gaztaroa ya tenía su sede social
            </Text>
            <Text style={{ margin: 20 }}>
                Desde aquí queremos hacer llegar nuestro agradecimiento a todos
                los montañeros y montañeras que alguna vez habéis pasado por el
                club aportando vuestro granito de arena.
            </Text>
            <Text style={{ margin: 20 }}>
                Gracias!
            </Text>
        </Card>
    );
}
class QuienesSomos extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         actividades: ACTIVIDADES
    //     };
    // }

    render() {
        const { navigate } = this.props.navigation;
        const misActividades = ({ item, index }) => {

            if (this.props.errMess) {
                console.log({errMess});
                return (
                    <ScrollView>
                        <Historia/>
                        <Text>{this.props.errMess}</Text>
                    </ScrollView>

                );
            }
            if (this.props.isLoading) {
                return (
                    <ScrollView>
                        <Historia />
                        <Card>
                            <Card.Title>"Actividades y recursos"</Card.Title>
                            <Card.Divider />
                            <IndicadorActividad />
                        </Card>
                    </ScrollView>
                );
            }
            else {
                return (
                    <ScrollView>
                        <Historia />
                        <Card>
                            <ListItem
                                key={index}
                                bottomDivider>
                                <Avatar source={{ uri: baseUrl + item.imagen }} />
                                <ListItem.Content>
                                    <ListItem.Title>{item.nombre}</ListItem.Title>
                                    <ListItem.Subtitle>{item.descripcion}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                        </Card>
                    </ScrollView>
                );
            }
        };
        return (
            <SafeAreaView>

                <FlatList
                    data={this.props.actividades.actividades}
                    renderItem={misActividades}
                    keyExtractor={item => item.id.toString()}
                    errMess={this.props.actividades.errMess}
                    isLoading={this.props.actividades.isLoading}
                />
            </SafeAreaView>
        );
    }
}
// export default QuienesSomos;
export default connect(mapStateToProps)(QuienesSomos);