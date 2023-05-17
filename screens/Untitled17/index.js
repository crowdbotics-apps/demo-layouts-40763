import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled17 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <Pressable onPress={() => {
        navigation.navigate("fiveRows");
      }}>
          <View style={styles.GrUxYZPR}>
            <Text style={styles.qvUZqSfd}>{"Five Rows"}</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => {
        navigation.navigate("fourColumns");
      }}>
          <View style={styles.NDSNeIDe}>
            <Text style={styles.VEmjizrw}>{"Four Columns"}</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => {
        navigation.navigate("fourRows");
      }}>
          <View style={styles.BWdDlMul}>
            <Text style={styles.txNgjuXz}>{"Four Rows"}</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => {
        navigation.navigate("largeGrid");
      }}>
          <View style={styles.NrwHabIZ}>
            <Text style={styles.KMsSrZiH}>{"Large Grid"}</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => {
        navigation.navigate("largeGrid1");
      }}>
          <View style={styles.XhPJgYHt}>
            <Text style={styles.shBGsztB}>{"Extra Large Grid"}</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => {
        navigation.navigate("manyRows");
      }}>
          <View style={styles.PtktdzOD}>
            <Text style={styles.OJBDlJBZ}>{"Many Rows"}</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => {
        navigation.navigate("mosaic1");
      }}>
          <View style={styles.JtIYEdEW}>
            <Pressable>
              <Text style={styles.WABeQrrS}>{"Single Column Grid"}</Text>
            </Pressable>
          </View>
        </Pressable>
        <Pressable onPress={() => {
        navigation.navigate("mosaic2");
      }}>
          <View style={styles.SdqRDqWp}>
            <Text style={styles.DBsMKRRO}>{"Two Column Grid"}</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => {
        navigation.navigate("smallGrid");
      }}>
          <View style={styles.CMedVtGB}>
            <Text style={styles.qnzYwhjt}>{"Flex Gird"}</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => {
        navigation.navigate("mosaic4");
      }}>
          <View style={styles.CMedVtGB}>
            <Text style={styles.qnzYwhjt}>{"Grid (3 * 1)"}</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => {
        navigation.navigate("mosaic5");
      }}>
          <View style={styles.CMedVtGB}>
            <Text style={styles.qnzYwhjt}>{"Grid (3 * 2)"}</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => {
        navigation.navigate("mosaic6");
      }}><View style={styles.CMedVtGB}>
          <Text style={styles.qnzYwhjt}>{"Stretch Grid"}</Text>
        </View></Pressable>
        <Pressable onPress={() => {
        navigation.navigate("smallGrid");
      }}><View style={styles.CMedVtGB}>
          <Text style={styles.qnzYwhjt}>{"Small Grid (8 * 4)"}</Text>
        </View></Pressable>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  GrUxYZPR: {
    height: 60,
    width: "100%",
    backgroundColor: "#E4E4E4",
    display: "flex",
    justifyContent: "center"
  },
  qvUZqSfd: {
    textAlign: "center"
  },
  NDSNeIDe: {
    height: 60,
    width: "100%",
    backgroundColor: "#E4E4E4",
    display: "flex",
    justifyContent: "center"
  },
  VEmjizrw: {
    textAlign: "center"
  },
  BWdDlMul: {
    height: 60,
    width: "100%",
    backgroundColor: "#E4E4E4",
    display: "flex",
    justifyContent: "center"
  },
  txNgjuXz: {
    textAlign: "center"
  },
  NrwHabIZ: {
    height: 60,
    width: "100%",
    backgroundColor: "#E4E4E4",
    display: "flex",
    justifyContent: "center"
  },
  KMsSrZiH: {
    textAlign: "center"
  },
  XhPJgYHt: {
    height: 60,
    width: "100%",
    backgroundColor: "#E4E4E4",
    display: "flex",
    justifyContent: "center"
  },
  shBGsztB: {
    textAlign: "center"
  },
  PtktdzOD: {
    height: 60,
    width: "100%",
    backgroundColor: "#E4E4E4",
    display: "flex",
    justifyContent: "center"
  },
  OJBDlJBZ: {
    textAlign: "center"
  },
  JtIYEdEW: {
    height: 78,
    width: 328,
    backgroundColor: "#E4E4E4",
    display: "flex",
    justifyContent: "center"
  },
  WABeQrrS: {
    textAlign: "center"
  },
  SdqRDqWp: {
    height: 60,
    width: "100%",
    backgroundColor: "#E4E4E4",
    display: "flex",
    justifyContent: "center"
  },
  DBsMKRRO: {
    textAlign: "center"
  },
  CMedVtGB: {
    height: 60,
    width: "100%",
    backgroundColor: "#E4E4E4",
    display: "flex",
    justifyContent: "center"
  },
  qnzYwhjt: {
    textAlign: "center"
  }
});
export default Untitled17;