import { ScrollView, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";


export default function Index() {
    const data = [{ key: 1, message: "h" }];
    const insets = useSafeAreaInsets();
    console.log(data)
    return (
        <ScrollView
            style={[styles.scrollview, { paddingTop: insets.top }]}
            contentContainerStyle={{
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>1</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollview: {
        flex: 1,
    },
    text: {
        color: "white",
        fontSize: 20
    }
});
