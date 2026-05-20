import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";


export default function Index() {
    const [link, setLink] = useState("http://awesome.link.qr");
    return (
        <ScrollView
            style={styles.scrollview}
            contentContainerStyle={{
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <View style={styles.view}>
                <QRCode size={200} value={link} />
                <Text>Hello</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollview: {
        flex: 1
    },
    view: {
        flex: 1,
        color: "red"
    }
});
