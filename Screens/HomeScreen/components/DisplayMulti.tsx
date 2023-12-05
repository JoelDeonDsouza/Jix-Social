import React from "react";
import { ScrollView, View } from "react-native";
import { styles } from "../styles";
// component //
import MultiImg from "./MultiImg";
// Rendering Data types //
interface DisplayMultiProps {
  posts: {
    _id: string;
    ctg: string;
    img: string;
  }[];
}
const DisplayMulti: React.FC<DisplayMultiProps> = ({ posts }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.displayMultiContainer}>
        <View style={styles.displayColumn}>
          {posts
            .filter((i, index) => index % 2 === 0)
            .map((post) => (
              <MultiImg item={post} key={post._id} />
            ))}
        </View>
        <View style={styles.displayColumn}>
          {posts
            .filter((i, index) => index % 2 === 1)
            .map((post) => (
              <MultiImg item={post} key={post._id} />
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default DisplayMulti;
