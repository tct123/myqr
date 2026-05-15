import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useTheme } from '@react-navigation/native';
import { Icon, Label, VectorIcon } from 'expo-router';
import { NativeTabs, } from 'expo-router/unstable-native-tabs';


export default function RootLayout() {
  const theme = useTheme();
  return (
    <NativeTabs tintColor={theme.colors.primary} backgroundColor={theme.colors.background}>
      <NativeTabs.Trigger name="index">
        <Label>Scan</Label>
        <Icon src={<VectorIcon family={MaterialCommunityIcons} name="qrcode" />}></Icon>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="generate">
        <Label>Generate</Label>
        <Icon src={
          <VectorIcon family={MaterialCommunityIcons} name="qrcode-edit" />
        }>
        </Icon>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
