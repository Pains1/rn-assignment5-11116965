import React from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  padding: 15px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.borderColor};
`;

const Title = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.textColor};
`;

const SettingsItem = ({ title, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
};

export default SettingsItem;