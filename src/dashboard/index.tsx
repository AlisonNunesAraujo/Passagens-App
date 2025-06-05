import { View, Text, ImageBackground } from "react-native";
import "./style";
import { s } from "./style";
// @ts-ignore
import predios from "../assets/predios.webp";
import Details from "../components/details";
import QrCode from "react-native-qrcode-svg";
import InfoAirport from "../components/infoAirport";
export default function Dashboard() {
    return (
        <View style={s.container}>
            <View style={s.areaImage}>
                <ImageBackground
                    source={predios}
                    style={s.image}
                >
                    <Text style={s.title}>Cartão de embarque</Text>
                    <Text style={s.subtitle}>Faltam 5 dias para sua viagem</Text>
                </ImageBackground>
            </View>

            <View style={s.areaPassagens}>
                <Details />
                <View style={s.infoName}>
                    <Text style={s.titleInfo}>Passageiro</Text>
                    <Text style={s.infoText}>Alison Araújo</Text>
                </View>
                <View style={s.infoDate}>
                    <View>
                        <Text style={s.infoVoo}>Data</Text>
                        <Text style={s.infoHour}>10/06/2025</Text>
                    </View>
                    <View>
                        <Text style={s.infoVoo}>Embarque</Text>
                        <Text style={s.infoHour}>10:00</Text>
                    </View>
                </View>

                <View style={s.footer}>
                    <View style={s.infoAirport}>
                        <InfoAirport title='Voo' code='VB 791' />
                        <InfoAirport title='Assento' code='29G' />
                    </View>
                    <View>
                        <InfoAirport title='Portão' code='5' />
                        <InfoAirport title='Terminal' code='8' />
                    </View>


                    <View>
                        <QrCode
                            size={190}
                        />
                    </View>

                </View>
            </View>
        </View>
    );
}
