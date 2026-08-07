import { DarkTheme, DefaultTheme, ThemeProvider, useTheme } from 'expo-router';
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { useColorScheme } from 'react-native';
// import * as Symbol from "expo-symbols";
// import { useEffect, useState } from 'react';
// import { ImageSourcePropType, useColorScheme } from 'react-native';


export default function RootLayout() {
  /* const [icons, setIcons] = useState<{
    qrCodeIcon?: ImageSourcePropType | null;
    qrCodeIconEdit?: ImageSourcePropType | null;
    search?: ImageSourcePropType | null;
  }>({});
  useEffect(() => {
    async function loadIcons() {
      const [qrCodeIcon, qrCodeIconEdit, search] = await Promise.all([
        Symbol.unstable_getMaterialSymbolSourceAsync('qr_code', 27, "#007AFF"),
        Symbol.unstable_getMaterialSymbolSourceAsync('qr_code_2_add', 27, "#007AFF"),
        Symbol.unstable_getMaterialSymbolSourceAsync('qr_code_2_add', 27, "#007AFF"),
      ]);
      setIcons({ qrCodeIcon, qrCodeIconEdit, search });
    }
    loadIcons()
  }) */
  // src={icons.qrCodeIcon}
  // src={icons.qrCodeIconEdit}
  // src={icons.search}

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
          <NativeTabs.Trigger.Icon sf={"qrcode"} md={"qr_code"} />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="generate" contentStyle={{ backgroundColor: "brown" }}>
          <NativeTabs.Trigger.Label>Generate</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf={"note"} md={"note"} />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="course" role='search' contentStyle={{ backgroundColor: "red" }}>
          <NativeTabs.Trigger.Label>Course</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf={"loupe"} md={"search"} />
        </NativeTabs.Trigger>
      </NativeTabs>
    </ThemeProvider>
  );
}
