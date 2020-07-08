// Functional Components [The new way to create components in React]
import React from "react"

const FirstApp = ({ congratsSayayin = "If undefined Hi" }) => {
  const congrats = "Hello World!!"
  const numbers = 1254.548789
  const boolean = true
  const array = [1, 2, 3, 4, 5]
  const anObject = {
    name: "Julian",
    age: 40
  }
  console.log(congrats)
  return (
    <>
      <h1>{congrats}</h1>
      <h1>{congratsSayayin}</h1>
      <p>{numbers}</p>
      <p>{boolean}</p>
      <p>{array}</p>
      <p>{JSON.stringify(anObject)}</p>
      <pre>{JSON.stringify(anObject)}</pre>
    </>
  )
}

export default FirstApp
