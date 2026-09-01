import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "text";
  size?: "sm" | "md" | "lg";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  forceState?: "default" | "hover" | "disabled";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "lg",
      leftIcon,
      rightIcon,
      forceState,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || forceState === "disabled";

    // Base sizing
    const sizeClasses = {
      sm: "h-[34px] px-3 text-xs gap-1.5 rounded-[10px]",
      md: "h-[40px] px-4 text-sm gap-2 rounded-[12px]",
      lg: "h-[44px] px-5 text-sm md:text-base gap-2 rounded-[12px]",
    }[size];

    // Variant style classes
    let variantClasses = "";

    if (variant === "primary") {
      if (forceState === "hover") {
        variantClasses = "bg-[#EA580C] text-white shadow-sm";
      } else if (isDisabled) {
        variantClasses = "bg-[#FFEEE5] text-[#FDBA74] cursor-not-allowed shadow-none";
      } else {
        variantClasses =
          "bg-[#F97316] hover:bg-[#EA580C] text-white active:scale-[0.98] shadow-sm hover:shadow transition-all duration-150";
      }
    } else if (variant === "secondary") {
      if (forceState === "hover") {
        variantClasses = "bg-[#FFEEE5] text-[#EA580C] border border-[#F97316]";
      } else if (isDisabled) {
        variantClasses = "bg-white text-[#FDBA74] border border-[#FED7AA] cursor-not-allowed opacity-75";
      } else {
        variantClasses =
          "bg-white hover:bg-[#FFEEE5] text-[#F97316] hover:text-[#EA580C] border border-[#FB923C] active:scale-[0.98] transition-all duration-150";
      }
    } else if (variant === "tertiary") {
      if (forceState === "hover") {
        variantClasses = "bg-[#F1F5F9] text-[#0F172A] border border-[#CBD5E1]";
      } else if (isDisabled) {
        variantClasses = "bg-white text-[#94A3B8] border border-[#E2E8F0] cursor-not-allowed";
      } else {
        variantClasses =
          "bg-white hover:bg-[#F1F5F9] text-[#0F172A] border border-[#E2E8F0] hover:border-[#CBD5E1] active:scale-[0.98] transition-all duration-150";
      }
    } else if (variant === "text") {
      if (forceState === "hover") {
        variantClasses = "text-[#EA580C] bg-[#FFEEE5]/40";
      } else if (isDisabled) {
        variantClasses = "text-[#FDBA74] cursor-not-allowed";
      } else {
        variantClasses =
          "text-[#F97316] hover:text-[#EA580C] hover:bg-[#FFEEE5]/30 active:scale-[0.98] transition-all duration-150 px-2";
      }
    }

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={`inline-flex items-center justify-center font-medium select-none outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] focus-visible:ring-offset-2 ${sizeClasses} ${variantClasses} ${className}`}
        {...props}
      >
        {leftIcon && <span className="inline-flex shrink-0 items-center">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="inline-flex shrink-0 items-center">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
