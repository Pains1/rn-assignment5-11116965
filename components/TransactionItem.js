import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.borderColor};
`;

const Title = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.textColor};
`;

const Amount = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.amount.startsWith('-') ? 'red' : 'green'};
`;

const TransactionItem = ({ title, amount }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Amount amount={amount}>{amount}</Amount>
    </Container>
  );
};

export default TransactionItem;