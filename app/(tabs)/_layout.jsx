import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';

const TabIcon = ({ icon, color, name, focusState }) => {
  return (
    <View style={styles.iconContainer}>
      <Image 
        source={icon} 
        style={[styles.icon, { tintColor: color }]} 
        resizeMode='contain'
      />
      <Text style={[styles.iconText, focusState ? styles.focusedText : styles.unfocusedText, { color: color }]}>
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false,
      tabBarActiveTintColor: '#ffa001',
      tabBarInactiveTintColor: '#cdcde0',
      tabBarStyle: {
        backgroundColor: '#161622',
        borderTopWidth: 1,
        borderTopColor: '#232533',
        height: 84
      }
    }}>
      <Tabs.Screen 
        name="home"
        options={{ 
          title: "Home", 
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              icon={icons.home} 
              color={color} 
              name="Home" 
              focusState={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              icon={icons.plus}
              color={color}
              name="Create"
              focusState={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile}
              color={color}
              name="Profile"
              focusState={focused}
              />
          )
        }}
        />

        <Tabs.Screen
          name="bookmarks"
          options={{
            title: "Bookmarks",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.bookmark}
                color={color}
                name="Bookmarks"
                focusState={focused}
                />
            )
          }}
        />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  icon: {
    width: 24,
    height: 24,
  },
  iconText: {
    fontSize: 12,
  },
  focusedText: {
    fontWeight: '600', // equivalent to semi-bold
  },
  unfocusedText: {
    fontWeight: '400', // equivalent to regular
  },
});
