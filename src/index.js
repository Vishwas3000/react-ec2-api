import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

const meta = document.createElement("meta")
meta.httpEquiv = "Content-Security-Policy"
meta.content = "upgrade-insecure-requests"
document.head.appendChild(meta)

ReactDOM.render(
  <>
    <div
      className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500"
      id="background"
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </div>
    <div id="root"></div>
  </>,
  document.getElementById("root")
)

// Apply the background style to the body element
document.body.style.background = "none"
document.getElementById("background").style.position = "fixed"
document.getElementById("background").style.width = "100%"
document.getElementById("background").style.height = "100%"
document.getElementById("background").style.top = "0"
document.getElementById("background").style.left = "0"
document.getElementById("background").style.zIndex = "-1"

reportWebVitals()
