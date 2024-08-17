import { View, Text, ImageBackground, SafeAreaView } from 'react-native'
import React from 'react'
import beachImage from '@/assets/meditation-images/beach.webp'
import CustomButton from '@/components/CustomButton'
import { useRouter } from 'expo-router'
import AppGradient from '@/components/AppGradient'
import { LinearGradient } from 'expo-linear-gradient'

const App = () => {
    const router = useRouter()
    return (
        <View className='flex-1'>
            <ImageBackground
                source={beachImage}
                resizeMode='cover'
                className='flex-1'
            >
                <LinearGradient className='flex-1' colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
                    <SafeAreaView className='flex-1 mx-5 my-12 justify-between '>
                        <View>
                            <Text className='text-center text-white font-bold text-4xl'>
                                Meditation Kit
                            </Text>
                            <Text className='text-center text-white font-normal text-2xl mt-3'>
                                Symplifying meditation for everyone
                            </Text>
                        </View>
                        <View>
                            <CustomButton
                                onPress={() => router.push("/nature_meditate")}
                                title='Get Started' />
                        </View>
                    </SafeAreaView>
                </LinearGradient>
            </ImageBackground>
        </View>
    )
}

export default App