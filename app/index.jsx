import {  Text, View } from "react-native";
import { Link } from 'expo-router'

export default function App() {
  return (
      <View className="flex-1 items-center justify-center bg-orange-400">
        <Text className="text-3xl" >Hello World</Text>
        <Link href='/page' className="text-3xl text-blue-400">Open Page</Link>
      </View>
  );
}
