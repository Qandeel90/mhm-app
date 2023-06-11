import { StyleSheet } from "react-native";
import Color from "../../../common/Color";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  innerContainer: {
    alignItems: "center",
    flex: 1,
  },
  picContainer: {
    backgroundColor: Color.green,
    width: "100%",
    paddingTop: "15%",
    paddingBottom: "5%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  pic: {
    width: 150,
    aspectRatio: 1 / 1,
    borderRadius: 100,
    borderColor: Color.white,
    borderWidth: 2,
  },
  info: {
    width: "90%",
    paddingVertical: 20,
    borderBottomColor: "lightgray",
    borderBottomWidth: 0.5,
  },
  lable: { color: "gray" },
  txt: { color: Color.green, fontSize: 20, fontWeight: 500 },
  logout: {
    backgroundColor: Color.black,
    paddingVertical: 10,
    width: "90%",
    borderRadius: 100,
    position: "absolute",
    bottom: 15,
    alignItems: "center",
  },
  logoutTxt: { color: Color.white },
});
