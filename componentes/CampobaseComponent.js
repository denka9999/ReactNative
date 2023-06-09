import React, { Component } from 'react';
import Constants from 'expo-constants';
import Calendario from './CalendarioComponent';
import DetalleExcursion from './DetalleExcursionComponent';
import { Platform, StyleSheet, View } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './HomeComponent';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Contacto from './ContactoComponent';
import QuienesSomos from './QuienesSomosComponent';
import { Icon } from '@rneui/themed';
import { SafeAreaView } from 'react-native';
import { Image, Text } from 'react-native-elements';
// import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { colorGaztaroaClaro, colorGaztaroaOscuro } from '../comun/comun';
import { connect } from 'react-redux';
import { fetchExcursiones, fetchComentarios, fetchCabeceras, fetchActividades } from '../redux/ActionCreators'
import Login from './Login';
import Registro from './Registro';
import Herramientas from './Herramientas';
import Ubicacion from './Ubicacion';





// lo que hacemos aqui es acceder al estado actual de la store, es una funcion de redux
//devuelve el valor del estado

const mapStateToProps = state => {
  return {
    excursiones: state.excursiones,
    comentarios: state.comentarios,
    cabeceras: state.cabeceras,
    actividades: state.actividades
  }
}

// lo que hace esta funcion es conectar las acciones con las props de cada objeto
//cada una de las 4 funciiones llama a una funcion especifica

const mapDispatchToProps = dispatch => ({
  fetchExcursiones: () => dispatch(fetchExcursiones()),
  fetchComentarios: () => dispatch(fetchComentarios()),
  fetchCabeceras: () => dispatch(fetchCabeceras()),
  fetchActividades: () => dispatch(fetchActividades()),
})


// EN RESUMEN DE LAS DOS CONST DE ARRIIBA, OBTENEMOS EL ESTADO DE LA STORE 
// OBTENEMOS LAS ACCIONES

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeNavegador({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: colorGaztaroaOscuro },
        headerTitleStyle: { color: '#fff', alignItems: 'center' },
        headerLeft: () => (<Icon name="menu" size={28} color='white' onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />),
      }}

    >
      <Stack.Screen
        name="Etxea"
        component={Home}
        options={{
          title: 'Campo Base',
        }}
      />
    </Stack.Navigator >
  );

  // hasta aqui lo que hacemos es definir la pagina de HOME, es decir, la que va a aparecer nada mas nos conectemeos a la app
}

// ESA PROPIEDAD NAVIGATION QUE PASAMOS A LA FUNCION ES LA QUE NOS PERMITE ABRIR EL MENU
function CalendarioNavegador({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Calendario"
      headerMode="float"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: colorGaztaroaOscuro },
        headerTitleStyle: { color: '#fff' },
      }}
    >
      <Stack.Screen
        name="Calendario"
        component={Calendario}
        options={{
          title: 'Calendario Gaztaroa',
          headerLeft: () => (<Icon name="menu" size={28} color='white' onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />)

        }}
      />
      <Stack.Screen
        name="DetalleExcursion"
        component={DetalleExcursion}
        options={{
          title: 'Detalle Excursión',
        }}
      />
    </Stack.Navigator>
  );
}

// lo que hacemos aqui es definir que vamos a tener dentro de la pestaña calendario, como se observa metemos el Calendario y el Detalle excurison
// que al presionar sobre una etiqueta nos despliefa el menu 
function ContactoFuncion({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Contacto"
      headerMode="float"
      screenOptions={{
        headerTintColor: '#aba',
        headerStyle: { backgroundColor: colorGaztaroaOscuro },
        headerTitleStyle: { color: '#fff' },
        headerLeft: () => (<Icon name="menu" size={28} color='white' onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />)
      }}
    >
      <Stack.Screen
        name="Contacto"
        component={Contacto}
        options={{
          title: 'Calendario Gaztaroa sisisi',
        }}
      />
    </Stack.Navigator>
  );
}
function QuienesSomosFuncion({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="QuienesSomos"
      headerMode="screen"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: colorGaztaroaOscuro },
        headerTitleStyle: { color: '#fff' },
        headerLeft: () => (<Icon name="menu" size={28} color='white' onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />)

      }}
    >
      <Stack.Screen
        name="Etxea"
        component={QuienesSomos}
        options={{
          title: 'Quienes Somos',
        }}
      />
    </Stack.Navigator>
  );
}

