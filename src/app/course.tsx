import { ScrollView, StyleSheet } from "react-native";


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

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollview: {
        flex: 1,
    },
});
