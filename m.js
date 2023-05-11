import { React, useState } from 'react';
import { ethers } from 'ethers';
import styled from 'styled-components';
import { Title } from '../viewStyles';
import StatInfo from '../../components/StatInfo';
import GeneralButton from '../../components/GeneralButton';
import { BiWallet } from 'react-icons/bi';
import { IoSwapVertical } from 'react-icons/io5';
import TokenTable from '../../components/TokenTable';
import SmallLogo from '../../images/small_logo.svg';
import OutlineButton from '../../components/OutlineButton';
import Selector from '../../components/Selector';
import BackingChart from './BackingChart';
import DashboardChart from '../../components/DashboardChart';
import Holdings from './Holdings';

const periodItems = [
  { label: '7d' },
  { label: '30d' },
  { label: '90d' },
  { label: 'Max' },
];
const tokenItems = [{ label: 'SDAO' }, { label: 'gSDAO' }];

const Dashboard = () => {
  const [provider, setProvider] = useState(null);
  const [address, setAddress] = useState('');

  const connectMetamask = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        // Request access to user's accounts
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Set up ethers provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);

        // Get the current connected address
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAddress(address);

        // Listen for account changes
        window.ethereum.on('accountsChanged', ([newAddress]) => {
          setAddress(newAddress);
        });
      } catch (error) {
        console.error('Error connecting to Metamask:', error);
      }
    } else {
      console.error('Metamask not found');
    }
  };

  return (
    <Container>
      <Content>
        <TopLine>
          <Title>Dashboard</Title>
          <StakeButtonContainer>
            <GeneralButton
              onClick={connectMetamask}
              bgColor="green"
              labelColor="white"
              label="Connect"
              icon={<BiWallet size={20} color={'white'} />}
            />
          </StakeButtonContainer>
        </TopLine>
        {/* Rest of your code */}
      </Content>
    </Container>
  );
};

export default Dashboard;

// Remaining styled components
