import { ScrollView, StyleSheet, Text } from "react-native";


export default function Index() {
    const data = [{ key: 1, message: "h" }];
    return (
        <ScrollView
            style={styles.scrollview}
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
