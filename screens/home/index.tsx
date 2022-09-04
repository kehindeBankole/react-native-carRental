import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { s, vs, ms, mvs } from "react-native-size-matters";
import { RootStackScreenProps } from "../../types";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";

export default function Home({
  navigation,
}: {
  navigation: RootStackScreenProps<"Home"> | any;
}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <AntDesign name="infocirlceo" size={24} color="black" />
              <Text style={styles.text}>Information</Text>
            </View>
            <View style={styles.headerContent}>
              <Ionicons name="notifications-outline" size={24} color="black" />
              <Text style={styles.text}>Notification</Text>
            </View>
          </View>
          <View style={styles.carBox}>
            <Text style={styles.nearest}>nearest car</Text>
            <Image
              source={require("../../assets/images/jeep.png")}
              resizeMode="contain"
              style={{ marginTop: vs(10) }}
            />
            <Text style={styles.carName}>Fortuner GR</Text>
            <View style={styles.carInfo}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={styles.headerContent}>
                  <Ionicons
                    name="md-arrow-redo-circle-outline"
                    size={12}
                    color={Colors.colors.light}
                  />
                  <Text style={styles.distance}>Information</Text>
                </View>
                <View style={[styles.headerContent, { marginLeft: ms(10) }]}>
                  <MaterialCommunityIcons
                    name="fuel"
                    size={12}
                    color={Colors.colors.light}
                  />

                  <Text style={styles.distance}>50L</Text>
                </View>
              </View>
              <Text style={styles.price}>$ 45,00/h</Text>
            </View>
          </View>
          <View style={styles.usermaparea}>
            <View style={styles.box}>
              <Image
                source={require("../../assets/images/person.png")}
                resizeMode="contain"
                style={{ marginTop: vs(10) }}
              />
              <Text style={styles.carName}>Fortuner GR</Text>
              <Text style={styles.price}>$ 4,253</Text>
            </View>
            <View style={[styles.box, { padding: 0 }]}>
              <MapView
                style={styles.map}
                initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              >
                <Marker
                  coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                  pinColor="red"
                />
              </MapView>
            </View>
          </View>
          <View style={styles.morecars}>
            <View style={styles.info}>
              <Text style={[styles.distance, { color: "#D4D4D4" }]}>
                More Cars
              </Text>
              <Entypo name="dots-three-horizontal" size={24} color="#D4D4D4" />
            </View>
            <View style={[styles.info, { marginTop: mvs(20) }]}>
              <View>
                <Text style={styles.carTitle}>Corolla Cross</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: mvs(5),
                  }}
                >
                  <View style={styles.headerContent}>
                    <Ionicons
                      name="md-arrow-redo-circle-outline"
                      size={12}
                      color="#D4D4D4"
                    />
                    <Text style={[styles.distance, { color: "#D4D4D4" }]}>
                      {" "}
                      {">"} 4km
                    </Text>
                  </View>
                  <View style={[styles.headerContent, { marginLeft: ms(10) }]}>
                    <MaterialCommunityIcons
                      name="fuel"
                      size={12}
                      color="#D4D4D4"
                    />

                    <Text style={[styles.distance, { color: "#D4D4D4" }]}>
                      50L
                    </Text>
                  </View>
                </View>
              </View>
              <Pressable
                style={styles.action}
                onPress={() => navigation.navigate("Home")}
              >
                <AntDesign name="arrowright" size={20} color="black" />
              </Pressable>
            </View>

            <View
              style={{
                borderBottomColor: "#4B4B4B",
                borderBottomWidth: 1,
                width: "100%",
                marginTop:18
              }}
            />

            <View style={[styles.info, { marginTop: mvs(20) }]}>
              <View>
                <Text style={styles.carTitle}>Corolla Cross</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: mvs(5),
                  }}
                >
                  <View style={styles.headerContent}>
                    <Ionicons
                      name="md-arrow-redo-circle-outline"
                      size={12}
                      color="#D4D4D4"
                    />
                    <Text style={[styles.distance, { color: "#D4D4D4" }]}>
                      {" "}
                      {">"} 4km
                    </Text>
                  </View>
                  <View style={[styles.headerContent, { marginLeft: ms(10) }]}>
                    <MaterialCommunityIcons
                      name="fuel"
                      size={12}
                      color="#D4D4D4"
                    />

                    <Text style={[styles.distance, { color: "#D4D4D4" }]}>
                      50L
                    </Text>
                  </View>
                </View>
              </View>
              <Pressable
                style={styles.action}
                onPress={() => navigation.navigate("Home")}
              >
                <AntDesign name="arrowright" size={20} color="black" />
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.colors.white,
  },
  content: {
    paddingHorizontal: ms(28),
    paddingTop: mvs(20),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerContent: {
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    marginLeft: 10,
  },
  carBox: {
    backgroundColor: Colors.colors.dimWhite,
    borderRadius: ms(20),
    width: "100%",
    padding: ms(18),
    marginTop: vs(15),
  },
  nearest: {
    textTransform: "uppercase",
    color: Colors.colors.light,
  },
  carName: {
    fontSize: ms(20),
    fontFamily: "Barlow_600SemiBold",
  },
  carInfo: {
    flexDirection: "row",
    marginTop: vs(8),
    justifyContent: "space-between",
  },
  distance: {
    color: Colors.colors.light,
    fontSize: ms(12),
    marginLeft: ms(3),
  },
  price: {
    fontSize: ms(14),
    fontFamily: "Barlow_600SemiBold",
  },
  usermaparea: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box: {
    backgroundColor: Colors.colors.dimWhite,
    borderRadius: ms(20),
    width: "48%",
    padding: ms(18),
    marginTop: vs(15),
    alignItems: "center",
  },
  map: {
    width: "100%",
    flex: 1,
    borderRadius: ms(20),
  },
  morecars: {
    backgroundColor: Colors.colors.darkBg,
    width: "100%",
    marginTop: mvs(20),

    borderRadius: ms(20),
    padding: ms(20),
  },
  info: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  carTitle: {
    fontSize: 20,
    fontFamily: "Barlow_700Bold",
    color: Colors.colors.white,
  },
  action: {
    backgroundColor: Colors.colors.white,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
  },
});
