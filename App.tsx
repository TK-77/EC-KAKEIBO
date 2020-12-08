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
  StatusBar as RNStatusBar,
  Dimensions,
  KeyboardAvoidingView,
  Picker,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


const { width } = Dimensions.get("screen");

const containerPaddingTop =
  Platform.OS === "ios" ? 0 : RNStatusBar.currentHeight;

const state = {area: 2,};

export default function App() {
  return (
    <KeyboardAwareScrollView>
      {/* <KeyboardAvoidingView
        keyboardVerticalOffset={90}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.keyboardAvoidingView}
      > */}
      <SafeAreaView style={styles.container}>
        <View>
          <Picker
            style={styles.picker}
            itemStyle={styles.pickerItem}
            selectedValue={state.area}
            onValueChange={(value) => useState({ area: value })
          }
          >
            <Picker.Item label="楽天市場" value={1} />
            <Picker.Item label="Amazon" value={2} />
            <Picker.Item label="Yahoo!" value={3} />
          </Picker>
        </View>

        <View>
          <Text style={styles.titleInput}>EC家計簿</Text>
        </View>
        <View>
          <Text style={styles.boxname}>モール</Text>
          <TouchableOpacity style={styles.textbox}></TouchableOpacity>

          {/* <TextInput style={styles.textbox} placeholder="選択してください" /> */}
          <Text style={styles.boxname}>出店プラン</Text>
          <TextInput style={styles.textbox} placeholder="選択してください" />
          <Text style={styles.boxname}>当月売上</Text>
          <TextInput
            style={styles.textbox}
            placeholder="入力してください"
            keyboardType="numeric"
          />
          <Text style={styles.boxname}>広告費</Text>
          <TextInput
            style={styles.textbox}
            placeholder="入力してください"
            // text-align="right"
            keyboardType="numeric"
          />
          <Text style={styles.boxname}>手数料</Text>
          <Text style={styles.textbox}>計算結果</Text>
          <Text style={styles.boxname}>コスト合計</Text>
          <Text style={styles.textbox}>計算結果</Text>

          <View style={styles.button}>
            <TouchableOpacity>
              <Text style={styles.buttonText}>計算</Text>
            </TouchableOpacity>
          </View>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
      {/* </KeyboardAvoidingView> */}
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    width: "100%",
  },
  container: {
    flex: 1,
    paddingTop: containerPaddingTop,
    backgroundColor: "#afafaf",
    alignItems: "center",
    justifyContent: "center",
  },
  titleInput: {
    fontSize: 40,
    width: width * 0.4,
  },
  boxname: {
    fontSize: 20,
    padding: 3,
  },
  textbox: {
    backgroundColor: "#fff",
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
    bottom: -60,
    backgroundColor: "#c0c0ff",
    width: 100,
    borderWidth: 2,
    borderRadius: 15,
    padding: 5,
  },
  buttonText: {
    fontSize: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  picker: {
    width: 200,
    backgroundColor: "#FFF",
  },
  pickerItem: {
    color: "blue",
  },
});
