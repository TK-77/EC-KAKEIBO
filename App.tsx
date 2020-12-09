import { StatusBar } from "expo-status-bar";
import React, { useState, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Platform,
  Button,
  StatusBar as RNStatusBar,
  Dimensions,
  KeyboardAvoidingView,
  Picker,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Select from "react-select";
import { RadioButton } from "react-native-paper";
import RNPickerSelect from "react-native-picker-select";

const { width } = Dimensions.get("screen");

const containerPaddingTop =
  Platform.OS === "ios" ? 0 : RNStatusBar.currentHeight;





export default function App() {
  const [sales, setSales] = React.useState("");
  const [ad, setAd] = React.useState("");
  const [feeResult, setFeeResult] = React.useState(0);
  const [costResult, setCostResult] = React.useState(0);
  const [selectedValue, setSelectedValue] = useState("java");

  const calcFee = () => {
    const feeResult = Number(sales) * 0.01;
    setFeeResult(feeResult);
  }

  const calcCost = () => {
    const costResult = Number(sales) + Number(ad) + Number(feeResult);
    setCostResult(costResult);
  }

  const calcResult = () => {
    calcFee();
    calcCost();
  }


  


  return (
    <KeyboardAwareScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <View>
            <Text style={styles.titleInput}>EC家計簿</Text>
          </View>

          <Text style={styles.boxname}>モール</Text>

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
            <TextInput style={styles.textBox} placeholder="選択してください" />

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
            <Text style={styles.boxname}>手数料</Text>
            <Text style={styles.textBox}>{feeResult}</Text>
            <Text style={styles.boxname}>コスト合計</Text>
            <Text style={styles.textBox}>{costResult}</Text>

            <View style={styles.button}>
              <Button title="計算" onPress={calcResult} />
            </View>

            <StatusBar style="auto" />
          </View>
        </View>
      </SafeAreaView>
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
  box: {
    height: "100%",
  },
  titleInput: {
    fontSize: 40,
    width: width * 0.4,
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
  button: {
    alignItems: "center",
    position: "absolute",
    right: 10,
    bottom: 1,
    backgroundColor: "#c0c0ff",
    width: 100,
    borderWidth: 2,
    borderRadius: 15,
    padding: 5,
  },
  buttonText: {
    fontSize: 20,
  },
  radioText: {
    fontSize: 20,
  },
  selectBox: {
    borderWidth: 2,
    fontSize: 20,
    width: 250,
    height: 50,
  },
  triangle: {
    position: "absolute",
    right: 35,
    top: 1,
    fontSize: 20,
    color: "#789",
  }
});
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 20,
        justifyContent: "center",
    }
  });
