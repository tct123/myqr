import { Button } from "@expo/ui";
import { useState } from "react";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
    const insets = useSafeAreaInsets();
    const [link, setLink] = useState<string>("http://awesome.link.qr");
    function changelink(value: string) {
        setLink(value)
    }
    return (
        <ScrollView
            style={[styles.scrollview, { paddingTop: insets.top }]}
            contentContainerStyle={{
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <View style={styles.view}>
                <QRCode
                    size={200}
                    value={link ? link : "http://awesome.link.qr"}
                />
                <TextInput
                    style={styles.input}
                    value={link}
                    placeholder="URL"
                    onChangeText={changelink}
                    inputMode="text"
                />
                <Button label="Export" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollview: {
        flex: 1,
        alignContent: "center",
    },
    view: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width: "100%"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: "90%"

    }
});
