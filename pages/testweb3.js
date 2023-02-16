import { WALLET_ADAPTERS, CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";
import { Web3AuthCore } from "@web3auth/core";
import { Web3Auth } from "@web3auth/modal";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie'
function Web3Test(props) {
  const [loading, setLoading] = useState(false)
  const [userInfo, setUserInfo] = useState(null)
  const [web3auth, setWeb3auth] = useState(null);
  const [provider, setProvider] = useState(null);
  const [message, setMessage] = useState('')
  const [userMessage, setUserMessage] = useState('')


  const onLogin = async () => {
    try {
      setLoading(true)
      const web3auth = new Web3Auth({
        clientId: 'BAyJUMy_TUz9qVdu5lkvzMrI6nB3miI7oH6VN6H9pUhDitwlyhtPdUVN-mXqI5G5LiwzWlYpW3C0aBWCgwTR0So',
        web3AuthNetwork: "testnet", // mainnet, aqua, celeste, cyan or testnet
        chainConfig: {
          chainNamespace: CHAIN_NAMESPACES.EIP155,
          chainId: "0x1",
          rpcTarget: "https://rpc.ankr.com/eth", // This is the public RPC we have added, please pass on your own endpoint while creating an app
        },
      });


      setWeb3auth(web3auth);

      await web3auth.initModal();


      if (!web3auth) {
        console.log("web3auth not initialized yet");
        return;
      }
      const web3authProvider = await web3auth.connect();
      setProvider(web3auth.provider);
      setProvider(web3authProvider);
      setLoading(false)
      setMessage('User Logged In')
    } catch (e) {
      setMessage('User Logged Failed')
      console.log(e)
      setLoading(false)
    }
  }

  const onAuthenticateUser = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const idToken = await web3auth.authenticateUser();
    console.log(idToken);
    setUserMessage(JSON.stringify(idToken))
  };

  const OnGetUserInfo = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const user = await web3auth.getUserInfo();
    console.log(user);
    setUserMessage(JSON.stringify(user))
  };

  const onLogout = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    await web3auth.logout();
    setMessage('User Logged Out')
    setProvider(null);
    setUserMessage('')
  };

  const getPrivateKey = async () => {
    const privateKey = await web3auth.provider.request({
      method: "private_key"
    });
    console.log(privateKey)
    setUserMessage(privateKey)
    //Do something with privateKey
  }


  return <>
    <div className="cn">
      <h2>Web3 Auth POC</h2>
      <h4>{message}</h4>
      {loading && <p>Loading.. please wait</p>}
      <div>
        <button onClick={onLogin}>Login</button>
        <button onClick={onLogout}>Logout</button>
        <button onClick={onAuthenticateUser}>Auth</button>
        <button onClick={OnGetUserInfo}>Info</button>
        <button onClick={getPrivateKey}>Key</button>
      </div>
      <div>{userMessage}</div>
    </div>
    <style jsx>
      {
        `
        .cn {display: flex; height: 95vh; flex-direction: column; align-items: center; justify-content: center; }
        
        
        `
      }
    </style>
  </>
}

export default Web3Test