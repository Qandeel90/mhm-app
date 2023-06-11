import { StyleSheet } from "react-native";
import Color from "../../../common/Color";
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Color.white,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userText: {},
  bigText: { fontSize: 33, fontWeight: "bold", color: Color.green },
  smallText: { color: Color.grey },
  userProfile: {
    borderColor: Color.green,
    borderRadius: 100,
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
  },
  pic: { width: "100%", aspectRatio: 1 / 1, borderRadius: 100 },
  report: {
    marginTop: 20,
  },
  labelBtns: {
    flexDirection: "row",

    justifyContent: "center",
    marginVertical: 10,
  },
});
