import '../global.css'
import { Inter } from '@next/font/google'
import { PrivyProvider } from '@privy-io/react-auth';
import { ClerkProvider } from '@clerk/nextjs';
const inter = Inter({ 
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'] 
})

function MyApp({ Component, pageProps }) {
  return <>
  {/*  <main className={inter.className}>
     <Component {...pageProps} />
  </main> */}

  <ClerkProvider {...pageProps} >
       <main className={inter.className}> <Component {...pageProps} /></main>
    </ClerkProvider> 
  </>
    
    
}

export default MyApp