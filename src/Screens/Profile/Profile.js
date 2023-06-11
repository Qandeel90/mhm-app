import { View, Text, Image } from "react-native";
import React from "react";

import Styles from "./Styles";
import { TouchableOpacity } from "react-native";
import Color from "../../../common/Color";
const Profile = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.innerContainer}>
        <View style={Styles.picContainer}>
          <Image
            source={{
              uri: "https://cdn1.vectorstock.com/i/1000x1000/41/95/face-head-portrait-designer-man-in-eye-glasses-vector-46644195.jpg",
            }}
            style={Styles.pic}
          />
          <View style={{ paddingVertical: 10 }}>
            <Text style={{ color: Color.white, fontSize: 20, fontWeight: 500 }}>
              User
            </Text>
          </View>
        </View>
        <View style={Styles.info}>
          <Text style={Styles.lable}>Username</Text>
          <Text style={Styles.txt}>User123</Text>
        </View>
        <View style={Styles.info}>
          <Text style={Styles.lable}>Email</Text>
          <Text style={Styles.txt}>user123@email.com</Text>
        </View>
        <View style={Styles.info}>
          <Text style={Styles.lable}>Phone no</Text>
          <Text style={Styles.txt}>03121212325</Text>
        </View>
        <TouchableOpacity style={Styles.logout}>
          <Text style={Styles.logoutTxt}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
