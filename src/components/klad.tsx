setTimeout(() => {
  setState(!state)
}, 2000)

React.useEffect(() => {
  var myEl = document.getElementById(id.toString())

  // console.log("State changed", myEl.getBoundingClientRect().x)
  if (myEl.getBoundingClientRect().x < 0.3 * viewportWidth) {
    console.log(showGradient[id] > showGradient[id - 1])

    let newArray = [(showGradient[id] = myEl.getBoundingClientRect().x)]
    // console.log(newArray)
    setShowGradient(newArray)
  }

  setViewportWidth(window.innerWidth)
}, [state])

console.log(showGradient)
// const closest = showGradient.reduce((a, b) => {
//   return Math.abs(b - 0.3 * viewportWidth) < Math.abs(a - 0.3 * viewportWidth)
//     ? b
//     : a
// })

// console.log("closest is: ", closest)

// {
//   roles.map((item, index) => {
//     let newArr = rolePositions
//     let myObj = { position: 0 }
//     newArr.push(myObj)
//     setRolePositions(newArr)
//     console.log(rolePositions)
//   })
// }
