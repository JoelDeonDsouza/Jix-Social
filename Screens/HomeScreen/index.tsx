import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
// Styles //
import { styles } from "./styles";
// Icons //
import Icon from "react-native-vector-icons/Ionicons";

const HomeScreen = () => {
  return (
    <View style={styles.homeConatiner}>
      <View style={styles.headerConatiner}>
        <TouchableOpacity style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/logo.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainerFilter}>
          <Icon name="flash" size={26} color={"#2f7bb9"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
