import { useWeb3React } from "@web3-react/core";
import { UserRejectedRequestError } from "@web3-react/injected-connector";
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { injected } from "../utils/connectors";
import useENSName from "../hooks/useENSName";
import useMetaMaskOnboarding from "../hooks/useMetaMaskOnboarding";
import { formatEtherscanLink } from "../utils/util";

type AccountProps = {
  triedToEagerConnect: boolean;
};

const Account = ({ triedToEagerConnect }: AccountProps) => {
  const { active, error, activate, chainId, account, setError } =
    useWeb3React();

  const {
    isMetaMaskInstalled,
    isWeb3Available,
    startOnboarding,
    stopOnboarding,
  } = useMetaMaskOnboarding();

  // manage connecting state for injected connector
  const [connecting, setConnecting] = useState(false);
  useEffect(() => {
    if (active || error) {
      setConnecting(false);
      stopOnboarding();
    }
  }, [active, error, stopOnboarding]);

  let newAccount: string | undefined;
  if (account) {
    newAccount = account;
  } else {
    newAccount = "";
  }

  let newChainId: number | undefined;
  if (chainId) {
    newChainId = chainId;
  } else {
    newChainId = 1;
  }

  const ENSName = useENSName(newAccount);

  if (error) {
    return null;
  }

  if (!triedToEagerConnect) {
    return null;
  }

  if (typeof account !== "string") {
    return (
      <div>
        {isWeb3Available ? (
          <Button
            variant="contained"
            disabled={connecting}
            onClick={() => {
              setConnecting(true);

              activate(injected, undefined, true).catch((error) => {
                // ignore the error if it's a user rejected request
                if (error instanceof UserRejectedRequestError) {
                  setConnecting(false);
                } else {
                  setError(error);
                }
              });
            }}
          >
            {isMetaMaskInstalled ? "Connect to MetaMask" : "Connect to Wallet"}
          </Button>
        ) : (
          <button onClick={startOnboarding}>Install Metamask</button>
        )}
      </div>
    );
  }

  return (
    <a
      {...{
        href: formatEtherscanLink("Account", [newChainId, account]),
        target: "_blank",
        rel: "noopener noreferrer",
      }}
    >
      {ENSName || `Connected Metamask Account:${account}`}
      
    </a>
  );
};

export default Account;
