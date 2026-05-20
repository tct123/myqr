import { ScrollView, StyleSheet, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
export default function Index() {
    return (
        <ScrollView
            style={styles.scrollview}
            contentContainerStyle={{
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <View>
                <QRCode value="http://awesome.link.qr" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollview: {
        flex: 1,
    },
});
