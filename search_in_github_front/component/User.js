import React , {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ScrollView , Image , TouchableOpacity} from 'react-native';


import { getRepo } from '../api/github_api';

const converDate = (date) => {
    return date.split('T')[0] 
}

const listrepo = (repos , navigation , login) => {
    let reposList = []
    for(let i=0 ; i < repos.length ; i++ ){
        reposList.push(
            <TouchableOpacity key={i} style={styles.repos} onPress={() => navigation.navigate("Repo" , {
                repo: repos[i],
                login: login
            })}>
                <Text style={styles.textInformationTouchAble}>{repos[i].name}</Text>
                <Text style={styles.textInformationTouchAble}>{repos[i].language}</Text>
                <Text style={styles.textInformationTouchAble}>{converDate(repos[i].createDate)}</Text>
            </TouchableOpacity>
        )
    } 
    return reposList
}


export default function User({ route , navigation}){

    const [repos , setRepos] = useState([])
    const {user} = route.params

    useEffect(async () => {
        let repos = await getRepo(user.id)
        setRepos(repos)
    } , [])

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.profilImage}
                    source={{
                        uri: user.avatar_url
                    }}
                />
                <View style={styles.blocInformation}>
                    <Text style={styles.textUser}>{user.login.charAt(0).toUpperCase() + user.login.slice(1)}</Text>
                    <View style={styles.userInformation}>
                        <Text style={styles.textInformation}>{user.nbFollower} follower</Text>
                        <Text style={styles.textInformation}>{user.nbFollowing} following</Text>
                        <Text style={styles.textInformation}>{repos.length} repos</Text>
                    </View>
                </View>
            </View>

            <View style={styles.body}>
                <Text style={styles.title}>Repo :</Text>
                <ScrollView style={styles.scrollview}>
                    {listrepo(repos , navigation ,user.login)}
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
        marginLeft: "9%",
        marginTop: "5%",
        fontSize: 40
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