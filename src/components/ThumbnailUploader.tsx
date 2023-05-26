import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";

type TextPropsType = {
  uri: string;
  isInvalid: boolean;
  setUri: (text: string) => void;
};
const ThumbnailUploader: React.FC<TextPropsType> = ({
  uri,
  setUri,
  isInvalid,
}) => {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
      allowsMultipleSelection: false,
    });
    if (result.assets && result.assets.length > 0) {
      const firstAsset = result.assets[0];
      setUri(firstAsset.uri);
    }
  };
  return (
    <Pressable
      style={({ pressed }) => [{ opacity: pressed ? 0.95 : 1 }]}
      onPress={() => pickImage()}
    >
      {uri ? (
        <Image source={{ uri }} style={styles.imageStyle} />
      ) : (
        <View
          style={[
            styles.rectangleShapeStyle,
            {
              borderColor: isInvalid ? "red" : "#DADADA",
            },
          ]}
        >
          <Text>Upload Thumbnail</Text>
        </View>
      )}
    </Pressable>
  );
};

export { ThumbnailUploader };

const styles = StyleSheet.create({
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#DADADA",
  },
  rectangleShapeStyle: {
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderWidth: 1,
  },
});
