import React from 'react';

import './App.css';
  import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";
  import ConnectButton from "./ConnectWallet/ConnectionButton";

  function App() {
    const PROJECT_ID: string = process.env.REACT_APP_PROJECT_ID as string;
    console.log(PROJECT_ID);
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
      themeVariables: {
        "--w3m-color-mix": "#000000",
        "--w3m-color-mix-strength": 40,
        "--w3m-accent": "#FFFFFF",
      },
    });

    return (
      <div className="App">
        <ConnectButton />
      </div>
    );
  }

export default App;
