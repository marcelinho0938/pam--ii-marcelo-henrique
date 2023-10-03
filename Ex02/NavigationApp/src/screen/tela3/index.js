import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";


export default function ProjectScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.conteiner}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Projeto</Text>
      </View>
      <View style={styles.projectView}>
        <Image
          source={require("../../../assets/nome.png")}
          style={styles.image}
        />
        <Text style={styles.projectText}>
          Focus Word é um projeto educacional gamificado desenvolvido pela Auth
          Tecnolgias e Aprendizados. O jogo consiste em um caça palavras
          educacional, para crianças com TDA, transtorno de deficit de atenção.
          Jogo usa da tese da gamificação para ensinar a criança com TDA
          matérias da escola.
        </Text>
      </View>
      <View style={styles.ButtonsArea}>
        <TouchableOpacity
          style={styles.ButtomHome}
          onPress={() => navigation.navigate("Home")}
        >
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ButtomMem}
          onPress={() => navigation.navigate("Members")}
        >
          <Text>Membros</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#008f8C",
    alignItems: "center",
  },
  header: {
    marginTop: 50,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 30,
  },
  projectView: {
    marginTop: 20,
    width: "80%",
    height: "35%",
    alignItems: "center",
  },
  image: {
    width: 180,
    height: 140,
    marginBottom: 15,
  },
  projectText: {
    fontSize: 20,
    marginTop: 120,
  },
  ButtonsArea: {
    flexDirection: "row",
    marginTop: 120,
  },
  ButtomHome: {
    backgroundColor: "gray",
    flexDirection: "row",
    padding: 15,
    borderRadius: 15,
    marginRight: 10,
  },
  ButtomMem: {
    backgroundColor: "gray",
    flexDirection: "row",
    padding: 15,
    borderRadius: 15,
  },
});