import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, FlatList, Text } from "native-base";
import { PostItem } from "../components";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { PostSchemaType } from "../constants/types";

const PostsScreen = () => {
  const { navigate } = useNavigation<any>();
  const [posts] = useSelector(({ postsData }: any) => [postsData.posts]);
  const renderItem = ({ item }: { item: PostSchemaType }) => (
    <PostItem item={item} options />
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerStyle}>
        <Text fontSize='xl'>Posts</Text>
        <Button size={"sm"} onPress={() => navigate("CreatePost")}>
          Create New
        </Button>
      </View>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(_item, i) => i.toString()}
      />
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
  },
});
