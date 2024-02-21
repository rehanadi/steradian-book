import { ReactNode } from "react"

const config: {
  state: {
    [key: string]: string
  }
} = {
  state: {
    primary: "btn-primary",
    secondary: "btn-secondary",
    info: "btn-info",
    danger: "btn-danger"
  }
}

export type ButtonFC = React.FC<{ 
  children: ReactNode
  state?: 'primary' | 'secondary' | 'info' | 'danger'
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement> 
}>

const Button: ButtonFC = ({ children, state = 'primary', className = '', onClick }) => {
  const combineClassName = [
    'btn',
    config.state[state],
    className
  ].join(' ')

  return (
    <button
      onClick={onClick} 
      className={combineClassName}
    >{children}</button>
  )
}

export default Button
