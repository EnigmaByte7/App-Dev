import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, containerStyles, textStyles, handlePress}) => {
  return (
    <TouchableOpacity className={` rounded-2xl bg-primary ${containerStyles}`}  onPress={handlePress}>
      <Text className={`text-lg font-pmedium text-white text-center m-auto ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
