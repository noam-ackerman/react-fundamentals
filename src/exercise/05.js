// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

//exercise 
/*const smallBox = <div className="box box--small" style={{fontStyle: "italic", backgroundColor: "lightblue"}}>small lightblue box</div>
const mediumBox = <div className="box box--medium"  style={{fontStyle: "italic", backgroundColor: "pink"}}>medium pink box</div>
const largeBox = <div className="box box--large" style={{fontStyle: "italic", backgroundColor: "orange"}}>large orange box</div>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}*/

// extra credit 1 + 2

function Box(props) {
  let sizeClass = props.size ? `box--${props.size}` : '';
 return <div className={`box ${sizeClass}`} style={{fontStyle: "italic", ...props.style}}>{props.text}</div>
}

function App() {
  return (
    <>
   <Box text="small lightblue box" size="small" style={{backgroundColor:"lightblue"}}/>
   <Box text="medium pink box" size="medium" style={{backgroundColor:"pink"}}/>
   <Box text="large orange box"  size="large" style={{backgroundColor:"orange"}}/>
    </>
  )
}

export default App
