import React from "react"
import ReactDOM from "react-dom"
// import FirstAPP from "./FirstAPP"
import CounterApp from "./CounterApp"
import "./index.css"

const divRoot = document.querySelector("#root")
// ReactDOM.render(<FirstAPP congratsSayayin="Hi, I'm Kakaroto" />, divRoot)
ReactDOM.render(<CounterApp value={100} />, divRoot)
