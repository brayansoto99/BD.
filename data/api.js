import { Alert } from 'react-native';

const URL_DATA = 'http://192.168.1.68/iot/data/';

class API {

    async validarLog(user, pass){
        const query = await fetch(`${URL_DATA}login.php?user=${user}&pass=${pass}`);
        const data = await query.json();
        return data;
    }

    registerData(email, user, pass){
        fetch(`${URL_DATA}registrar.php`, {
            method: 'POST',
            body: JSON.stringify({
                pEmail : email,
                pUser : user,
                pPass : pass
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .catch(error => console.error('Error: ', error))
        .then(response => {
            if(response.status == 1){
              Alert.alert('Registro exitoso');
            }
            else{
              Alert.alert('Ocurrio un error');
            }  
        });
    } //end registerData
}

export default new API()