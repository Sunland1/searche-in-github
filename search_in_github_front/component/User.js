import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View, ScrollView , Image , TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'




const listrepo = (repos) => {
    let reposList = []
    for(let i=0 ; i < 20 ; i++ ){
        reposList.push(
            <TouchableOpacity key={i} style={styles.repos}>
                <Text style={styles.textInformationTouchAble}>search-in-github</Text>
                <Text style={styles.textInformationTouchAble}>JS</Text>
                <Text style={styles.textInformationTouchAble}>01/01/2021</Text>
            </TouchableOpacity>
        )
    } 
    return reposList
}


export default function User(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.profilImage}
                    source={require('../assets/github.png')}
                />
                <View style={styles.blocInformation}>
                    <Text style={styles.textUser}>Sunland</Text>
                    <View style={styles.userInformation}>
                        <Text style={styles.textInformation}>12 follower</Text>
                        <Text style={styles.textInformation}>8 following</Text>
                        <Text style={styles.textInformation}>7 repos</Text>
                    </View>
                </View>
            </View>

            <View style={styles.body}>
                <Text style={styles.title}>Repo :</Text>
                <ScrollView style={styles.scrollview}>
                    {listrepo()}
                </ScrollView>
            </View>


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },

    blocInformation : {
        marginRight: "74%"
    },

    header: {
        flexDirection: "row",
        padding: "5%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
    },

    body : {
        padding : "5%",
    },  

    userInformation: {
        marginLeft: "10%",
        flexDirection: "row",
        padding: "5%"
    },
    textInformation : {
        marginRight: "5%"
    },

    title: {
        fontSize: 22
    },

    profilImage: {
        borderRadius: 180,
        width: 100,
        height: 100,
    },

    textUser : {
        textAlign: "center",
        marginLeft: "10%",
        marginTop: "5%",
        fontSize: 45
    },

    repos: {
        borderRadius: 12,
        marginTop: "5%",
        padding: "5%",
        backgroundColor: "#f4f2f0",
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
    },

    textInformationTouchAble: {
        fontSize: 16,
        marginRight: "10%"
    },

    scrollview : {
        height: "100%"
    }
});