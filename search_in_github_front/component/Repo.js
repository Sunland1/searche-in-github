import { StatusBar } from 'expo-status-bar';
import React , {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ScrollView , Image , TouchableOpacity} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { MarkdownView } from 'react-native-markdown-view'

import { getBranch , getReadMe } from '../api/github_api';

export default function Repo({route,navigation}){

    const {repo , login } = route.params
    const [selectBranch,setSelectBranch] = useState("")

    //Select value function
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([]);
    const [readMe , setReadMe] = useState("");

    useEffect(async () => {
        let branchs = await getBranch(repo.id)
        let branchs_tab = []

        for(let i=0 ; i < branchs.length ; i++ ){
            branchs_tab.push({
                label: branchs[i].name,
                value: branchs[i].name
            })
        }

        setItems(branchs_tab)
    } , [])

    async function changeReadMe(value){
        setReadMe(await getReadMe(login, repo.name, value))
    }

    return(
        <View styles={styles.container}>
            <Text style={styles.h1}>{repo.name}</Text>
            <Text style={styles.text}>{repo.description === null ? "No description :(" : repo.description}</Text>
            <DropDownPicker
                placeholder='Select a branch'
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                containerStyle={{borderWidth: 1 , width: "70%"  , marginLeft: "5%"}}
                onChangeValue={(value) => changeReadMe(value) }
            />
            <MarkdownView style={{marginLeft: "5%"}}>
                # ReadMe :){'\n'}
               {readMe}
            </MarkdownView>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    text: {
        margin: "5%",
        fontSize: 16,
        fontStyle : "italic"
    },

    h1 : {
        margin: "5%",
        fontSize: 22
    }
});