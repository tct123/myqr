import { Button, Host, ScrollView, TextInput, TextInputRef } from "@expo/ui";
import { useRef, useState } from "react";
import { StyleSheet } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
    const insets = useSafeAreaInsets();
    const [link, setLink] = useState<string>("http://awesome.link.qr");
    
    const inputRef = useRef<TextInputRef>(null);

    function changelink(value: string) {
        setLink(value)
    }
    return (
        <Host style={{ flex: 1 }}>
            <ScrollView
                style={{ paddingTop: insets.top }}
            //contentContainerStyle={{
            //    alignItems: "center",
            //    justifyContent: "center",
            //}}
            >
                <QRCode
                    size={200}
                    value={link ? link : "http://awesome.link.qr"}
                />
                <TextInput
                ref={inputRef}
                    //style={styles.input}
                    style={{
                        height: 40,
                        borderWidth: 1,
                        padding: 10,
                        width: "90%"
                    }}
                    defaultValue="http://awesome.link.qr"
                    placeholder="URL"
                    onChangeText={value => changelink(value)}
                    inputMode="text"
                />
                <Button label="Export" />
            </ScrollView>
        </Host>
    );//styles.view for host 2
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
