import React from "react";
import { Provider } from "react-redux";
import store from "@/store";
import { NavigationContainer } from "@react-navigation/native";
import TabLayout from "@/app/(tabs)/_layout";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabLayout />
      </NavigationContainer>
    </Provider>
  );
}