function LoginNavegador({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: colorGaztaroaOscuro },
        headerTitleStyle: { color: '#fff' },
        headerLeft: () => (<Icon name="menu" size={28} color='white' onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />),

      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
        }}
      />
    </Stack.Navigator>
  );
}
function RegistroNavegador({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Registro"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: colorGaztaroaOscuro },
        headerTitleStyle: { color: '#fff' },
        headerLeft: () => (<Icon name="menu" size={28} color='white' onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />),

      }}
    >
      <Stack.Screen
        name="Registro"
        component={Registro}
        options={{
          title: 'Registro',
        }}
      />
    </Stack.Navigator>
  );
}
function HerramientasNavegador({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Herramientas"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: colorGaztaroaOscuro },
        headerTitleStyle: { color: '#fff' },
        headerLeft: () => (<Icon name="menu" size={28} color='white' onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />),

      }}
    >
      <Stack.Screen
        name="Herramientas"
        component={Herramientas}
        options={{
          title: 'Herramientas',
        }}
      />
    </Stack.Navigator>
  );
}
function UbicacionNavegador({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Herramientas"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: colorGaztaroaOscuro },
        headerTitleStyle: { color: '#fff' },
        headerLeft: () => (<Icon name="menu" size={28} color='white' onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />),

      }}
    >
      <Stack.Screen
        name="Ubicacion"
        component={Ubicacion}
        options={{
          title: 'Ubicacion',
        }}
      />
    </Stack.Navigator>
  );
}


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={styles.drawerHeader}>
          <View style={{ flex: 1 }}>
            <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/dsm-2023.appspot.com/o/logo.png?alt=media&token=b8c8a40c-1856-4e1c-b669-5423f0a78e1a'}} style={styles.drawerImage} />
          </View>
          <View style={{ flex: 2 }}>
            <Text style={styles.drawerHeaderText}> Gaztaroa</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </SafeAreaView>
    </DrawerContentScrollView>
  );
}
function DrawerNavegador() {
  return (

    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: colorGaztaroaClaro,
        },
      }}
    >
      <Drawer.Screen name="Campo base" component={HomeNavegador}
        options={{
          drawerIcon: ({ tintColor }) => (
            <Icon
              name='home'
              type='font-awesome'
              size={24}
              color={tintColor}
            />
          )
        }
        }
      />
      <Drawer.Screen name="Calendario" component={CalendarioNavegador}
        options={{
          drawerIcon: ({ tintColor }) => (
            <Icon
              name='calendar'
              type='font-awesome'
              size={24}
              color={tintColor}
            />
          )
        }
        }
      />
      <Drawer.Screen name="Contacto" component={ContactoFuncion}
        options={{
          drawerIcon: ({ tintColor }) => (
            <Icon
              name='address-card'
              type='font-awesome'
              size={24}
              color={tintColor}
            />
          )
        }
        }
      />
      <Drawer.Screen name="Quienes Somos" component={QuienesSomosFuncion}
        options={{
          drawerIcon: ({ tintColor }) => (
            <Icon
              name='info-circle'
              type='font-awesome'
              size={24}
              color={tintColor}
            />
          )
        }
        }
      />
      <Drawer.Screen name="Login" component={LoginNavegador}
        options={{
          drawerIcon: ({ tintColor }) => (
            <Icon
              name='address-card'
              type='font-awesome'
              size={24}
              color={tintColor}
            />
          )
        }}
      />
      <Drawer.Screen name="Registro" component={RegistroNavegador}
        options={{
          drawerIcon: ({ tintColor }) => (
            <Icon
              name='user-plus'
              type='font-awesome'
              size={24}
              color={tintColor}
            />
          )
        }}
      />
      <Drawer.Screen name="Herramientas" component={HerramientasNavegador}
        options={{
          drawerIcon: ({ tintColor }) => (
            <Icon
              name='wrench'
              type='font-awesome'
              size={24}
              color={tintColor}
            />
          )
        }}
      />
        <Drawer.Screen name="Ubicacion" component={UbicacionNavegador}
        options={{
          drawerIcon: ({ tintColor }) => (
            <Icon
              name='paper-plane'
              type='font-awesome'
              size={24}
              color={tintColor}
            />
          )
        }}
      />

    </Drawer.Navigator>
    
    // ese CalendarioNavegador, es la segunda paginad el menu de la izquierda, lo que define este Drawer.Screen es la pagina que vamos a tener
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: colorGaztaroaOscuro,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60
  }
});
class Campobase extends Component {
  componentDidMount() {
    this.props.fetchExcursiones();
    this.props.fetchComentarios();
    this.props.fetchCabeceras();
    this.props.fetchActividades();
  }
  render() {
    return (
      <NavigationContainer>
        <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
          <DrawerNavegador />
        </View>
      </NavigationContainer>
    );
  }
}



// export default Campobase;
export default connect(mapStateToProps, mapDispatchToProps)(Campobase);
//