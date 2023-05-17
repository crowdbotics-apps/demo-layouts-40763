import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled17 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
    <ScrollView >
      <Pressable onPress={() => {
        navigation.navigate("fiveRows");
      }}>
        <View style={styles.container}>
          <Text style={styles.text}>{"Five Rows"}</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => {
        navigation.navigate("fourColumns");
      }}>
        <View style={styles.container}>
          <Text style={styles.text}>{"Four Columns"}</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => {
        navigation.navigate("fourRows");
      }}>
        <View style={styles.container}>
          <Text style={styles.text}>{"Four Rows"}</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => {
        navigation.navigate("largeGrid");
      }}>
        <View style={styles.container}>
          <Text style={styles.text}>{"Large Grid"}</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => {
        navigation.navigate("largeGrid1");
      }}>
        <View style={styles.container}>
          <Text style={styles.text}>{"Extra Large Grid"}</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => {
        navigation.navigate("manyRows");
      }}>
        <View style={styles.container}>
          <Text style={styles.text}>{"Many Rows"}</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => {
        navigation.navigate("mosaic1");
      }}>
        <View style={styles.container}>
        <Text style={styles.text}>{"Single Column Grid"}</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => {
        navigation.navigate("mosaic2");
      }}>
        <View style={styles.container}>
          <Text style={styles.text}>{"Two Column Grid"}</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => {
        navigation.navigate("smallGrid");
      }}>
        <View style={styles.container}>
          <Text style={styles.text}>{"Flex Gird"}</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => {
        navigation.navigate("mosaic4");
      }}>
        <View style={styles.container}>
          <Text style={styles.text}>{"Grid (3 * 1)"}</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => {
        navigation.navigate("mosaic5");
      }}>
        <View style={styles.container}>
          <Text style={styles.text}>{"Grid (3 * 2)"}</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => {
        navigation.navigate("mosaic6");
      }}><View style={styles.container}>
          <Text style={styles.text}>{"Stretch Grid"}</Text>
        </View></Pressable>
      <Pressable onPress={() => {
        navigation.navigate("smallGrid");
      }}><View style={styles.container}>
          <Text style={styles.text}>{"Small Grid (8 * 4)"}</Text>
        </View></Pressable>
    </ScrollView>
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%",
    padding: 10
  },
  container: {
    height: 60,
    width: "100%",
    backgroundColor: "lightblue",
    display: "flex",
    justifyContent: "center",
    marginBottom: 10,
    borderRadius: 2
  },
  text: {
    textAlign: "left",
    padding: 10
  }
});
export default Untitled17;