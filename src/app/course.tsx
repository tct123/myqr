import { Host, ScrollView, Text } from "@expo/ui";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
    const data = [{ key: 1, message: "h" }];
    const insets = useSafeAreaInsets();
    console.log(data)
    return (
        <Host style={{ flex: 1 }}>
            <ScrollView
                //style={[styles.scrollview, { paddingTop: insets.top }]}
                style={{ paddingTop: insets.top }}
            >
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
                <Text textStyle={styles.text}>1</Text>
            </ScrollView>
        </Host>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "white",
        fontSize: 20
    }
});
