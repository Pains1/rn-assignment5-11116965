import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from 'styled-components/native';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import BottomTabs from './components/BottomTabs';
import lightTheme from './themes/lightTheme';
import darkTheme from './themes/darkTheme';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;
 
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator tabBar={props => <BottomTabs {...props} theme={theme} />}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings">
            {props => <SettingsScreen {...props} setIsDarkMode={setIsDarkMode} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}