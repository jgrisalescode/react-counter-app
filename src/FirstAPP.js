// Functional Components [The new way to create components in React]
import React from "react"
import PropType from "prop-types"

const FirstApp = ({ congratsSayayin, power }) => {
  const congrats = "Hello World!!"
  const numbers = 1254.548789
  const boolean = true
  const array = [1, 2, 3, 4, 5]
  const anObject = {
    name: "Julian",
    age: 40
  }
  return (
    <>
      <h1>{congrats}</h1>
      <h1>
        {congratsSayayin} and my power is: {power}
      </h1>
      <p>{numbers}</p>
      <p>{boolean}</p>
      <p>{array}</p>
      <p>{JSON.stringify(anObject)}</p>
      <pre>{JSON.stringify(anObject)}</pre>
    </>
  )
}

FirstApp.propTypes = {
  congratsSayayin: PropType.string.isRequired,
  power: PropType.number.isRequired
}

export default FirstApp
