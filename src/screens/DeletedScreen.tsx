import { StyleSheet, View } from "react-native";
import React from "react";
import { FlatList, Text } from "native-base";
import { PostItem } from "../components";
import { useSelector } from "react-redux";
import { PostSchemaType } from "../constants/types";

const DeletedScreen = () => {
  const [deleted] = useSelector(({ postsData }: any) => [postsData.deleted]);
  const renderItem = ({ item }: { item: PostSchemaType }) => (
    <PostItem item={item} />
  );
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerStyle}>
        <Text fontSize='xl'>Deleted</Text>
      </View>
      <FlatList
        data={deleted}
        renderItem={renderItem}
        keyExtractor={(_item, i) => i.toString()}
      />
    </View>
  );
};

export default DeletedScreen;

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
  },
});
