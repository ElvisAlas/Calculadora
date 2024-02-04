import { Dimensions ,StyleSheet }from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

export const styles = StyleSheet.create({
  Botones: {
    backgroundColor: "#333333",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  text: {
    color: "#fff",
    fontSize: 24,
  },
  textSecondary: {
    color: "#060606",
  },
  BotonesGeneral: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40,
  },
  BotonesSecundarios: {
    backgroundColor: "#a6a6a6",
  },
  OperadoresButton: {
    backgroundColor: "#ffc107",
  },

});