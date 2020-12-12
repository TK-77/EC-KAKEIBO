import { StatusBar } from "expo-status-bar";
import React, { useState, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Pressable,
  Platform,
  Button,
  StatusBar as RNStatusBar,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  Picker,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import Select from "react-select";
// import { RadioButton } from "react-native-paper";
import RNPickerSelect from "react-native-picker-select";

const { width } = Dimensions.get("screen");

const containerPaddingTop =
  Platform.OS === "ios" ? 0 : RNStatusBar.currentHeight;


export default function App() {
  const [sales, setSales] = React.useState("");
  const [ad, setAd] = React.useState("");
  const [feeResult, setFeeResult] = React.useState(0);
  const [costResult, setCostResult] = React.useState(0);
  const [shopCost, setShopCost] = React.useState(0);

  const rates = [0.025, 0.027, 0.029, 0.031, 0.041];

  const changeRate = (sales: number) => {
    if (sales > 30000000) {
      return rates[0];
    } else if (sales <= 30000000 && sales > 10000000) {
      return rates[1];
    } else if (sales <= 10000000 && sales > 3000000) {
      return rates[2];
    } else if (sales <= 3000000 && sales > 1000000) {
      return rates[3];
    } else {
      return rates[4];
    }
  };

  const calcFee = (sales: number) => {
    const feeResult = sales * changeRate(sales);
    return feeResult;
  };

  const calcCost = ( ad: number, feeResult: number, shopCost: number) => {
    const costResult = ad + feeResult + shopCost;
    return costResult;
  };

  const calcResult = () => {
    const feeResult = calcFee(Number(sales));
    const costResult = calcCost(Number(ad), feeResult, shopCost);

    setFeeResult(feeResult);
    setCostResult(costResult);
    
  };

  const feeResultView = Math.round(feeResult);

  const costResultView = Math.round(costResult);



  const shopCostList = [19500, 50000, 100000];

  const changeShopCost = (planName: string) => {
    switch (planName) {
      case "ganba":
        setShopCost(shopCostList[0]);
        break;
      case "standard":
        setShopCost(shopCostList[1]);
        break;
      case "mega":
        setShopCost(shopCostList[2]);
        break;
      default: 0;
        break;
    }
  };

  return (
    <KeyboardAwareScrollView>
      <KeyboardAvoidingView
        keyboardVerticalOffset={90}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.keyboardAvoidingView}
      >
        <SafeAreaView style={styles.container}>
          <View>
            {/* <View style={styles.titleView}> */}
            <Text style={styles.titleText}>EC家計簿</Text>
            {/* </View> */}

            <Text style={styles.boxname}>ECモール</Text>
            <View style={styles.selectBox}>
              <RNPickerSelect
                onValueChange={(value: string) => console.log(value)}
                items={[
                  { label: "楽天市場", value: "rakuten" },
                  { label: "Amazon", value: "amazon" },
                  { label: "Yahoo!", value: "yahoo!" },
                ]}
                style={{ ...pickerSelectStyles }}
                placeholder={{ label: "選択してください", value: "" }}
                Icon={() => <Text style={styles.triangle}>▼</Text>}
              />
            </View>

            <View>
              <Text style={styles.boxname}>出店プラン</Text>

              <View style={styles.selectBox}>
                <RNPickerSelect
                  onValueChange={(value: string) => changeShopCost(value)}
                  items={[
                    { label: "がんばれ!プラン", value: "ganba" },
                    { label: "スタンダードプラン", value: "standard" },
                    { label: "メガショッププラン", value: "mega" },
                  ]}
                  style={{ ...pickerSelectStyles }}
                  placeholder={{ label: "選択してください", value: "" }}
                  Icon={() => <Text style={styles.triangle}>▼</Text>}
                />
              </View>

              <Text style={styles.boxname}>当月売上</Text>
              <TextInput
                style={styles.textBox}
                placeholder="入力してください"
                onChangeText={(text) => setSales(text)}
                value={sales}
                keyboardType="numeric"
              />

              <Text style={styles.boxname}>広告費</Text>
              <TextInput
                style={styles.textBox}
                placeholder="入力してください"
                onChangeText={(text) => setAd(text)}
                value={ad}
                // text-align="right"
                keyboardType="numeric"
              />

              <Text style={styles.boxname}>出店費用</Text>
              <Text style={styles.textBox}>{shopCost.toLocaleString()}</Text>

              <Text style={styles.boxname}>手数料</Text>
              <Text style={styles.textBox}>
                {feeResultView.toLocaleString()}
              </Text>

              <Text style={styles.boxname}>コスト合計</Text>
              <View style={styles.textBox}>
                <Text style={styles.textInput}>
                  {costResultView.toLocaleString()}
                </Text>
              </View>

              <View style={styles.button}>
                <TouchableOpacity>
                  <Text style={styles.buttonText} onPress={calcResult}>
                    計算
                  </Text>
                </TouchableOpacity>
              </View>

              <StatusBar style="auto" />
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffff",
    height: "100%",
    flex: 1,
  },
  keyboardAvoidingView: {
    width: "100%",
  },
  box: {
    height: "100%",
  },
  titleView: {
    textAlign: "right",
  },
  titleText: {
    fontSize: 40,
    width: width * 0.53,
    textAlign: "right",
    padding: 10,
  },
  boxname: {
    fontSize: 20,
    padding: 3,
  },
  textBox: {
    backgroundColor: "#ffff",
    borderWidth: 2,
    fontSize: 20,
    width: 250,
    height: 50,
    padding: 3,
    marginRight: 5,
    marginBottom: 15,
  },
  textInput: {
    fontSize: 20,
  },
  button: {
    alignItems: "center",
    // position: "absolute",
    right: -150,
    // bottom: 1,
    backgroundColor: "#c0c0ff",
    width: 100,
    borderWidth: 2,
    borderRadius: 15,
    padding: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "black",
  },
  radioText: {
    fontSize: 20,
  },
  selectBox: {
    borderWidth: 2,
    fontSize: 20,
    width: 250,
    height: 50,
    backgroundColor: "#ffff",
    padding: 3,
    marginRight: 5,
    marginBottom: 15,
  },
  triangle: {
    position: "absolute",
    right: 35,
    top: 8,
    fontSize: 20,
    color: "#789",
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 20,
    justifyContent: "center",
    left: 1,
    top: 8,
  },
});
