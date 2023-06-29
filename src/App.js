import React from "react"
import "./App.css"
import { UploadMetamaskUtil } from "./utils/api"
import { useState, useEffect } from "react"
import { ethers } from "ethers"

function App() {
  const [walletAddress, setWalletAddress] = useState()
  const [userMailid, setUserMailid] = useState()
  const [isConnected, setIsConnected] = useState(false)
  const [isMetamaskAvailable, setIsMetamaskAvailable] = useState(false)

  function checkIfMetamaskAvailable() {
    const { ethereum } = window

    if (!ethereum || !ethereum.isMetaMask) {
      console.log("Make sure you have metamask!")
      return false
    }

    return ethereum.selectedAddress !== null
  }

  async function connectMetaMask() {
    try {
      await window.ethereum.enable()

      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const address = await signer.getAddress()
      setWalletAddress(address)

      console.log("Connected address:", address)
      setIsConnected(true)
    } catch (error) {
      console.error("Error connecting MetaMask:", error)
    }
  }

  useEffect(() => {
    const checkMetamask = () => {
      const connected = checkIfMetamaskAvailable()
      setIsConnected(connected)
    }
    checkMetamask()
  }, [])

  const handleUploadMetamaskToServer = async () => {
    UploadMetamaskUtil(userMailid, walletAddress)
  }
  return (
    <div>
      <div className=" p-10 text-white font-bold text-3xl">API Test</div>
      <div>
        {isConnected ? (
          <div className=" flex flex-col p-5 w-1/3 space-y-5">
            <input
              type="text"
              className="border border-gray-300 rounded px-4 py-2"
              placeholder="Enter EmailId..."
              value={userMailid}
              onChange={(event) => setUserMailid(event.target.value)}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-2/3"
              onClick={handleUploadMetamaskToServer}
            >
              Upload Metamask
            </button>
          </div>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/6"
            onClick={connectMetaMask}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  )
}

export default App
