import { WALLET_ADAPTERS, CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";
import { Web3AuthCore } from "@web3auth/core";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { useState } from "react";
import Cookies from 'js-cookie'
function Web3Test(props) {
    const [loading, setLoading] = useState(false)
    const [userInfo, setUserInfo] = useState(null)
    const [web3authV, setWeb3AuthV] = useState(null)

    const onLogout = async () => {
        await web3authV.logout();
    }

    const onLogin = async () => {
       try {
        setLoading(true)
        let web3auth = new Web3AuthCore({
            clientId: 'BAyJUMy_TUz9qVdu5lkvzMrI6nB3miI7oH6VN6H9pUhDitwlyhtPdUVN-mXqI5G5LiwzWlYpW3C0aBWCgwTR0So',
            web3AuthNetwork: "testnet",
            chainConfig: {
              chainNamespace: CHAIN_NAMESPACES.EIP155, // SOLANA, OTHER
              chainId: "0x1",
            },
          });

          const openloginAdapter = new OpenloginAdapter({
            adapterSettings: {
              loginConfig: {
                google: {
                  name: "ideas2it-new-google-verifier",
                  verifier: "ideas2it-new-google-verifier",
                  typeOfLogin: "google",
                  clientId: "982702516435-k8r2phlbqnljhugb5j4eupoms799fukv.apps.googleusercontent.com",
                },
              },
            },
          });
          
          web3auth.configureAdapter(openloginAdapter);
          await web3auth.init();
          await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
            loginProvider: "google",
          });
          const user = await web3auth.getUserInfo();
          console.log("User info", user);
          Cookies.set('usertoken', user.idToken)
          setLoading(false)
          setWeb3AuthV(web3auth)
       } catch (e) {
        console.log(e)
        setLoading(false)
       }
    }

    const onMetaMaskLogin = () => {
 
      
    }

    return <>
     {loading && <p>Loading.. please wait</p>}
     <button onClick={onLogin}>Login</button>
     <button onClick={onLogout}>Logout</button>
    </>
}

export default Web3Test