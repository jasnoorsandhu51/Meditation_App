import { View, Text, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'
import AFFIRMATION_GALLERY from '@/constants/affirmations-gallery'
import AffirmationsGallery from '@/components/AffirmationsGallery'


const affirmation = () => {
    return (
        <View className='flex-1'>
            <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
                <ScrollView showsVerticalScrollIndicator={false} className='mx-3'>
                    <Text className='text-zinc-50 text-3xl font-bold'>
                        Change your beliefs with these affirmarions!
                    </Text>
                    <View>
                        {AFFIRMATION_GALLERY.map((g) => (
                            <AffirmationsGallery key={g.title} title={g.title} previews={g.data}>

                            </AffirmationsGallery>
                        ))}
                    </View>
                </ScrollView>
            </AppGradient>
        </View>
    )
}

export default affirmation