import { StyleSheet } from "react-native";
import Color from "../../../common/Color";
export default StyleSheet.create({
  container: { flex: 1, backgroundColor: Color.white },
  Header: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  text: { fontSize: 25, fontWeight: "bold", color: Color.green },
  clearBtn: {
    backgroundColor: "red",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  BtnTxt: {
    color: "white",
  },
  sendButton: {
    backgroundColor: Color.black,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    paddingHorizontal: 10,
  },
  sendButtonText: { color: Color.white },
});
