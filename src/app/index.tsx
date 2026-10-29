import { Host } from "@expo/ui";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as Haptics from 'expo-haptics';
import * as Linking from 'expo-linking';
import { useTheme } from "expo-router";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text } from "react-native";

export default function Index() {
  const theme = useTheme();
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState<boolean>(false)
  if (!permission) {
    // Camera permissions are still loading.
    return <Host />;
  }
  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <Host style={styles.container}>
        <Text style={[styles.message, { color: theme.colors.text }]}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant permission" />
      </Host>
    );
  }

  return (
    <CameraView
      style={styles.container}
      barcodeScannerSettings={{
        barcodeTypes: ["qr"]
      }}
      onBarcodeScanned={
        (data) => {
          if (!scanned) {
            Haptics.impactAsync();
            setScanned(true);
            Alert.alert(
              "Result",
              data.data,
              [
                {
                  text: "Exit",
                  onPress: () => {
                    setScanned(false)
                  }
                }, {
                  text: "open",
                  onPress: () => {
                    try {
                      Linking.openURL(data.data)
                    } catch {
                      console.log("")
                    }

                    setScanned(false)
                  }
                }])
          }
        }
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  }
});
