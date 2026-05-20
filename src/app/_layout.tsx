import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { DarkTheme, DefaultTheme, ThemeProvider, useTheme } from '@react-navigation/native';
import { Icon, Label, VectorIcon } from 'expo-router';
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
          <Label>Scan</Label>
          <Icon src={<VectorIcon
            family={MaterialCommunityIcons}
            name="qrcode"
          />}>
          </Icon>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="generate" contentStyle={{ backgroundColor: "brown" }}>
          <Label>Generate</Label>
          <Icon src={
            <VectorIcon
              family={MaterialCommunityIcons}
              name="qrcode-edit"
            />
          }>
          </Icon>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="course" role='search' contentStyle={{ backgroundColor: "red" }}>
          <Label>Course</Label>
          <Icon src={
            <VectorIcon
              family={MaterialCommunityIcons}
              name="tab-search"
            />
          }>
          </Icon>
        </NativeTabs.Trigger>
      </NativeTabs>
    </ThemeProvider>
  );
}
