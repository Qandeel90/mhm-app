import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import Styles from "./Styles";
import ReportCard from "../../Components/ReportCard";
import demoData from "../../../assets/data/demoData";
import Icon from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import Color from "../../../common/Color";
const Home = () => {
  const [activeLabel, setActiveLabel] = useState("day");
  const navigation = useNavigation();
  const handleDemoData = useCallback(() => {
    if (activeLabel === "hours") {
      return demoData.hours;
    } else if (activeLabel === "week") {
      return demoData.week;
    } else {
      return demoData.day;
    }
  }, [activeLabel]);

  const data = useMemo(() => handleDemoData(), [handleDemoData]);

  useEffect(() => {
    handleDemoData();
  }, [activeLabel, handleDemoData]);

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.header}>
        <View style={Styles.userText}>
          <Text style={Styles.bigText}>Hello, User</Text>
          <Text style={Styles.smallText}>Let's check how you feel today</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
          style={Styles.userProfile}
        >
          <Image
            source={{
              uri: "https://cdn1.vectorstock.com/i/1000x1000/41/95/face-head-portrait-designer-man-in-eye-glasses-vector-46644195.jpg",
            }}
            style={Styles.pic}
          />
        </TouchableOpacity>
      </View>
      <View style={Styles.report}>
        <Text style={{ fontSize: 17, fontWeight: "500", marginBottom: 10 }}>
          Your's Report
        </Text>
        <View style={Styles.labelBtns}>
          <TouchableOpacity
            style={[
              btnLabelStyle.labelBtnLeft,
              {
                backgroundColor:
                  activeLabel === "hours" ? Color.green : Color.black,
              },
            ]}
            onPress={() => setActiveLabel("hours")}
          >
            <Text style={{ color: "white" }}>Hours</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              btnLabelStyle.labelBtnCenter,
              {
                backgroundColor:
                  activeLabel === "day" ? Color.green : Color.black,
              },
            ]}
            onPress={() => setActiveLabel("day")}
          >
            <Text style={{ color: "white" }}>Days</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              btnLabelStyle.labelBtnRight,
              {
                backgroundColor:
                  activeLabel === "week" ? Color.green : Color.black,
              },
            ]}
            onPress={() => setActiveLabel("week")}
          >
            <Text style={{ color: "white" }}>Weeks</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <ReportCard
            title={"Depression"}
            icon={require("../../../assets/data/depression.png")}
            data={data}
          />
          <ReportCard
            title={"Stress"}
            icon={require("../../../assets/data/fatigue.png")}
            data={data}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const btnLabelStyle = StyleSheet.create({
  labelBtnLeft: {
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  labelBtnRight: {
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  labelBtnCenter: {
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Home;
