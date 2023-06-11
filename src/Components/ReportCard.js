import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { LineChart } from "react-native-chart-kit";
import { demoData } from "../../assets/data/demoData";
import Color from "../../common/Color";

const ReportCard = ({ title, icon, data }) => {
  return (
    <View style={styles.chartContainer}>
      {data && (
        <View style={styles.chart}>
          <View style={styles.chartHeader}>
            <Image source={icon} style={styles.pngImg}></Image>
            <Text
              style={{
                color: "white",

                fontWeight: "bold",
                fontSize: 17,
              }}
            >
              {title}
            </Text>
            <Text
              style={{
                color: "white",
                marginLeft: "auto",
                paddingRight: 20,
              }}
            >
              index: 0.23
            </Text>
          </View>

          <LineChart
            data={{
              labels: data.map((data) => (data.time ? data?.time : data?.day)),
              datasets: [
                {
                  data: data.map((data) => data?.value),
                },
              ],
            }}
            width={Dimensions.get("window").width * 0.9}
            height={180}
            yAxisLabel=""
            yAxisInterval={1}
            chartConfig={{
              backgroundColor: Color.black,
              backgroundGradientFrom: Color.black,
              backgroundGradientTo: Color.black,
              decimalPlaces: 0,

              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: Color.green,
              },
            }}
            bezier
            style={{
              borderRadius: 16,
              paddingVertical: 10,
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    paddingtop: 20,
    marginVertical: 8,
    alignSelf: "center",
  },
  chart: {
    backgroundColor: Color.black,
    borderRadius: 16,
    paddingBottom: 5,
    paddingTop: 10,
  },
  pngImg: {
    width: 20,
    height: 20,
    tintColor: "white",

    marginRight: 10,
  },
  chartHeader: {
    flexDirection: "row",

    alignItems: "center",
    paddingLeft: 45,
    paddingTop: 5,
    paddingBottom: 10,
  },
});

export default ReportCard;
