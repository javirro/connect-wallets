import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { EthereumClient, w3mConnectors, w3mProvider } from "@web3modal/ethereum"
import { Web3Modal } from "@web3modal/react"
import { configureChains, createConfig, WagmiConfig } from "wagmi"
import { polygon, polygonMumbai } from "viem/chains"
import "./App.css"
import Home from "./routes/Home"
import Solana from "./routes/Solana"
import EVM from "./routes/EVM"

const chains = [process.env.REACT_APP_IS_PRODUCTION === "true" ? polygon : polygonMumbai]
const projectId = process.env.REACT_APP_PROJECT_ID as string

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

function App() {
  return (
    <div className="App">
      <WagmiConfig config={wagmiConfig}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solana" element={<Solana />} />
            <Route path="/evm" element={<EVM />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </BrowserRouter>
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </div>
  )
}

export default App
