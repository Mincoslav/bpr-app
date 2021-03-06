import { StyleSheet, Dimensions } from "react-native";
import { white } from "react-native-paper/lib/typescript/styles/colors";

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;

export const mainGradient = ["rgba(52, 170, 252, 1)", "rgba(118, 10, 202, 1)"];

const buttonTextColor = "#FFFFFF";

export const styles = StyleSheet.create({
	buttonText: {
		fontFamily: "roboto_400",
		color: buttonTextColor,
		fontSize: 20
	},
	buttonContainer: {
		justifyContent: "center", //Centered horizontally
		alignItems: "center", //Centered vertically
		flex: 1,
		flexDirection: "row",
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(52, 170, 252, 1)"
	},
	background: {
		flex: 1,
		height: windowHeight,
		width: windowWidth,
	},
	inputsContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	inputField: {
		borderColor: "transparent",
		width: 300,
		height: 50,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		backgroundColor: "#FFFF",
		// opacity: 0.8,
		borderRadius: 20,
		alignItems: "center",
		flexDirection: "row"
	},
	inputFieldText: {
		paddingLeft: 14,
		width: 300
	},
	icon: {
		color: "#34AAFC"
	},
	googleButton: {
		borderColor: "transparent",
		width: 300,
		height: 50,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		backgroundColor: "transparent",
		// opacity: 0.8,
		borderRadius: 20,
		alignItems: "center",
		flexDirection: "row"
	},
	map: {
		width: windowWidth*0.97,
		height: 0.65*windowHeight,
	},
	nearsetResponder: {
		width: 300,
		height: 0.1*windowHeight,
		borderRadius: 20,
		backgroundColor: "#FFFFFF",
		alignItems: "center",
		padding: 0.05*windowWidth,
		marginTop: 0.02*windowHeight,
		
	},
	dangerStatus: {
		alignItems: "center",
		textAlign: "center",
		padding: 0.05*windowWidth,
		borderRadius: 20,
	},
	dangerText:{
		margin:0.03*windowWidth
	}
});

export const registerPageStyles = StyleSheet.create({
	registerButton: {
		margin: 20,
		padding: 5,
		alignItems: "center",
		textAlign: "center",
		borderRadius: 70,
		backgroundColor: "#34BEF6",
		position: "absolute",
		width: 300,
		height: 54,
		bottom: 100
	},
	globeImage: {
		margin: 0,
		position: "absolute",
		top: "45%"
	},
	loginButton: {
		fontFamily: "roboto_400",
		color: "black",
		padding: 5,
		alignItems: "center",
		borderRadius: 70,
		borderColor: buttonTextColor,
		borderWidth: 1,
		// backgroundColor: "white",
		position: "absolute",
		width: 300,
		height: 54,
		bottom: 50
	},
	introText: {
		fontFamily: "roboto_400",
		margin: 0,
		position: "absolute",
		top: "10%",
		color: buttonTextColor,
		textAlign: "left",
		paddingRight: 100,
		paddingLeft: 20,
		fontSize: 30
	},
	googleRegisterButton: {
		margin: 20,
		padding: 5,
		alignItems: "center",
		textAlign: "center",
		borderRadius: 70,
		backgroundColor: "white",
		position: "absolute",
		width: 300,
		height: 54,
		bottom: 500
	}
});
