import {React,useState,useEffect} from "react";
import {ethers} from 'ethers';
import styled from "styled-components";
import { Title } from "../viewStyles";
import StatInfo from "../../components/StatInfo";
import GeneralButton from "../../components/GeneralButton";
import { BiWallet } from "react-icons/bi";
import { IoSwapVertical } from "react-icons/io5";
import TokenTable from "../../components/TokenTable";
import SmallLogo from "../../images/small_logo.svg";
import OutlineButton from "../../components/OutlineButton";
const Stake = ({}) => {
  const [inputAddress, setAddress] = useState("");
  const [inputAmount, setAmount] = useState();
  const [inputSecond,setinputSecond]=useState();
  const [useraddress,setuserAddress]=useState("address");
  useEffect(() => {
    const fetchAc=async()=>{
    const provider =new ethers.providers.Web3Provider(window.ethereum);
    const accounts= await provider.send("eth_requestAccounts",[]);
    const CurrentAc=accounts[0];
    console.log("console.log",CurrentAc);
    setuserAddress(CurrentAc);
     }
    fetchAc();
   
  },)
  // useEffect(() => {
  //   window.ethereum.on('accountsChanged', (accounts) => {
  //     setuserAddress(accounts[0]);
  //     window.location.reload();
  //   });
  // }, []);
  const stakeContract="0xf0D6E5520D006F22A5857f14E8533A572b1485dF";
  const stakeAbi=[{"inputs":[{"internalType":"address","name":"_ohm","type":"address"},{"internalType":"address","name":"_sOHM","type":"address"},{"internalType":"address","name":"_gOHM","type":"address"},{"internalType":"uint256","name":"_epochLength","type":"uint256"},{"internalType":"uint256","name":"_firstEpochNumber","type":"uint256"},{"internalType":"uint256","name":"_firstEpochTime","type":"uint256"},{"internalType":"address","name":"_authority","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract IOlympusAuthority","name":"authority","type":"address"}],"name":"AuthorityUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"distributor","type":"address"}],"name":"DistributorSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"warmup","type":"uint256"}],"name":"WarmupSet","type":"event"},{"inputs":[],"name":"OHM","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"authority","outputs":[{"internalType":"contract IOlympusAuthority","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"bool","name":"_rebasing","type":"bool"}],"name":"claim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"distributor","outputs":[{"internalType":"contract IDistributor","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"epoch","outputs":[{"internalType":"uint256","name":"length","type":"uint256"},{"internalType":"uint256","name":"number","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"},{"internalType":"uint256","name":"distribute","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"forfeit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"gOHM","outputs":[{"internalType":"contract IgOHM","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"index","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rebase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sOHM","outputs":[{"internalType":"contract IsOHM","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"secondsToNextEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IOlympusAuthority","name":"_newAuthority","type":"address"}],"name":"setAuthority","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_distributor","type":"address"}],"name":"setDistributor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_warmupPeriod","type":"uint256"}],"name":"setWarmupLength","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bool","name":"_rebasing","type":"bool"},{"internalType":"bool","name":"_claim","type":"bool"}],"name":"stake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"supplyInWarmup","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"toggleLock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bool","name":"_trigger","type":"bool"},{"internalType":"bool","name":"_rebasing","type":"bool"}],"name":"unstake","outputs":[{"internalType":"uint256","name":"amount_","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"unwrap","outputs":[{"internalType":"uint256","name":"sBalance_","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"warmupInfo","outputs":[{"internalType":"uint256","name":"deposit","type":"uint256"},{"internalType":"uint256","name":"gons","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"bool","name":"lock","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"warmupPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"wrap","outputs":[{"internalType":"uint256","name":"gBalance_","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}];
  const CallStake = async (OHMAddress,amount,resbasing,claim) =>{
    const provider =new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts",[]);
    const signer=provider.getSigner();
    const contract=new ethers.Contract(stakeContract,stakeAbi,signer);
    console.log(contract,"contract");
    try {
      // Convert amount to wei
      const amountWei = ethers.utils.parseEther(amount.toString());
      //for testing fetch OHM Address readonly purpose 
      const OHMAd= await contract.OHM();
      console.log("fetched",OHMAd);
      // Call the function
      const tx = await contract.stake(OHMAddress, amountWei,resbasing,claim);
      await tx.wait();
      // Transaction successful
      console.log("Transaction successful");
    } catch (error) {
      // Handle error
      console.error("Error sending Ether:", error);
    }
  };
  CallStake("0xebd67712D3650b6898851e00A61Ab5ecc67718C0",10,1,1);
  const handlechange=(event)=>{
  if(event.target.name==="first")
  {
   setAmount(event.target.value)
  }
  else{
   setinputSecond(event.target.value)
  }
}

  return (
    <Container>
      <Content>
        <TopLine>
          <Title>Stake</Title>
          <StakeButtonContainer>
            <GeneralButton
              bgColor="#32373e"
              labelColor="white"
              label="0x22....ef"
              icon={<BiWallet size={20} color={"white"} />}
            />
          </StakeButtonContainer>
        </TopLine>
        <Panel>
          <StatInfo value={241924660} label="Annualized Rebases" />
          <StatInfo value={120000} label="Time to Next Rebase" />
          <StatInfo value={120000} label="Current Index" />
        </Panel>
        <TokenTable />
        <ButtonArray>
          <ButtonContainer>
            <GeneralButton bgColor="#2be79a" labelColor="black" label="Stake" />
          </ButtonContainer>
          <ButtonContainer>
            <GeneralButton
              bgColor="#32373e"
              labelColor="white"
              label="Unstake"
            />
          </ButtonContainer>
        </ButtonArray>
        <ExchangePanel>
          <ExchangePanelTop>
            <TokenTitle>
              <TokenIcon src={SmallLogo} />
              <TokenName>SDAO</TokenName>
            </TokenTitle>
            <MaxButtonContainer>
              <OutlineButton label="Max" labelColor="white" />
            </MaxButtonContainer>
            <BalanceLine>
              {/* <input type="text" value={inputAmount} onChange={handlechange}></input> */}
              <BalanceText >
              <input type="text" placeholder="0" name="first" value={inputAmount} onChange={handlechange}></input>
              </BalanceText>
              <BalanceAmount>Balance 8.345 gSDAO</BalanceAmount>
            </BalanceLine>
            <ExchangeButton>
              <IoSwapVertical size={24} color={"black"} />
            </ExchangeButton>
          </ExchangePanelTop>
          <ExchangePanelLeft>
            <TokenTitle>
              <TokenIcon src={SmallLogo} />
              <TokenName>SDAO</TokenName>
            </TokenTitle>
            <BalanceLine>
              <BalanceText>
              <input type="text" placeholder="0" name="second" value={inputSecond} onChange={handlechange}></input>
              </BalanceText>
              <BalanceAmount>Balance 8.345 gSDAO</BalanceAmount>
            </BalanceLine>
          </ExchangePanelLeft>
          <ApproveButtonContainer>
            <GeneralButton
              bgColor="#2be79a"
              labelColor="black"
              label="Approve Staking"
            />
          </ApproveButtonContainer>
          <ResultLine>
            <ResultText>Unstaked Balance</ResultText>
            <ResultAmount>159.429 SDAO</ResultAmount>
          </ResultLine>
          <ResultLine>
            <ResultText>Total Staked Balance</ResultText>
            <ResultAmount>4323 SDAO</ResultAmount>
          </ResultLine>
          <ResultLine>
            <ResultText>Your Next Rebase</ResultText>
            <ResultAmount>23.429 SDAO</ResultAmount>
          </ResultLine>
          <ResultLine>
            <ResultText> Next Rebase Yield</ResultText>
            <ResultAmount>0.0065%</ResultAmount>
          </ResultLine>
          <ResultLine>
            <ResultText> Rebases (5-Day Rate)</ResultText>
            <ResultAmount>0.0972%</ResultAmount>
          </ResultLine>
        </ExchangePanel>
      </Content>
    </Container>
  );
};

export default Stake;
const ResultLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;
const ResultText = styled.div`
  font-size: 16px;
  color: white;
  font-weight: 500;
`;
const ResultAmount = styled.div`
  color: white;
  font-size: 16px;
`;
const StakeButtonContainer = styled.div`
  width: 140px;
`;
const ExchangeButton = styled.div`
  background-color: #2be79a;
  width: 50px;
  height: 50px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -30px;
  left: 170px;
`;
const ApproveButtonContainer = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 20px;
`;
const ExchangePanel = styled.div`
  width: 400px;
`;
const MaxButtonContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
`;
const BalanceText = styled.div`
  font-size: 22px;
  color: #9ea0a4;
  font-weight: 600;
`;
const BalanceAmount = styled.div`
  color: #9ea0a4;
  font-size: 14px;
`;
const BalanceLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 40px;
`;
const ExchangePanelTop = styled.div`
  background-color: #32373e;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
  padding: 20px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  position: relative;
`;
const ExchangePanelLeft = styled.div`
  background-color: #32373e;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
  padding: 20px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
`;
const TokenTitle = styled.div`
  display: flex;
  background-color: #282d34;
  height: 30px;
  border-radius: 15px;
  align-items: center;
  padding: 0 10px;
`;
const TokenName = styled.div`
  color: white;
  font-size: 14px;
  font-weight: 600;
  margin-left: 5px;
`;
const TokenIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const ButtonContainer = styled.div`
  // margin: 0 5px;
  width: 100px;
  margin-right: 7px;
`;
const ButtonArray = styled.div`
  display: flex;
  margin-top: 30px;
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
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
`;
