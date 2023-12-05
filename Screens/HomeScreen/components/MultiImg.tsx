import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";
import { styles } from "../styles";
// Type rendered //
interface MultiImgProps {
  item: {
    img: string;
  };
}
const MultiImg: React.FC<MultiImgProps> = ({ item }) => {
  const img = item.img;
  //Aspect ratio //
  const [imgSize, setImgSize] = useState(1);
  useEffect(() => {
    if (img) {
      Image.getSize(img, (width, height) => setImgSize(width / height));
    }
  }, [img]);
  //Aspect ratio //
  return (
    <View style={styles.singleImgContainer}>
      <Image
        style={[styles.imgMulti, { aspectRatio: imgSize }]}
        source={{
          uri: img,
        }}
      />
    </View>
  );
};

export default MultiImg;
