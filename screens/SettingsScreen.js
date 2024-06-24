import React, { useContext } from 'react';
import { View, Switch } from 'react-native';
import styled from 'styled-components/native';
import { ThemeContext } from 'styled-components/native';
import SettingsItem from '../components/SettingsItem';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.backgroundColor};
  padding: 20px;
`;

const Header = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.textColor};
  margin-bottom: 20px;
`;

const ThemeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ThemeText = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.textColor};
`;

const SettingsScreen = ({ setIsDarkMode }) => {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <Header>Settings</Header>
      <ThemeContainer>
        <ThemeText>Dark Mode</ThemeText>
        <Switch
          value={theme.isDark}
          onValueChange={() => setIsDarkMode(prev => !prev)}
        />
      </ThemeContainer>
      <SettingsItem title="Language" />
      <SettingsItem title="My Profile" />
      <SettingsItem title="Contact Us" />
      <SettingsItem title="Change Password" />
      <SettingsItem title="Privacy Policy" />
    </Container>
  );
};

export default SettingsScreen;