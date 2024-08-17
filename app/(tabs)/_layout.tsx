import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import { Ionicons, Feather } from '@expo/vector-icons';

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors.primary }}>
            <Tabs.Screen name='nature_meditate' options={{
                tabBarLabel: 'Meditate',
                tabBarIcon: ({ color }) => (
                    <Ionicons name="flower-sharp" size={24} color={color} />
                )

            }} />
            <Tabs.Screen name='affirmation' options={{
                tabBarLabel: 'Quotes',
                tabBarIcon: ({ color }) => (
                    <Feather name="book-open" size={24} color={color} />
                )

            }}>

            </Tabs.Screen>
        </Tabs>
    )
}

export default TabsLayout