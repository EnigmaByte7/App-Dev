import { View, Text, Image , ImageBackground, ScrollView} from 'react-native'
import React from 'react'
import images from '../constants/images'
import { useEffect, useState } from 'react'
import CustomButton from '../components/CustomButton.jsx'

const Page = () => {

  const [state, setState] = useState(0);
  const data = [
    {
      head : 'Stay Informed, Stay Ahead',
      desc : 'Empowering you with real-time updates and insights. Connect with the latest news, trends, and developments, all at your fingertips. Experience seamless access to the information that matters most.',
      img : images.s1
    },
    {
      head: 'Personalized News Experience',
      desc: 'Tailor your news feed to your interests and preferences. From global headlines to local stories, our app customizes your experience so you receive the news that’s relevant to you, exactly how you want it.',
      img: images.s2
    },
    {
      head: 'Breaking News at Your Fingertips',
      desc: 'Get the latest updates and breaking news from around the world as they happen. Our app ensures you stay informed with real-time coverage and in-depth analysis of the stories that matter most.',
      img : images.s3
    }
  ]

  const handleSkip = ()=>{
    if(state > 0){
      setState(state - 1);
    }
  }

  const handlePress = ()=>{
    if(state < 2){
      setState(state + 1);
    }
  }
  return (
    <ScrollView  contentContainerStyle={{height: '101%'}} scrollEnabled={true}>
      <View className='flex-1 w-full items-center bg-white'>
        <View className='flex-1 w-full h-[50%]  items-center' style={{overflow: 'hidden'}}>
          <ImageBackground 
            source={data[state].img}
            resizeMode='cover' 
            className='flex-1 w-[82%] h-[165%] ml-[19%] mt-12'
          />
        </View>
        <Text className='text-center font-pdextrabold text-3xl w-full mt-3'>{data[state].head}</Text>
        <Text className='text-center text-sm p-5 font-pmedium'>{data[state].desc}</Text>
        <View className='flex-row gap-2 w-28 h-5 mt-3 justify-center '>
          <View style={{ width: state === 0 ? '60%' : '15%' }} className={`rounded-lg h-4 ${state === 0 ? 'bg-primary' : 'bg-slate-300'}`}></View>
          <View style={{ width: state === 1 ? '60%' : '15%' }} className={`rounded-lg h-4 ${state === 1 ? 'bg-primary' : 'bg-slate-300'}`}></View>
          <View style={{ width: state === 2 ? '60%' : '15%' }} className={`rounded-lg h-4 ${state === 2 ? 'bg-primary' : 'bg-slate-300'}`}></View>

        </View>
        <View className='w-full p-6 mt-9 flex-row items-center justify-around'>
          <CustomButton containerStyles={'w-[45%] h-[40px] bg-white border-2 border-primary '} textStyles={'text-primary'} title={'Skip'} handlePress={handleSkip}></CustomButton>
          <CustomButton containerStyles={'w-[45%] h-[40px]'} title={'Continue'} handlePress={handlePress}></CustomButton>
        </View>
      </View>
    </ScrollView>
  )
}

export default Page