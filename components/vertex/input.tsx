import React from "react";
import { SearchIcon, ChevronDownIcon } from "./icons";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  rightElement?: React.ReactNode;
  wrapperClassName?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", leftIcon, rightElement, wrapperClassName = "", ...props }, ref) => {
    return (
      <div className={`relative flex items-center w-full ${wrapperClassName}`}>
        {leftIcon && (
          <div className="absolute left-3.5 flex items-center pointer-events-none text-[#64748B]">
            {leftIcon}
          </div>
        )}
        <input
          ref={ref}
          className={`h-[44px] w-full rounded-[12px] border border-[#E2E8F0] bg-white px-4 text-sm text-[#0F172A] placeholder:text-[#64748B] outline-none transition-all duration-150 focus:border-[#FB923C] focus:ring-2 focus:ring-[#FB923C]/20 disabled:cursor-not-allowed disabled:bg-[#F1F5F9] disabled:text-[#94A3B8] ${
            leftIcon ? "pl-11" : ""
          } ${rightElement ? "pr-14" : ""} ${className}`}
          {...props}
        />
        {rightElement && (
          <div className="absolute right-3 flex items-center">{rightElement}</div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export interface SearchInputProps extends Omit<InputProps, "leftIcon" | "rightElement"> {
  shortcut?: string;
  onClear?: () => void;
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ shortcut = "⌘ K", placeholder = "Search anything...", className = "", ...props }, ref) => {
    return (
      <Input
        ref={ref}
        type="search"
        placeholder={placeholder}
        leftIcon={<SearchIcon size={18} />}
        rightElement={
          shortcut ? (
            <kbd className="inline-flex h-6 items-center justify-center rounded-[6px] border border-[#E2E8F0] bg-[#FAFAFC] px-2 text-[11px] font-medium text-[#64748B] shadow-xs">
              {shortcut}
            </kbd>
          ) : null
        }
        className={className}
        {...props}
      />
    );
  }
);

SearchInput.displayName = "SearchInput";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: Array<{ label: string; value: string | number }>;
  wrapperClassName?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, children, className = "", wrapperClassName = "", ...props }, ref) => {
    return (
      <div className={`relative flex items-center w-full ${wrapperClassName}`}>
        <select
          ref={ref}
          className={`h-[44px] w-full appearance-none rounded-[12px] border border-[#E2E8F0] bg-white pl-4 pr-10 text-sm font-medium text-[#0F172A] outline-none transition-all duration-150 focus:border-[#FB923C] focus:ring-2 focus:ring-[#FB923C]/20 disabled:cursor-not-allowed disabled:bg-[#F1F5F9] disabled:text-[#94A3B8] cursor-pointer ${className}`}
          {...props}
        >
          {options
            ? options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))
            : children}
        </select>
        <div className="absolute right-3.5 pointer-events-none text-[#64748B]">
          <ChevronDownIcon size={18} />
        </div>
      </div>
    );
  }
);

Select.displayName = "Select";
