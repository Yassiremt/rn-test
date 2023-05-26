import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatePostScreen from "../screens/CreatePostScreen";
import PostsTab from "./PostsTab";

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Posts'
        component={PostsTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='CreatePost'
        component={CreatePostScreen}
        options={{ title: "Create New Post" }}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
