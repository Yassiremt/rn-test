import * as React from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import PostsScreen from "../screens/PostsScreen";
import ArchivedScreen from "../screens/ArchivedScreen";
import DeletedScreen from "../screens/DeletedScreen";

const renderScene = SceneMap({
  posts: PostsScreen,
  archived: ArchivedScreen,
  deleted: DeletedScreen,
});

const PostsTab = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: "posts", title: "Posts" },
    { key: "archived", title: "Archived" },
    { key: "deleted", title: "Deleted" },
  ]);
  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "white" }}
      style={{ backgroundColor: "#0891B2" }}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor='#0891B2' />
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </SafeAreaView>
  );
};

export default PostsTab;
