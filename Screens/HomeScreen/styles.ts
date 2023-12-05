import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  homeConatiner: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headerConatiner: {
    flexDirection: "row",
    marginTop: height / 20,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    width: width / 8,
    height: height / 29,
  },
  iconContainerFilter: {
    alignItems: "center",
    justifyContent: "center",
    width: 35,
    height: 35,
    backgroundColor: "#fff",
    borderRadius: width / 1,
    borderWidth: 0.15,
    borderColor: "#000",
    shadowColor: "#022C43",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  filterListContainer: {
    justifyContent: "center",
  },
  ctgContainer: {
    paddingVertical: height / 90,
    paddingHorizontal: width / 30,
  },
  ctgText: {
    fontSize: 16,
    fontWeight: "600",
  },
  // displayMulti //
  displayMultiContainer: {
    flexDirection: "row",
    padding: 10,
  },
  displayColumn: {
    flex: 1,
  },
  singleImgContainer: {
    width: "100%",
    padding: 4,
  },
  imgMulti: {
    width: "100%",
    borderRadius: width / 26,
  },
});
