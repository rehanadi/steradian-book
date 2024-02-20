type ButtonFC = React.FC<{ 
  text?: string, className?: string, onClick: React.MouseEventHandler<HTMLButtonElement> 
}>

const Button: ButtonFC = ({ text = '', className = '', onClick }) => {
  return (
    <button
      onClick={onClick} 
      className={className}
    >{text}</button>
  )
}

export default Button