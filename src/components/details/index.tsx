import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { s } from './style';

export default function Details() {
    return (
        <View style={s.container}>
            <View>
                <Text style={s.nameCity}>São Paulo</Text>
                <Text style={s.airportCity}>GRU</Text>
            </View>
            <View style={s.groupIcon}>
                <Ionicons name="airplane" size={24} color="black" />
                <Text style={s.hours}>10:00 horas</Text>
            </View>
            <View>
                <Text style={s.nameCity}>New York</Text>
                <Text style={s.airportCity}>JFK</Text>
            </View>
        </View>

    );
}