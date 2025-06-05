import { View, Text } from "react-native";
import { s } from "./style";
export default function InfoAirport({ title, code }: { title: string, code: string }) {
    return (
        <View>
            <View style={{ alignItems: "center" }}>
                <Text style={s.title}>{title}</Text>
                <Text style={s.code}>{code}</Text>
            </View>
        </View>
    );
}
