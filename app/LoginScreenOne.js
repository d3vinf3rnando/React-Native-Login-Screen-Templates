import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View,Image } from 'react-native';


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

           {/* <Button style={styles.signinBtn} title='Sign in' color='#FC6B68' spacing={4}/> */}

           <TouchableOpacity style={styles.buttonstyle}>
            <Text style={styles.signintxt}>Sign In</Text>
           </TouchableOpacity>

            <Text style={styles.continue}>- Or continue with -</Text>

            {/*---login button section (google apple facebook)--- */}

            <View style={styles.loginBTNS}>
                <View>
                    <Image  source={require('../assets/googleIcon.webp')} style={{width:60, height:60, borderWidth:2,borderColor:'white', borderRadius:8}}/>
                </View>

                <View>
                    <Image  source={require('../assets/apple-icon.webp')} style={{width:50, height:50}}/>
                </View>

                <View>
                    <Image  source={require('../assets/facebookicon.png')} style={{width:45, height:45, top:5}}/>
                </View>
            </View>
                
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
        backgroundColor:'#EEF1F7'
    },

    view1:{
        flex:1,
        backgroundColor:'#EEF1F7',
        top:'8%'

    },

    view2:{
        flex:2,
        bottom:'8%'
        
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
        height: 55,
        margin: 12,
        borderWidth: 0,
        padding: 10,
        borderRadius:8,
        backgroundColor:'white',
        color:'#AFADAD',
    },

    fogPw:{
        textAlign:"right",
        right:14,
        top:2,
    },

    buttonstyle:{
        borderRadius:10,
        height: 55,
        margin: 12,
        backgroundColor:'#FC6B68',
        justifyContent: 'center',
        alignItems: 'center',
        top:40,


    },

    signintxt:{
        color:'white',
        fontWeight:'bold',
        fontSize:18,

    },



    continue:{
        textAlign:'center',
        top:80,
    },

    loginBTNS:{
        flexDirection:'row',
        top:'35%',
        justifyContent: 'space-evenly',
        
    }
    
})

export default LoginScreenOne