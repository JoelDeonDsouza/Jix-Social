import React, { useState, useEffect } from "react";
import { View, Image, TouchableOpacity, FlatList, Text } from "react-native";
// Styles //
import { styles } from "./styles";
// Icons //
import Icon from "react-native-vector-icons/Ionicons";
// Dummy data //
import { ctg, posts, shorts } from "../../assets/Data";
// Components //
import { DisplayMulti, ImgList, ShortsPlayer } from "./components";

const HomeScreen = () => {
  const [activeCtg, setActiveCtg] = useState("");
  // First filter active //
  useEffect(() => {
    if (ctg.length > 0) {
      setActiveCtg(ctg[0]._id);
    }
  }, []);

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
      <View style={styles.filterListContainer}>
        <FlatList
          horizontal
          data={ctg}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flex: 1,
            marginTop: 2,
          }}
          keyExtractor={(item) => item._id}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setActiveCtg(item._id)}
              style={[
                {
                  marginLeft: index == 0 ? 10 : 12,
                  marginRight: index == ctg.length - 1 ? 10 : 0,
                },
                styles.ctgContainer,
              ]}
            >
              <Text
                style={[
                  styles.ctgText,
                  { color: item._id === activeCtg ? "#022C43" : "#B6BBC4" },
                ]}
              >
                {item.name}
              </Text>
              <View
                style={[
                  styles.underline,
                  {
                    backgroundColor:
                      item._id === activeCtg ? "#2f7bb9" : "transparent",
                  },
                ]}
              />
            </TouchableOpacity>
          )}
        />
      </View>
      {activeCtg === "001" && <DisplayMulti posts={posts} />}
      {activeCtg === "002" && <ImgList posts={posts} />}
      {activeCtg === "003" && <ShortsPlayer shorts={shorts} />}
    </View>
  );
};

export default HomeScreen;
