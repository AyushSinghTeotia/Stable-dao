import {React,useState} from "react";
import { ethers } from "ethers";
import styled from "styled-components";
import { Title } from "../viewStyles";
import StatInfo from "../../components/StatInfo";
import GeneralButton from "../../components/GeneralButton";
import { BiWallet } from "react-icons/bi";
import { IoSwapVertical } from "react-icons/io5";
import TokenTable from "../../components/TokenTable";
import SmallLogo from "../../images/small_logo.svg";
import OutlineButton from "../../components/OutlineButton";
import Selector from "../../components/Selector";
import BackingChart from "./BackingChart";
import DashboardChart from "../../components/DashboardChart";
import Holdings from "./Holdings";


const periodItems = [
  { label: "7d" },
  { label: "30d" },
  { label: "90d" },
  ,
  { label: "Max" },
];
const tokenItems = [{ label: "SDAO" }, { label: "gSDAO" }];
// const clickFun=()=>{
//   console.log("click hua");
// }


const Dashboard = ({}) => {
  const [WalletStatus, setWalletStatus] = useState(false);
  const connectWallet = async () => {

    // const contractAddress = "0x46436dcb1b29b111a00bb61f5475b420ef1104eb";
    // const contractABI = abi.abi;
    try {
      const { ethereum } = window;
  
      if (ethereum) {
        const account = await ethereum.request({
          method: "eth_requestAccounts",
          
        });
        console.log(account);
        setWalletStatus(true);
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });
  
        window.ethereum.on("accountsChanged", () => {
          window.location.reload(); 
        });
        
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        console.log(signer); 
    }
  }
      catch (error) {
        console.log(error);
      }
    }
  
  return (
    <Container>
      <Content>
        <TopLine>
          <Title>Dashboard</Title>
          <StakeButtonContainer>
            <GeneralButton
              onClick={()=>connectWallet()}
              bgColor="green"
              labelColor="white"
              label={WalletStatus === false ? 'Connect Wallet' : 'Connected'}
              icon={<BiWallet size={20} color={"white"} />}
            />
          </StakeButtonContainer>
        </TopLine>
        <Panel>
          <InfoLine>
            <StatInfo value={241924660} label="SDAO Market Cap" />
            <StatInfo value={120000} label="SDAO Price" />
            <StatInfo value={120000} label="gSDAO Price" />
          </InfoLine>
          <InfoLine>
            <StatInfo
              value={241924660}
              label="SDAO Circulating Supply / Total"
            />
            <StatInfo value={120000} label="Liquid Backing per SDAO" />
            <StatInfo value={120000} label="Current Index" />
          </InfoLine>
        </Panel>
        <SelectContainer>
          <Selector menus={periodItems} />
          <Selector menus={tokenItems} />
        </SelectContainer>
        <ChartContainer>
          <DashboardChart title="SDAO Backing" value={10.97} />
        </ChartContainer>
        <ChartContainer>
          <DashboardChart
            title="Treasury Liquid Backing"
            bottomComponent={<Holdings />}
            value={207491137}
          />
        </ChartContainer>
        <ChartContainer>
          <DashboardChart title="Protocol-Owned Liquidity" value={73420945} />
        </ChartContainer>
        <ChartContainer>
          <DashboardChart title="SDAO Supply" />
        </ChartContainer>
      </Content>
    </Container>
  );
};

export default Dashboard;

const ChartContainer = styled.div`
  margin-top: 50px;
  background-color: #32373e;
  padding: 20px;
`;
const SelectContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
const InfoLine = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StakeButtonContainer = styled.div`
  width: 140px;
`;

const TopLine = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 60px;
  justify-content: space-between;
`;
const Container = styled.div`
  background-color: #1e1e1e;
  flex: 1;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`;
const Content = styled.div`
  margin-top: 50px;
  display: flex;
  width: 90%;
  flex-direction: column;
`;

const Panel = styled.div`
  background: linear-gradient(#1e1e1e, #1e1e1e) padding-box,
    linear-gradient(to right, #beffba, #ffffff) border-box;
  border: 3px solid transparent;
  border-radius: 10px;
  padding: 20px 20px;
`;
