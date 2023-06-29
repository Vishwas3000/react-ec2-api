export const UploadMetamaskUtil = async (userMailid, walletAddress) => {
  const data = {
    wallet_address: walletAddress,
    user_mail_id: userMailid,
  }
  console.log(data)

  const req = await fetch("http://13.234.122.138:3000/metamask-wallet/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  console.log("Upload metamask account", req)

  const res = await req.json()
  console.log(res)
}
