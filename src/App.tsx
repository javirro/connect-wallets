import React from "react";

import "./App.css";
import {
  createWeb3Modal,
  defaultConfig,
  useWeb3ModalAccount,
} from "@web3modal/ethers5/react";
import ConnectButton from "./ConnectWallet/ConnectionButton";

function App() {
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const PROJECT_ID: string = process.env.REACT_APP_PROJECT_ID as string;

  const mainnet = {
    chainId: 1,
    name: "Ethereum",
    currency: "ETH",
    explorerUrl: "https://etherscan.io",
    rpcUrl: "https://cloudflare-eth.com",
  };

  const metadata = {
    name: "My Website",
    description: "My Website description",
    url: "https://mywebsite.com",
    icons: ["https://avatars.mywebsite.com/"],
  };

  createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    chains: [mainnet],
    projectId: PROJECT_ID,
    featuredWalletIds: [
      "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
      "19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927",
      "ecc4036f814562b41a5268adc86270fba1365471402006302e70169465b7ac18",
    ],
    themeMode: "dark",
    themeVariables: {
      "--w3m-color-mix": "#000000",
      "--w3m-color-mix-strength": 40,
      "--w3m-accent": "#FFFFFF",
    },
  });

  return (
    <div className="App">
      <ConnectButton />

      <h2>{address}</h2>
    </div>
  );
}

export default App;
