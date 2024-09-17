import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { SplashScreen, Stack,  useRouter } from 'expo-router'
import { useFonts } from 'expo-font'
import { preventAutoHideAsync } from 'expo-splash-screen'


const _layout = () => {
    
    const router = useRouter();
    const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
    "PlayfairDisplay-Medium" :require("../assets/fonts/PlayfairDisplay-Medium.ttf"),
    "PlayfairDisplay-Bold": require("../assets/fonts/PlayfairDisplay-Bold.ttf"),
    "PlayfairDisplay-SemiBold": require("../assets/fonts/PlayfairDisplay-SemiBold.ttf"),
    "PlayfairDisplay-ExtraBold": require("../assets/fonts/PlayfairDisplay-ExtraBold.ttf"),
    "PlayfairDisplay-Regular": require("../assets/fonts/PlayfairDisplay-Regular.ttf"),
    "PlayfairDisplay-Black": require("../assets/fonts/PlayfairDisplay-Black.ttf"),
  });

  SplashScreen.preventAutoHideAsync()

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
        SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);


  if (!fontsLoaded && !error) {
    return null;
  }

  if (fontsLoaded) {
    setTimeout(()=>{
      router.push('/page')
  }, 3000)
    
}
  setTimeout(()=>{
    router.push('/page')
}, 3000)

  return (
    <Stack>
        <Stack.Screen name='index' options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='page' options={{headerShown: false}}></Stack.Screen>
    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})