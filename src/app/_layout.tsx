import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { NativeTabs, } from 'expo-router/unstable-native-tabs';


export default function RootLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Scan</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon src={<NativeTabs.Trigger.VectorIcon family={MaterialCommunityIcons} name="qrcode" />}></NativeTabs.Trigger.Icon>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="generate">
        <NativeTabs.Trigger.Label>Generate</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon src={<NativeTabs.Trigger.VectorIcon family={MaterialCommunityIcons} name="qrcode-edit" />}></NativeTabs.Trigger.Icon>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
