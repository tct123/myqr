import { CameraView, useCameraPermissions } from "expo-camera";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [permission, requestPermission] = useCameraPermissions();
  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }
  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <CameraView
      style={styles.container}
      barcodeScannerSettings={{
        barcodeTypes: ["qr"]
      }}
      onBarcodeScanned={() => { }}
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
