import { View, Text, FlatList, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'
import { MEDITATION_DATA } from '@/constants/meditation-data'
import meditationImages from '@/constants/meditation-images'

const nature_meditate = () => {
    return (
        <View className='flex-1'>
            <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
                <View className='mx-6 mb-6'>
                    <Text className='text-gray-200 mb-3 font-bold text-4xl text-left'>Welcome Jasnoor</Text>
                    <Text className='text-indigo-100 text-xl font-medium mb-2'>Start your practice today!</Text>
                    <FlatList
                        data={MEDITATION_DATA}
                        className='mb-20'
                        keyExtractor={(item) => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <Pressable
                                onPress={() => console.log('resss')}
                                className='h-48 my-3 rounded-md overflow-hidden'

                            >
                                <ImageBackground
                                    source={meditationImages[item.id - 1]}
                                    resizeMode='cover'
                                    className='flex-1 rounded-lg justify-center'
                                >
                                    <AppGradient colors={['transparent', 'rgba(0,0,0,0.8)']}>
                                        <Text className='text-gray-100 text-3xl font-bold text-center'>
                                            {item.title}
                                        </Text>

                                    </AppGradient>
                                </ImageBackground>
                            </Pressable>
                        )}
                    ></FlatList>
                </View>
            </AppGradient>
        </View>
    )
}

export default nature_meditate