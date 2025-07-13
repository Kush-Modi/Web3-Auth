import React, { useState, useEffect } from 'react';
import './App.css';
import { useAccount, useEnsName, useSignMessage } from 'wagmi';
import { verifyMessage } from 'ethers';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

function shortAddress(address: string) {
  return address.slice(0, 6) + '...' + address.slice(-4);
}

const features = [
  'No Email Needed',
  'No Passwords', 
  '100% Owned by You'
];

export default function App() {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { signMessageAsync, status } = useSignMessage();

  const [signState, setSignState] = useState<'idle' | 'success' | 'error'>('idle');
  const [verifying, setVerifying] = useState(false);
  const [welcomeName, setWelcomeName] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [hovered, setHovered] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 700);
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Simulate initial loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  const handleSignIn = async () => {
    setSignState('idle');
    setErrorMsg('');
    setVerifying(true);
    try {
      const msg = `Sign in to Web3-Auth at ${new Date().toISOString()}`;
      const signature = await signMessageAsync({ message: msg });
      const recovered = verifyMessage(msg, signature);
      if (recovered.toLowerCase() === address?.toLowerCase()) {
        setWelcomeName(ensName || (address ? shortAddress(address) : ''));
        setSignState('success');
      } else {
        setErrorMsg('Signature invalid or does not match your address.');
        setSignState('error');
      }
    } catch {
      setErrorMsg('Signature invalid or rejected.');
      setSignState('error');
    } finally {
      setVerifying(false);
    }
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-logo">
          <img src="/logo.png" alt="Web3-Auth Logo" />
        </div>
        <div className="loading-spinner"></div>
        <div className="loading-text">Initializing Web3-Auth...</div>
      </div>
    );
  }

  return (
    <div className="app-bg">
      <div className="neon-blur purple" />
      <div className="neon-blur green" />
      <div className="neon-blur orange" />
      <div className="neon-blur pink" />
      
      {/* Subtle particle effect */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${20 + Math.random() * 10}s`
          }} />
        ))}
      </div>

      <motion.nav 
        className="navbar"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="nav-brand">
          <img src="/logo.png" alt="Web3-Auth Logo" className="nav-logo" />
          <span className="nav-title">Web3-Auth</span>
        </div>
      </motion.nav>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero"
      >
        <h1>Login Without Google. Own Your Data.</h1>
        <p>Your identity secured by your wallet — private, decentralized, yours.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="features"
        style={{ flexDirection: isMobile ? 'column' : 'row' }}
      >
        {features.map((feature, i) => (
          <div key={feature} style={{ display: 'flex' }}>
            <Tilt glareEnable={false} tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.04} transitionSpeed={400} style={{ width: '100%' }}>
              <motion.div
                whileHover={{ scale: 1.04 }}
                className={"feature-card pulse-glow"}
                style={{
                  border: hovered === i ? '1.5px solid #7f5af0' : '',
                  boxShadow: hovered === i ? '0 8px 32px rgba(127,90,240,0.18)' : '',
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {feature}
              </motion.div>
            </Tilt>
          </div>
        ))}
      </motion.div>

      {isConnected ? (
        signState === 'success' ? (
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="success-card">
            <div className="card-title">Signature verified</div>
            <div className="card-text">Welcome {welcomeName}</div>
            <div className="card-small">Your data stays with you.</div>
          </motion.div>
        ) : signState === 'error' ? (
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="error-card">
            <div className="card-title">Signature invalid or rejected</div>
            <div className="card-text">{errorMsg}</div>
            <button className="sign-btn" onClick={() => setSignState('idle')}>Try Again</button>
          </motion.div>
        ) : (
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass-card">
            <div className="card-title">{ensName ? ensName : shortAddress(address!)}</div>
            <div className="card-small">No Google. No Facebook. Just your wallet.</div>
            <button className="sign-btn pulse-glow" onClick={handleSignIn} disabled={status === 'pending' || verifying}>
              {status === 'pending' || verifying ? 'Signing...' : 'Sign In with Ethereum'}
            </button>
          </motion.div>
        )
      ) : (
        <div className="connect-card pulse-glow">
          <ConnectButton showBalance={false} chainStatus="icon" accountStatus="address" label="Connect Wallet" />
        </div>
      )}

      <div className="app-footer">Powered by Ethereum · WalletConnect · RainbowKit</div>
      <motion.div className="privacy-section fade-in-section" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }} transition={{ duration: 0.8, delay: 0.2 }}>
        <div className="privacy-title">Why trust us? How is data stored?</div>
        <div className="privacy-text">We never store your personal data. All authentication happens in your browser. Your wallet, your data, your privacy. No tracking, no third-party logins, no compromise.</div>
      </motion.div>
    </div>
  );
}
