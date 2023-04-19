import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';


function LoginScreenOne() {
  return (
  
       <View style={styles.container}>
        <View style={styles.view1}>
                <Text style={styles.heading1}>Hello Again!</Text>
                <Text>Welcome back you've been missed!</Text>
        </View>

        <View style={styles.view2}>
                
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

    },

    view2:{
        flex:2,
        backgroundColor:'green',
    },



    //text styles
    heading1:{
        fontSize:30,
        fontWeight:'bold',
        
    }
    
})

export default LoginScreenOne