import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
import useSolanaConfig from "../hooks/useSolanaConfig"
import { ConnectionProvider, WalletProvider, useWallet /*useConnection*/ } from "@solana/wallet-adapter-react"
import ConnectionSolana from "../Components/SolanaWallet/ConnectionSolana"
import "./routes.css"

const WrappedSolana = () => {
  // Solana wallet connection
  const walletHook = useWallet()
  const solanaPublicKey = walletHook?.publicKey
  const solanaAddress = solanaPublicKey?.toBase58()
  return (
    <main className="page-container">
      <ConnectionSolana />
      <span>{solanaAddress}</span>
    </main>
  )
}

const Solana = () => {
  const { wallets, endpoint } = useSolanaConfig()
  return (
    <main>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <WrappedSolana />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </main>
  )
}

export default Solana
