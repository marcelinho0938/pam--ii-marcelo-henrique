import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';


export default function  MembersScreen () {
  const navigation = useNavigation(); 

  return (
    <View style={styles.conteiner}>
      <View style={styles.header}>
        <Text style={styles.header1}>Membros Auth</Text>
        <Text style={styles.header2}>Equipe formada por:</Text>
      </View>

      <View style={styles.documentationStyle}>
        <Text style={styles.documentationHeader}>Documentação:</Text>
        <TouchableOpacity onPress={() => (hreaf = "https://github.com/digxz")}>
          <Image
            source={require("../../../assets/Members/Diego.jpeg")}
            style={styles.image}
          />
          <Text style={styles.text}>Diego Castellini</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.designStyle}>
        <Text style={styles.designStyleHeader}>Design:</Text>
        <View style={styles.designStyleImage}>
          <TouchableOpacity
            onPress={() => (hreaf = "https://github.com/Kayysss")}
          >
            <Image
              source={require("../../../assets/Members/Kayky.jpeg")}
              style={styles.image}
            />
            <Text style={styles.text}>KayKy Silva</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => (hreaf = "https://github.com/IsabelliSS")}
          >
            <Image
              source={require("../../../assets/Members/Isa.jpeg")}
              style={styles.image}
            />
            <Text style={styles.text}>Isabelli Sangiago</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.programesStyle}>
        <Text style={styles.programesStyleHeader}>Programadores:</Text>
        <View style={styles.programersStyleImage}>
          <TouchableOpacity
            onPress={() => (hreaf = "https://github.com/TheGVictor")}
          >
            <Image
              source={require("../../../assets/Members/Grabriel.jpeg")}
              style={styles.image}
            />
            <Text style={styles.text}>Gabriel Sancinetti</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => (hreaf = "https://github.com/renansouz")}
          >
            <Image
              source={require("../../../assets/Members/Renan.jpeg")}
              style={styles.image}
            />
            <Text style={styles.text}>Renan Souza</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.programersStyleImage2}>
          <TouchableOpacity
            onPress={() => (hreaf = "https://github.com/marcelinho0938")}
          >
            <Image
              source={require("../../../assets/Members/Marcelo.jpeg")}
              style={styles.image}
            />
            <Text style={styles.text}>Marcelo Henrique</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => (hreaf = "https://github.com/MuriloBC2")}
          >
            <Image
              source={require("../../../assets/Members/Murilo.jpeg")}
              style={styles.image}
            />
            <Text style={styles.text}>Murilo Barros</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.ButtonsArea}>
        <TouchableOpacity
          style={styles.ButtomHome}
          onPress={() => navigation.navigate("Home")}
        >
          <Text>Home</Text>
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
  conteiner: {
    width: "auto",
    height: "auto",
    flex: 1,
    backgroundColor: "#008F8C",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 20,
  },
  text: {
    fontSize: 15,
    marginRight: 20,
  },
  header: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  header1: {
    fontSize: 40,
    color: "black",
  },
  header2: {
    fontSize: 25,
    color: "black",
  },

  documentationStyle: {
    marginTop: 120,
    marginBottom: 10,
    marginLeft: 10,
    alignItems: 'center',
  },
  documentationHeader: {
    fontSize: 20,
    marginBottom: 10,
  },
  designStyle: {
    marginTop: 50,
    marginBottom: 10,
    marginLeft: 10,
    alignItems: 'center',
  },
  designStyleHeader: {
    fontSize: 20,
    marginBottom: 10,
  },
  designStyleImage: {
    flexDirection: "row",
    marginRight: 10,
  },
  programesStyle: {
    marginTop: 50,
    marginBottom: 200,
    marginLeft: 10,
    alignItems: 'center',
  },
  programesStyleHeader: {
    fontSize: 20,
    marginBottom: 10,
  },
  programersStyleImage: {
    flexDirection: "row",
  },
  programersStyleImage2: {
    flexDirection: "row",
    marginTop: 10,
  },
  ButtonsArea: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center,'
  },
  ButtomHome: {
    backgroundColor: "gray",
    flexDirection: "row",
    padding: 15,
    borderRadius: 15,
    marginRight: 10,
  },
  ButtomPro: {
    backgroundColor: "gray",
    flexDirection: "row",
    padding: 15,
    borderRadius: 15,
  },
});