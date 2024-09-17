import {  Text, View, Image , ScrollView} from "react-native";
import { Link } from 'expo-router'
import { useEffect} from 'react'
import icons  from '../constants/icons';

export default function App() {  
      
  return (
      <View className="flex-1  items-center justify-center bg-white">
        <Image source={icons.main} className="w-28 h-20 mb-6"  resizeMode="fill" ></Image>
        <Text className="text-2xl font-pmedium" >Buzz Wire</Text>
      </View>
  );
}
