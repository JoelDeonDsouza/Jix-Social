import React from "react";
import { View, FlatList, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles";
// Icons //
import Icon from "react-native-vector-icons/Feather";
import { BlurView } from "expo-blur";

// Rendering Data types //
interface DisplayMultiProps {
  posts: {
    _id: string;
    ctg: string;
    img: string;
  }[];
}
const ImgList: React.FC<DisplayMultiProps> = ({ posts }) => {
  return (
    <>
      <FlatList
        data={posts}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.imgContainer}>
            <Image style={styles.imgCtg} source={{ uri: item.img }} />
            <BlurView
              style={styles.floatingTextContainer}
              intensity={50}
              tint="dark"
            >
              <TouchableOpacity style={styles.iconContainer}>
                <Icon name="heart" size={26} color={"#fff"} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconContainer}>
                <Icon name="message-circle" size={28} color={"#fff"} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconContainer}>
                <Icon name="send" size={26} color={"#fff"} />
              </TouchableOpacity>
            </BlurView>
          </View>
        )}
      />
    </>
  );
};

export default ImgList;
