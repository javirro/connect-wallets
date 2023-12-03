import { useWalletModal } from "@solana/wallet-adapter-react-ui"
import "./ConnectionSolana.css"
// It is indispensable to add the css to see how modal is opened.
const ConnectionSolana = () => {
  const { setVisible } = useWalletModal() // Default hook to open react-solana-adapter modal to connect wallet
  return (
    <>
      <button onClick={() => setVisible(true)} className="solana-connect-btn">
        Connect Solana wallet
      </button>
    </>
  )
}

export default ConnectionSolana
