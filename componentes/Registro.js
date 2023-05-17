import React, { Component } from 'react';
import { View, Modal, Button, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { colorGaztaroaClaro, colorGaztaroaOscuro } from '../comun/comun';
import { connect } from 'react-redux';
import axios from 'axios';


class Registro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pass: '',
        }
    }

    render() {
        return (
            <View>
                <Text>Esta va a ser mi pagina de Registro</Text>
            </View>
        )
    }

}