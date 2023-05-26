import { StyleSheet, View, useWindowDimensions } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { Button, Text, Icon } from "native-base";
import { useDispatch } from "react-redux";
import { archivePost, deletePost } from "../actions";
import { PostSchemaType } from "../constants/types";
import { Ionicons, Feather } from "@expo/vector-icons";

const PostItem = ({
  item,
  options,
}: {
  item: PostSchemaType;
  options?: boolean;
}) => {
  const width = useWindowDimensions().width / 1.5;
  const dispatch = useDispatch<any>();

  const handleDeletePost = () => {
    dispatch(deletePost(item));
  };
  const handleArchivePost = () => {
    dispatch(archivePost(item));
  };

  return (
    <View style={styles.containerStyle}>
      <Image
        source={{ uri: item?.thumbnail }}
        style={[styles.imgStyle, { width, height: width }]}
      />
      <Text fontSize='xl' style={styles.titleStyle}>
        {item?.title}
      </Text>
      <Text fontSize='sm' style={styles.contentStyle}>
        {item?.body}
      </Text>
      {options && (
        <View style={styles.btnsContainerStyle}>
          <Button
            onPress={handleDeletePost}
            endIcon={<Icon as={Feather} name='x' size='sm' />}
            colorScheme='secondary'
          >
            Delete
          </Button>
          <Button
            onPress={handleArchivePost}
            endIcon={<Icon as={Ionicons} name='checkmark' size='sm' />}
          >
            Archive
          </Button>
        </View>
      )}
    </View>
  );
};

export { PostItem };

const styles = StyleSheet.create({
  containerStyle: {
    margin: 10,
    borderColor: "#DADADA",
    borderWidth: 1.5,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#FEFEFE",
  },
  imgStyle: { borderRadius: 10, alignSelf: "center", marginBottom: 10 },
  titleStyle: { marginVertical: 5 },
  contentStyle: { marginVertical: 5 },
  btnsContainerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
