import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets"
import { clusterApiUrl } from "@solana/web3.js"

const useSolanaConfig = () => {
  const network = process.env.REACT_APP_IS_PRODUCTION === "true" ? WalletAdapterNetwork.Mainnet : WalletAdapterNetwork.Devnet
  const endpoint = clusterApiUrl(network)
  const wallets = [new PhantomWalletAdapter()]
  return { endpoint, wallets }
}

export default useSolanaConfig
