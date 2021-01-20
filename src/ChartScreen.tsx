import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Button, StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import logo from "../assets/MainImage.png";

export function Chart() {
  // 画面遷移の定義
  const navigation = useNavigation();

  // Inputに戻る関数
  const toBack = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Image
        source={logo}
        style={{
          width: 400,
          height: 750,
          marginTop: 50,
          resizeMode: "contain",
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
