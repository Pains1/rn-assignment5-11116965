import React from 'react';
import { ScrollView, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.backgroundColor};
  padding: 20px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const GreetingContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
`;

const Greeting = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.textColor};
`;

const SearchIcon = styled(Ionicons)`
  color: ${props => props.theme.textColor};
`;

const MastercardImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const TabsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Tab = styled.TouchableOpacity`
  align-items: center;
`;

const TabIcon = styled(Ionicons)`
  color: ${props => props.theme.textColor};
  margin-bottom: 5px;
`;

const TabText = styled.Text`
  color: ${props => props.theme.textColor};
  font-size: 12px;
`;

const SeeAllButton = styled.TouchableOpacity`
  align-items: center;
  margin-bottom: 20px;
`;

const SeeAllText = styled.Text`
  color: ${props => props.theme.primaryColor};
  font-size: 14px;
`;

const TransactionsHeader = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.textColor};
  margin-bottom: 10px;
`;

const TransactionItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

const TransactionIcon = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
`;

const TransactionDetails = styled.View`
  flex: 1;
`;

const TransactionTitle = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.textColor};
`;

const TransactionSubtitle = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.textColor};
  opacity: 0.7;
`;

const TransactionAmount = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.textColor};
`;

const HomeScreen = () => {
  return (
    <Container>
      <Header>
        <GreetingContainer>
          <ProfileImage source={require('../assets/profile-picture.jpg')} />
          <Greeting>Welcome back, Eric Atsu</Greeting>
        </GreetingContainer>
        <SearchIcon name="search-outline" size={24} />
      </Header>

      <MastercardImage source={require('../assets/mastercard.png')} />

      <TabsContainer>
        <Tab>
          <TabIcon name="add-circle-outline" size={24} />
          <TabText>Topup</TabText>
        </Tab>
        <Tab>
          <TabIcon name="arrow-down-circle-outline" size={24} />
          <TabText>Receive</TabText>
        </Tab>
        <Tab>
          <TabIcon name="arrow-up-circle-outline" size={24} />
          <TabText>Sent</TabText>
        </Tab>
        <Tab>
          <TabIcon name="cash-outline" size={24} />
          <TabText>Loan</TabText>
        </Tab>
      </TabsContainer>

      <SeeAllButton>
        <SeeAllText>See All</SeeAllText>
      </SeeAllButton>

      <TransactionsHeader>Transactions</TransactionsHeader>

      <ScrollView showsVerticalScrollIndicator={false}>
        <TransactionItem>
          <TransactionIcon source={require('../assets/money-transfer-icon.png')} />
          <TransactionDetails>
            <TransactionTitle>Money Transfer</TransactionTitle>
            <TransactionSubtitle>Transaction</TransactionSubtitle>
          </TransactionDetails>
          <TransactionAmount>- $ 88</TransactionAmount>
        </TransactionItem>

        <TransactionItem>
          <TransactionIcon source={require('../assets/grocery-icon.png')} />
          <TransactionDetails>
            <TransactionTitle>Grocery Shopping</TransactionTitle>
            <TransactionSubtitle>Shopping</TransactionSubtitle>
          </TransactionDetails>
          <TransactionAmount>- $5,99</TransactionAmount>
        </TransactionItem>

        <TransactionItem>
          <TransactionIcon source={require('../assets/apple-store-icon.png')} />
          <TransactionDetails>
            <TransactionTitle>Apple Store</TransactionTitle>
            <TransactionSubtitle>Entertainment</TransactionSubtitle>
          </TransactionDetails>
          <TransactionAmount>- $12,99</TransactionAmount>
        </TransactionItem>

        <TransactionItem>
          <TransactionIcon source={require('../assets/spotify-icon.png')} />
          <TransactionDetails>
            <TransactionTitle>Spotify</TransactionTitle>
            <TransactionSubtitle>Music</TransactionSubtitle>
          </TransactionDetails>
          <TransactionAmount>- $5,99</TransactionAmount>
        </TransactionItem>

        <TransactionItem>
          <TransactionIcon source={require('../assets/apple-store-icon.png')} />
          <TransactionDetails>
            <TransactionTitle>Apple Store</TransactionTitle>
            <TransactionSubtitle>Entertainment</TransactionSubtitle>
          </TransactionDetails>
          <TransactionAmount>- $5,99</TransactionAmount>
        </TransactionItem>
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;