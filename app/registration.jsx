import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
} from "react-native";
import styles from "../styles/global";
import { useState } from "react";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
function Registration() {
   const router=useRouter();
        function otp(){
          router.push("/otp");
        }
  const [PhoneNumber, setPhoneNumber] = useState("");
  return (
    <SafeAreaView style={styles.Container}>
        <Text style={styles.sideTitle}>Phone Registration</Text>
        <Text style={styles.sideDescription}>
          Please enter your valid phone number.We well send you 4-digit code to
          verify account
        </Text>
        <View style={styles.inputContainer}>
          <View style={styles.phoneContainer}>
            <AntDesign name="phone" size={20} color="#888" marginLeft={10} />
            <TextInput
              style={styles.phoneInput}
              placeholder="Phone number"
              placeholderTextColor="#666"
            />
          </View>
        </View>
        <TouchableOpacity style={styles.primaryButton}
        onPress={otp}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <Text style={styles.subTitle}>
          Please review our terms and conditions
        </Text>
        <TouchableOpacity>
          <Text style={styles.link}>Terms and conditions</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}
export default Registration;
