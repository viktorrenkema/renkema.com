import React from "react"

export default function Input(props) {
  const [focused, setFocused] = React.useState(false)

  const { onChange, value, id, ...other } = props

  const handleChange = React.useCallback(e => onChange(e.target.value), [
    onChange,
  ])

  // const handleFocus = () => setFocused(true)
  // const handleBlur = () => setTimeout(setFocused(false), 5000)

  return (
    <div className="wrap-labelinput">
      <input
        type="number"
        id={id}
        value={value}
        onChange={handleChange}
        {...other}
      ></input>
    </div>
  )
}
