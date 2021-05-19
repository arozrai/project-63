import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import dictionary from './database'

export default class HomeScreen extends React.Component {
    constructor(){
        super()
        this.state={
          word:'',
          isSearchPressed:'',
          text:'',
          definition:'',
          lexicalCategory:''
        }
    }
    getWord=(text)=>{
        var text = text.toLowerCase()
        try{
            var word = dictionary[text]["word"]
            var lexicalCategory = dictionary[text]["lexicalCategory"]
            var definition = dictionary[text]["definition"]
            this.setState({
                "word": word,
                "lexicalCategory": lexicalCategory,
                "definition": definition
            })
        }
        catch(err){
            alert("Sorry This word is not available for now")
            this.setState({
                'text':'',
                'isSearchPressed':false
            })
        }
    }
  render(){
    return (
        <View style={styles.container}>
        <TextInput
            style={styles.inputBox}
            onChangeText={text => {
                this.setState({
                    text : text,
                    isSearchPressed: false,
                    word :"loading...",
                    lexicalCategory:'',
                    examples:[],
                    defination:""
                })
            }}
            value={this,state.text}
        />
        <TouchableOpacity
            style={styles.searchButton}
            onPress={()=>{
                this.setState({isSearchPressed:true})
                this.getWord(word)
            }}
        />
        </View>
    );
  }
  render(){
      return(
          <View style={styles.detailsContiner}>
              <Text style={styles.detailsTitle}>
                  Type:{" "}
              </Text>
              <Text style={{fontSize:18}}>
                  {this.state.lexicalCategory}
              </Text>
          </View>
      )
  }
    render(){
        return(
            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                <Text style={styles.detailsTitle}>
                    Definition:{" "}
                </Text>
                <Text style={{fontSize:18}}>
                    {this.state.definition}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

