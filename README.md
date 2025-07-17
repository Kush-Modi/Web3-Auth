
# 🦊 MyWeb3App

> **Login Without Google. Own Your Data.**  
> Your identity secured by your wallet — private, decentralized, yours.

---

## 🌐 About the Project

**MyWeb3App** is a modern Web3 authentication app that lets users sign in **without Google, Facebook, or passwords**.  
It uses Ethereum wallets and cryptographic signatures to prove identity — **completely decentralized, privacy-preserving, and user-owned.**

✨ **Features:**
- 🔑 Login via Ethereum wallet (MetaMask, Rainbow, WalletConnect)
- ✅ Sign-in verification with cryptographic signatures
- 🔒 No centralized database or email — your wallet **is your identity**
- 🪞 Elegant glassmorphism + neon UI
- 🌈 Fully responsive (desktop & mobile)
- 🚀 Built with React, RainbowKit, Wagmi, Framer Motion, ethers.js & Parallax Tilt

## 🖼️ Screenshots

<img width="1861" height="917" alt="Screenshot 2025-07-11 160022" src="https://github.com/user-attachments/assets/0783da9d-a651-46cf-aab4-56004e465e52" />

<img width="1191" height="724" alt="Screenshot 2025-07-11 160039" src="https://github.com/user-attachments/assets/df90664b-79b3-497d-94a5-58ce14ffd3d0" />


## 🛠️ Tech Stack

| Frontend   | Web3 & Auth | UI/UX        | Animations |
|------------|-------------|--------------|------------|
| React      | ethers.js   | CSS3         | Framer Motion |
| TypeScript | wagmi       | RainbowKit   | Parallax Tilt |
| RainbowKit | WalletConnect | Glassmorphism & Neon effects | |

---

## ⚙️ Installation & Running Locally

### 1️⃣ Clone the repo
\`\`\`bash
git clone https://github.com/your-username/myweb3app.git
cd myweb3app
\`\`\`

### 2️⃣ Install dependencies
\`\`\`bash
npm install
# or
yarn install
\`\`\`

### 3️⃣ Run the app
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

The app should now be running on:
\`\`\`
http://localhost:5173
\`\`\`

---

## 🧩 Usage

### 🔗 Connect Wallet
- Click **"Connect Wallet"** to use MetaMask, Rainbow, or WalletConnect.

### ✍️ Sign Message
- Click **"Sign In with Ethereum"**.
- This cryptographically signs a message proving wallet ownership.

### ✅ Verified
- Your address is verified client-side.
- No data leaves your browser.  
- You’ll see a **success** card with your ENS or short address.

---

## 📂 Project Structure

\`\`\`
src/
│
├── App.tsx      # Main component
├── App.css      # Styling
├── main.tsx     # Entry point
└── ...
\`\`\`

### 🏗️ Core Libraries
- **[wagmi](https://wagmi.sh/)**: Ethereum React hooks
- **[ethers.js](https://docs.ethers.io/)**: Ethereum cryptography & signing
- **[@rainbow-me/rainbowkit](https://rainbowkit.com/)**: Wallet UI & connectors
- **[framer-motion](https://www.framer.com/motion/)**: Animations
- **[react-parallax-tilt](https://github.com/mkosir/react-parallax-tilt)**: Tilt hover effect

---

## 🔐 Security & Privacy

✅ **No passwords or emails stored**  
✅ **No centralized database**  
✅ **Verification happens client-side via \`verifyMessage\`**  
✅ **Your wallet is your private login key.**


## 🙌 Contributing

Pull requests are welcome!  
If you’d like to add a feature or fix a bug, please open an issue first to discuss it.

---

## 📝 License

This project is open source under the **MIT License**.  
Feel free to fork, modify, and build your own.


🎉 **Enjoy building truly decentralized apps with Web3!**  
_If you like it, star ⭐ the repo and share!_
