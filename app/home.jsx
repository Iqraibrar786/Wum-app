import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView,Image } from 'react-native';
import styles from "../styles/global";
import { useRouter } from "expo-router";
import Icon from 'react-native-vector-icons/MaterialIcons';
const Img = require("../assets/images/class1img.jpg");

const Home = () => {
  const router=useRouter();
                   function createclass(){
                     router.push("/createclass");
                   }
                   function joinclass(){
                     router.push("/joinclass");
                   }
  return (
    <SafeAreaView style={styles.primaryContainer}>

              <View style={styles.navContainer}>
       {/* Navbar */}
      <TouchableOpacity>
        <Icon name="menu" size={28} color="#000" marginTop={13} />
      </TouchableOpacity>
      <Text style={styles.title}>Google Classroom</Text>
      <TouchableOpacity>
        <Icon name="more-vert" size={24} color="#000" marginTop={13}/>
      </TouchableOpacity>
      </View>     
      <Text style={styles.helpText}>Don't see your classes?{"\n"}Try another account</Text>
              
       <View style={styles.image}>
        <Image source={Img} style={styles.image} />
        </View>
        <Text style={styles.helpText}>Add a class to get started</Text>
           <TouchableOpacity style={styles.primaryButton}
           onPress={createclass}>
              <Text style={styles.buttonText}>Create class</Text>
            </TouchableOpacity>
             <TouchableOpacity style={styles.transparentButton}
             onPress={joinclass}>
              <Text style={styles.transparentButtonText}>Join class</Text>
            </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;