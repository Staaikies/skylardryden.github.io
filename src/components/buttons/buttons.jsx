export const Button = ({children, style, full, customClass, ...otherProps}) => {
  return (
    <button
      className={`button button--${style ? style : "primary"} ${full ? "button--full" : ""} ${customClass ? customClass : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}
// card-component-controls__control
export const ToggleButton = ({text, disabled, customClass, ...otherProps}) => {
  return (
  <label className={`toggle-button ${disabled ? "toggle-button--disabled" : ""} ${customClass ? customClass : ""}`}>
      {text}
      <input 
        type="checkbox" 
        className="toggle-button__checkbox  toggle-button__checkbox--colour" 
        disabled={disabled}
        {...otherProps}
        />
      <span className="toggle-button__checkmark"></span>
    </label>
  )
}