import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";

const ConnectButton = () => {
  const { open } = useWeb3Modal();
  const { isConnected: isPolygonConnected, address: polygonAddress } =
    useAccount();
  const { chain } = useNetwork();
  const { chains, switchNetwork }: { chains: any[]; switchNetwork: any } =
    useSwitchNetwork();

  useAccount({
    onConnect: async () => {
      const usedChain: number = chains[0].id;
      if ((chain?.id as number) !== (chains[0].id as number)) {
        switchNetwork(usedChain);
      }
    },
  });

  return (
    <>
      <button onClick={() => open()}>Open Connect Modal</button>
    </>
  );
};

export default ConnectButton;
