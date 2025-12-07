import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: 'white',
                
            },
            tabBarLabelStyle: {
                fontSize: 12,
            },

        }}>
            <Tabs.Screen name="index" options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
                title: 'Home',
            }} />
            <Tabs.Screen name="map" 
            options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="map" color={color} size={size} />
                ),
                title: 'Map',
            }}/>
        </Tabs>
    )
}