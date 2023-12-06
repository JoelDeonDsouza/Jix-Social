import React, { useRef, useEffect } from "react";
import { View, TouchableOpacity, FlatList } from "react-native";
import { styles } from "../styles";
// Video player //
import { Video, ResizeMode } from "expo-av";
// Icons //
import Icon from "react-native-vector-icons/Feather";
import { BlurView } from "expo-blur";
// Rendering Data types //
interface DisplayMultiProps {
  shorts: {
    _id: string;
    ctg: string;
    mp4: string;
  }[];
}
const ShortsPlayer: React.FC<DisplayMultiProps> = ({ shorts }) => {
  const video = useRef(null);
  useEffect(() => {
    const playVideo = async () => {
      if (video.current) {
        await (video.current as Video).playAsync();
      }
    };

    playVideo();
  }, []);
  return (
    <View style={styles.videoContainer}>
      <FlatList
        data={shorts}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: "50%" }}
        renderItem={({ item }) => (
          <View style={styles.videoMainContainer}>
            <Video
              ref={video}
              style={styles.video}
              source={{
                uri: item.mp4,
              }}
              useNativeControls
              resizeMode={ResizeMode.COVER}
              isLooping
              isMuted={true}
            />
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
    </View>
  );
};

export default ShortsPlayer;
