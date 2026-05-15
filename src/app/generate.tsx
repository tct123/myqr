import { ScrollView, StyleSheet, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
export default function Index() {
    return (
        <ScrollView
            style={styles.container}
        >
            <View>
                <QRCode value="http://awesome.link.qr" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
