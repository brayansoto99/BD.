import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Body, Text, Button, Item, Input, Icon } from 'native-base';
import { StyleSheet, Alert } from 'react-native';
import api from '../data/api';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            pass: ''
        }
    }

    login = async () => {
        let validarLog = await api.validarLog(this.state.username, this.state.pass)
        
        if(validarLog.status == 1){
            this.props.navigation.navigate('Principal');
        }else{
            Alert.alert('Usuario o clave inválidas');
        }

    }

    render(){
        const navegar = this.props.navigation;

        return(
            <Container>
                <Content padder contentContainerStyle = {misEstilos.content}>
                    <Card>
                        <CardItem header bordered>
                            <Text style = {misEstilos.textCenter}>
                            Inicio de sesión
                            </Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body style = {misEstilos.body}>
                                <Item inlineLabel>
                                    <Icon type = 'FontAwesome' name = 'user'></Icon>
                                    <Input placeholder = 'Nombre de usuario' onChangeText = {(username)=> this.setState({username})}/>
                                </Item>
                                <Item inlineLabel last>
                                    <Icon type = 'FontAwesome'name = 'lock'></Icon>
                                    <Input placeholder = 'Contraseña' onChangeText = {(pass)=> this.setState({pass})}/>
                                </Item>
                            </Body>
                        </CardItem>
                    <CardItem footer bordered>
                        <Button primary onPress = {() => {navegar.navigate('Registro', {titulo: 'Registro de usuario', nombre: 'Jorge',});}}><Text>Registro</Text></Button>
                        <Button succes style = {misEstilos.boton} onPress={() => {this.login()}}><Text>Entrar</Text></Button>
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
        justifyContent: 'center'
    },
    textCenter: {
        textAlign: 'center',
        width: '100%'
    },
    boton: {
        marginLeft: '35%'
    },
    body: {
        paddingVertical: 30
    }
});

export default Login;