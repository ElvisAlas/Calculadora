import { Text, TouchableOpacity } from "react-native";
import { styles } from "../Estilos/botones";

export default ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.Botones];
  const textStyles = [styles.text];

  if (size === "double") {
    buttonStyles.push(styles.BotonesGeneral);
  }

  if (theme === "secondary") {
    buttonStyles.push(styles.BotonesSecundarios);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.OperadoresButton);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};


// const screen = Dimensions.get("window");
// const buttonWidth = screen.width / 4;

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: "#333333",
//     flex: 1,
//     height: Math.floor(buttonWidth - 10),
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: Math.floor(buttonWidth),
//     margin: 5,
//   },
//   text: {
//     color: "#fff",
//     fontSize: 24,
//   },
//   textSecondary: {
//     color: "#060606",
//   },
//   buttonDouble: {
//     width: screen.width / 2 - 10,
//     flex: 0,
//     alignItems: "flex-start",
//     paddingLeft: 40,
//   },
//   buttonSecondary: {
//     backgroundColor: "#a6a6a6",
//   },
//   buttonAccent: {
//     backgroundColor: "#ffc107",
//   },
// });