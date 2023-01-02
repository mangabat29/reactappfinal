import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image, 
  ScrollView
} from "react-native";
import React from "react";
import Map from './Map'
import { Montserrat } from "../theme/Fonts";
import { Colors } from "../theme/colors";
import { Ionicons } from '@expo/vector-icons';

const About = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
    <View style={styles.aboutContainer}>

      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}> About </Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
          This application includes a number of movies as well as information about them. This is ideal for those who enjoy watching movies but struggle to decide what to watch.
        </Text>
      </View>

      <View style={styles.contactLayout}>
        <Text style={styles.mainHeader}> GET IN TOUCH </Text>

        <View style={{flexDirection:'row', alignSelf: 'center',}}>
          <Ionicons name = {"call"} size = {24} color = {Colors.blue[100]} style = {{ paddingRight: 5}} />
          <Text style = {styles.paraStyle, styles.pStyle}> Phone Number </Text>
        </View> 
        <Text style = {styles.paraStyle}> 09876543210 </Text>     
        <View style={{flexDirection:'row', alignSelf: 'center',}}>
          <Ionicons name = {"mail"} size = {24} color = {Colors.blue[100]} style = {{ paddingRight: 5}} />
          <Text style = {styles.paraStyle, styles.pStyle}> Email </Text>
        </View>
        <Text style = {styles.paraStyle}> g7technologies@gmail.com </Text> 
        <View style={{flexDirection:'row', alignSelf: 'center',}}>
          <Ionicons name = {"location"} size = {24} color = {Colors.blue[100]} style = {{ paddingRight: 5}} />
          <Text style = {styles.paraStyle, styles.pStyle}> Address </Text>
        </View> 
        <Text style = {styles.paraStyle}> Lopez Ave., Los Baños, Laguna </Text>

      <View style={styles.mapLayout}>
        <Map />
      </View>
      </View>

      <View style={styles.followLayout}>
      <Text style={styles.aboutSubHeader}> FOLLOW US </Text>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/187/187210.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/906/906361.png",
            }}
          />
        </TouchableOpacity>
      </View>
      </View>

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  aboutContainer: {
    backgroundColor: Colors.blue[800],
    minHeight: 500,
    width: "100%",
  },
  mainHeader: {
    fontSize: 24,
    color: Colors.blue[100],
    textTransform: "uppercase",
    fontFamily: "Montserrat.semiBold",
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  paraStyle: {
    fontSize: 18,
    color: Colors.gray[400],
    paddingBottom: 30,
    fontFamily: "Montserrat.light",
    textAlign: 'center',
  },
  pStyle: {
    fontFamily: "Montserrat.medium",
    color: "#fff",
    fontSize: 18,
    textAlign: 'center',
  },
  aboutLayout: {
    backgroundColor: Colors.blue[400],
    paddingHorizontal: 30,
    marginVertical: 30,
  },
  contactLayout: {
    paddingHorizontal: 30,
    backgroundColor: Colors.blue[800],
  },
  mapLayout: {
    flex: 1,
    position: "relative",
    height: 300
  },
  followLayout: {
    marginTop: -100,
    marginBottom: 30,
    paddingHorizontal: 30,
    backgroundColor: Colors.blue[800],
  },
  aboutSubHeader: {
    fontSize: 24,
    color: Colors.blue[100],
    textTransform: "uppercase",
    marginVertical: 15,
    fontFamily: "Montserrat.semiBold",
    alignSelf: "center",
  },
  aboutPara: {
    color: "#fff",
    fontFamily: "Montserrat.medium",
  },
  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
});

export default About;