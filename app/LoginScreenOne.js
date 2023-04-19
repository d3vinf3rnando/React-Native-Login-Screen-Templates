import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';


function LoginScreenOne() {

    const [text, onChangeText] = React.useState('Username or Email');
    const[pwtext, pwChangeTex] =React.useState('Password');
  return (
  
       <View style={styles.container}>
        <View style={styles.view1}>
                <Text style={styles.heading1}>Hello Again!</Text>
                <Text style={styles.para1}>Welcome back you've been missed!</Text>
        </View>

        <View style={styles.view2}>
            <TextInput style={styles.email} value={text} onChangeText={onChangeText}/>
            <TextInput style={styles.email} value={pwtext} onChangeText={pwChangeTex}/>
            <Text style={styles.fogPw}>Forgot Password</Text>
                
        </View>
       </View>
    
  )
}

const styles = StyleSheet.create({

    container:{
        flexDirection: 'column',
        flex:1,
        paddingVertical:'11%',
        paddingHorizontal:'4%',
    },

    view1:{
        flex:1,
        backgroundColor:'white',
        top:'8%'

    },

    view2:{
        flex:2,
        
    },

    //text styles
    heading1:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center'

    },

    para1:{
        fontSize:18,
        opacity:0.7,
        textAlign:'center',
        paddingHorizontal:'20%',
        top:3
        
    },

    email:{
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
    
})

export default LoginScreenOne