import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import { PieChart, ProgressChart} from "react-native-chart-kit";
import { skipPartiallyEmittedExpressions } from "typescript";
import ImagePic from "../assets/ImagePic.png";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const data = [
  {
    name: "出店費用",
    population: 150,
    color: "#1a5090",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "広告",
    population: 200,
    color: "#538dc2",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "ポイントコスト",
    population: 61,
    color: "#da7531",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "クーポン",
    population: 80,
    color: "#edb215",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "手数料",
    population: 340,
    color: "#a0a0a0",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
];

const chartConfig = {
  backgroundGradientFrom: "black",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "black",
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => "black",
};


export function Main() {
  // 画面遷移の定義
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.pieChartView}>
        <Text style={styles.date}>12月1日~31日</Text>
        <PieChart
          data={data}
          width={windowWidth * 0.8}
          height={windowHeight * 0.2}
          chartConfig={chartConfig}
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
          center={[5, 5]}
          absolute
        />
      </View>
      <Image
        source={ImagePic}
        style={{
          width: 400,
          height: 350,
          marginTop: 300,
          resizeMode: "contain",
        }}
      />
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
  date: {
    textAlign:'center',
    fontSize: 20,
  },
  pieChartView: {
    position: "absolute",
    top: 120,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
});
