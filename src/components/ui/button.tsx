import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const baseClasses = "rounded transition-colors font-medium"
    const variantClasses = {
      default: "bg-primary text-white hover:bg-primary/90",
      outline: "border border-primary text-primary hover:bg-primary hover:text-white"
    }
    const sizeClasses = {
      default: "px-4 py-2",
      sm: "px-3 py-1.5 text-sm",
      lg: "px-6 py-3 text-lg"
    }

    return (
      <button
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button }
