import React from "react"

export default function Input(props) {
  const [focused, setFocused] = React.useState(false)

  const { onChange, value } = props

  const handleChange = React.useCallback(e => onChange(e.target.value), [
    onChange,
  ])

  const handleFocus = () => setFocused(true)
  const handleBlur = () => setTimeout(setFocused(false), 5000)

  return (
    <div className="wrap-labelinput">
      <input
        type="number"
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      ></input>
    </div>
  )
}
