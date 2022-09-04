import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { s, vs, ms, mvs } from "react-native-size-matters";
import { RootStackScreenProps } from "../../types";

export default function Onboarding({
  navigation,
}: {
  navigation: RootStackScreenProps<"Onboarding"> | any;
}) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={require("../../assets/images/car.png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Premium cars.</Text>
        <Text style={styles.title}>Enjoy the luxury.</Text>
        <Text style={styles.subtitle}>
          Premium and prestige car daily rental. Experience the thrill at a
          lower price
        </Text>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "red" : Colors.colors.white,
            },
            styles.action,
          ]}
          onPress={() =>navigation.navigate("Home")}
        >
          <Text style={styles.actionTitle}>Let's Go</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.colors.darkBg,
  },
  content: {
    paddingHorizontal: ms(29),
    marginTop: -60,
  },
  title: {
    fontSize: ms(35),
    color: Colors.colors.white,
    fontFamily: "Barlow_700Bold",
  },
  subtitle: {
    marginTop: vs(10),
    color: Colors.colors.grey,
    fontFamily: "Barlow_400Regular",
  },
  action: {
    backgroundColor: Colors.colors.white,
    width: "100%",
    height: vs(54),
    justifyContent: "center",
    alignItems: "center",
    marginTop: vs(15),
    borderRadius: ms(50),
  },
  actionTitle: {
    fontSize: ms(20),
    color: Colors.colors.darkBg,
    fontFamily: "Barlow_700Bold",
  },
});
