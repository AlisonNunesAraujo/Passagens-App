import { StyleSheet } from "react-native";
import InfoAirport from "../components/infoAirport";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  areaImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Roboto",
  },
  subtitle: {
    fontSize: 16,
    color: "white",
    fontFamily: "Roboto",
  },
  areaPassagens: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
  infoName: {
    width: "100%",
    padding: 10,
    marginTop: 20,
    gap: 10,
  },
  titleInfo: {
    fontSize: 14,
    color: "#000",
    fontFamily: "Roboto",
  },
  infoText: {
    fontSize: 25,
    color: "#000",
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  infoDate: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    padding: 10,
    gap: 10,
  },
  infoVoo: {
    fontSize: 14,
    color: "#000",
    fontFamily: "Roboto",
  },
  infoHour: {
    fontSize: 15,
    color: "#000",
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20,
  },
  infoAirport: {
    alignItems: "center",
  },
});
