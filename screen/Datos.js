import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body,Button,Item, Icon,Input } from 'native-base';

class Datos extends Component{
render(){
  const navegar = this.props.navegation;
  return (
    <Container>
        <Header />
        <Content padder contentContainerStyle ={misEstilos.content}>
          <Card>
            <CardItem>
              <Text>Tu nombre es: {this.props.route.params.nombre}</Text>
            </CardItem>
            <CardItem>
              <Text>Tu contraseña es: {this.props.route.params.contraseña}</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
  );
}
}

const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Datos;