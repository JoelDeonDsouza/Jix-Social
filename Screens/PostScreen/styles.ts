import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("screen");

export const styles = StyleSheet.create({
    postConatiner: {
      flex: 1,
      backgroundColor: "#FFFFFF",
      justifyContent: "center",
      alignItems: "center",
    }
  });