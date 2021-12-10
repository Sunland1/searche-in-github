import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View, TextInput , Image , TouchableOpacity ,ActivityIndicator } from 'react-native';


import {getUser} from '../api/github_api'




export default function SearchGithub({navigation}){
    const [isLoading , setIsloading] = useState(false)
    const [login , setLogin ] = useState("")


    function loadingDisplay(){
        if(isLoading){
            return <Text>Loading <ActivityIndicator size="small" color="#0000ff" /></Text>
        }
    }

    async function loadUser(){
        setIsloading(true)
        if(login === ""){
            alert('Need a username')
        }else{
            let user = await getUser(login)
            if(user === undefined || user === null ){
                alert("User not found")
            }else{
                setIsloading(false)
                navigation.navigate("User" , {
                    user: user
                })
            }
        }
        
    }


    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/github.png')}
            />
            <TextInput
                style={styles.input}
                onChangeText={setLogin}
                value={login}
                placeholder='search in github.....'
            />

            <TouchableOpacity style={styles.touchable} onPress={() => loadUser()}>
                <Text style={styles.text}>Search</Text>
            </TouchableOpacity>

            {loadingDisplay()}

        </View>
    );
}





const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        borderRadius: 15,
        height: 40,
        width: "70%",
        borderWidth: 1,
        padding: 10,
    },
    logo: {
        marginBottom: "10%",
        width: 150,
        height: 150,
    },

    touchable: {
        width: "35%",
        padding: "1%",
        marginTop: "5%",
        borderRadius: 15,
        backgroundColor: "black",
    },

    text : {
        textAlign: "center",
        fontSize: 20,
        color: "white"
    }
});
  