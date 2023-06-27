import React from 'react';
import {
  Button,
  TextInput,
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

const Login = () => {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  return (
    <ScrollView style={style.body}>
      <Image style={style.img} source={require("../Exercicio-React/assets/user.png")}/>
      
      <View style={style.titulo}>Bem vindo</View>

      <View style={style.form}>

        <TextInput
          style={style.nome}
          placeholder="Nome:"
        ></TextInput>

        <TextInput style={style.email} placeholder="Email:"></TextInput>

        <TextInput style={style.senha} placeholder="Senha:"></TextInput>

        <Button  style={style.login}title="Fazer Login"></Button>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({

  body: {
    backgroundColor: "#d3d3d3",
    
  },
  img:{
    alignItems: "center",
    width: 150,
    height: 150,
    margin: "auto",
    marginTop: 100,
  },
  titulo: {
    color: "black",
    fontSize: 30,
    textAlign: "center",
    marginTop: 10,
    fontFamily: "MontserratBold"
  },
  form: {
    margin: 40,
    border: 2,
    borderColor: "black",
    borderRadius: 9,
    alignSelf: "center",
    width: "80%",
    justigySelf: "center",
    backgroundColor: "#a0bcd9",   
    
  },
  nome:{
    fontFamily: "MontserratRegular",
    margin: 5,
  },
  email: {
    fontFamily: "MontserratRegular",
    margin: 5,
  },
  senha: {
    fontFamily: "MontserratRegular",
    margin: 5,
  },
  login: {
    marginTop: 10,
    alignItem: "center",
    width: 150,
    height: 60,
    borderRadius: 45,
    transition: "all 0.3s",
    cursor: "pointer",
    background: "white",
    fontSize: 1.2,
    fontFamily: "MontserratBold",
    
  },


})


export default Login;