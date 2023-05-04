import React, { Component } from 'react';
import { ListItem, Avatar } from '@rneui/themed';
import { SafeAreaView, FlatList } from 'react-native';
// import { EXCURSIONES } from '../comun/excursiones';
import { baseUrl } from '../comun/comun';
import { connect } from 'react-redux';
import { IndicadorActividad } from './IndicadorActividadComponent';
import { Text } from 'react-native-elements';
import { View } from 'react-native';


const mapStateToProps = state => {
    return {
        excursiones: state.excursiones
    }
}

class Calendario extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         excursiones: EXCURSIONES
    //     };
    // }

    render() {

        const { navigate } = this.props.navigation;

        const renderCalendarioItem = ({ item, index }) => {
            if (this.props.isLoading) {
                return (
                    <IndicadorActividad />
                );
            }
            else if (this.props.errMess) {
                return (
                    <View>
                        <Text>{props.errMess}</Text>
                    </View>
                );
            }
            else {
                return (
                    <ListItem
                        key={index}
                        onPress={() => navigate('DetalleExcursion', { excursionId: item.id })}
                        bottomDivider>
                        <Avatar source={{ uri: baseUrl + item.imagen }} />
                        <ListItem.Content>
                            <ListItem.Title>{item.nombre}</ListItem.Title>
                            <ListItem.Subtitle>{item.descripcion}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                );

            }

        };

        return (
            <SafeAreaView>
                <FlatList
                    data={this.props.excursiones.excursiones}
                    renderItem={renderCalendarioItem}
                    keyExtractor={item => item.id.toString()}
                    isLoading={this.props.excursiones.isLoading}
                    errMess={this.props.excursiones.errMess}
                />
            </SafeAreaView>
        );
    }
}

export default connect(mapStateToProps)(Calendario);

// MIRAR EL TEMA DE COMO paso las props, si no me sale, preguntar a Sagues