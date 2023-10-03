import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';


export default function  HomeScreen () {
  const navigation = useNavigation(); 

  return (
    <View style={styles.Conteiner}>
      <View style={styles.Logo}>
        <Image
          source={require("../../../assets/auth.png")}
          style={styles.ImageHead}
        />
        <Text style={styles.TextHead}>Tecnologias e Aprendizados.</Text>
      </View>

      <View style={styles.ButtonsArea}>
        <TouchableOpacity
          style={styles.ButtomMem}
          onPress={() => navigation.navigate("Members")}
        >
          <Text>Membros</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ButtomPro}
          onPress={() => navigation.navigate("Project")}
        >
          <Text>Projetos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 

const styles = StyleSheet.create({
  Conteiner: {
    flex: 1,
    backgroundColor: "#008f8C",
    alignItems: "center",
    justifyContent: "center",
  },
  Logo: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  ImageHead: {
    position: "relative",
    width: 180,
    height: 100,
  },
  TextHead: {
    marginTop: 10,
    fontSize: 20,
    color: "black",
  },
  ButtonsArea:{
    flexDirection: 'row',
  },
  ButtomMem:{
    backgroundColor: 'gray',
    flexDirection: 'row',
    padding: 15, 
    borderRadius: 15,
    marginRight: 10,
  },
   ButtomPro:{
    backgroundColor: 'gray',
    flexDirection: 'row',
    padding: 15, 
    borderRadius: 15,
  }
});