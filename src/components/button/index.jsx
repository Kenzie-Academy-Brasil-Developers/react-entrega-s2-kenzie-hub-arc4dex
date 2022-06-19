

import { ThemeButton } from "./styles"

function Button({ children, color = false, ...rest}){

  return(
    <ThemeButton color={color} {...rest}>
      {children}
    </ThemeButton>
  )
}

export default Button