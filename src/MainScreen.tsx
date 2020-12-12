import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export function Main() {
  // 画面遷移の定義
  const navigation = useNavigation();

  // Inputに戻る関数
  const toBack = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Button onPress={toBack} title="入力画面に戻る" />
      <View
        style={{ 
          flex: 1, 
          justifyContent: "center", 
          alignItems: "center" 
        }}
      >
        <Text>Input</Text>
      </View>
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
