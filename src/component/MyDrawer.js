import * as React from 'react';
import { Text, Button, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerItemList  } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ClienteListScreen from '../screens/ClienteListScreen';
import ClienteDetailScreen from '../screens/ClienteDetailScreen';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import UserListScreen from '../screens/UserListScreen';
import UserDetailScreen from '../screens/UserDetailScreen';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createStackNavigator();

function StackerProduct() {
  return (
      <Stack.Navigator headerMode='none'>
        <Stack.Screen 
          name="productList" 
          component={ProductListScreen} 
        />
        <Stack.Screen name="productDetail" component={ProductDetailScreen} />
      </Stack.Navigator>
  );
}

function StackerCliente() {
  return (
      <Stack.Navigator headerMode='none'>
        <Stack.Screen 
          name="clienteList" 
          component={ClienteListScreen} 
        />
        <Stack.Screen name="clienteDetail" component={ClienteDetailScreen} />
      </Stack.Navigator>
  );
}

function StakerUsuario() {
  return (
      <Stack.Navigator headerMode='none'>
        <Stack.Screen 
          name="userList" 
          component={UserListScreen} 
        />
        <Stack.Screen name="userDetail" component={UserDetailScreen} />
      </Stack.Navigator>
  );
}

function StakerSig() {
  return (
      <Stack.Navigator headerMode='none'>
        <Stack.Screen 
          name="login" 
          component={SigninScreen} 
        />
        <Stack.Screen name="register" component={SignupScreen} />
      </Stack.Navigator>
  );
}

function Menu(props){
  return(
    <View style={styles.containerStyle}>
      <View>
        <TouchableOpacity>
          <Image 
            source={ require('../img/iconos-01.png') }
            style={styles.logoStyle} 
          />

        </TouchableOpacity>
        <DrawerItemList {...props} />
      </View>
    </View>
  )
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
      <Drawer.Navigator initialRouteName="Productos" drawerContent={(props) => <Menu {...props}/>}>
        <Drawer.Screen name="Productos" component={StackerProduct} />
        <Drawer.Screen name="Clientes" component={StackerCliente} />
        <Drawer.Screen name="Usuario" component={StakerUsuario} />
        <Drawer.Screen name="Cerrar Sesión" component={SigninScreen} />
      </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    flex: 1,
  },
  logoStyle: {
    width: 150,
        height: 150,
  },
});

export default function Completo() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen
          name="SignAndSigu"
          component={StakerSig} 
        />
        <Stack.Screen name="MyDrawer" component={MyDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

