import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import { useClerk } from "@clerk/clerk-react";

function Home(props) {
    const { isLoaded, userId, sessionId, getToken } = useAuth();
    const router = useRouter()
    const { signOut } = useClerk();

    const onSignIn = () => {
        router.push('/sign-in')
    }

    const onLogout = () => {
        signOut()
    }
    return <>
     <div className="cn">
    
        <div className="cn__signin">
            {(!isLoaded || !sessionId) && <button onClick={onSignIn}>Sign in</button>}
            {(isLoaded && sessionId) && <button onClick={onLogout}>Logout</button>}
        </div>
        <h2>Clerk Authentication POC</h2>
        {(!isLoaded || !sessionId) && <p>User not Logged In</p>}
        {(isLoaded && sessionId) && <p>User Logged In</p>}
     </div>
     <style jsx>
        {
            `
            .cn {width: 100%; height: 95vh; display: flex; flex-direction: column; align-items: center; justify-content: center;}
            .cn__signin {position: fixed; top: 30px; right: 80px;}

            
            
            `
        }
     </style>
    </>
}


export default Home;