import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { DarkTheme, DefaultTheme, ThemeProvider, useTheme, VectorIcon } from 'expo-router';
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { useColorScheme } from 'react-native';


export default function RootLayout() {
  const theme = useTheme();
  const colorTheme = useColorScheme();
  return (
    <ThemeProvider value={colorTheme === "dark" ? DarkTheme : DefaultTheme}>
      <NativeTabs
        tintColor={theme.colors.primary}
        blurEffect='systemChromeMaterial'
      >
        <NativeTabs.Trigger name="index" >
          <NativeTabs.Trigger.Label>Scan</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon src={
            <VectorIcon
              family={MaterialCommunityIcons}
              name="qrcode"
            />
          }>
          </NativeTabs.Trigger.Icon>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="generate" contentStyle={{ backgroundColor: "brown" }}>
          <NativeTabs.Trigger.Label>Generate</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon src={
            <VectorIcon
              family={MaterialCommunityIcons}
              name="qrcode-edit"
            />
          }>
          </NativeTabs.Trigger.Icon>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="course" role='search' contentStyle={{ backgroundColor: "red" }}>
          <NativeTabs.Trigger.Label>Course</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon src={
            <VectorIcon
              family={MaterialCommunityIcons}
              name="tab-search"
            />
          }>
          </NativeTabs.Trigger.Icon>
        </NativeTabs.Trigger>
      </NativeTabs>
    </ThemeProvider>
  );
}
