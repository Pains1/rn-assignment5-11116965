import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

const TabBar = styled.View`
  flex-direction: row;
  background-color: ${props => props.theme.tabBarColor};
  height: 60px;
`;

const TabItem = styled(TouchableOpacity)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TabText = styled.Text`
  color: ${props => props.focused ? props.theme.activeTabColor : props.theme.inactiveTabColor};
  font-size: 12px;
`;

const BottomTabs = ({ state, descriptors, navigation, theme }) => {
  return (
    <TabBar>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        let iconName;
        if (route.name === 'Home') {
          iconName = isFocused ? 'home' : 'home-outline';
        } else if (route.name === 'Settings') {
          iconName = isFocused ? 'settings' : 'settings-outline';
        }

        return (
          <TabItem
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
          >
            <Ionicons 
              name={iconName} 
              size={24} 
              color={isFocused ? theme.activeTabColor : theme.inactiveTabColor} 
            />
            <TabText focused={isFocused}>{label}</TabText>
          </TabItem>
        );
      })}
    </TabBar>
  );
};

export default BottomTabs;