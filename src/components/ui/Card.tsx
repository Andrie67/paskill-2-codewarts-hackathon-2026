import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<"div"> {
  variant?: 'elevated' | 'outline' | 'flat';
  selected?: boolean;
}

export function Card({
  className,
  variant = 'elevated',
  selected = false,
  children,
  ...props
}: CardProps) {
  const variants = {
    elevated: "bg-white shadow-sm border border-gray-100",
    outline: "bg-white border-2 border-gray-200",
    flat: "bg-gray-50 border border-transparent",
  };

  return (
    <motion.div
      whileTap={props.onClick ? { scale: 0.98 } : undefined}
      className={cn(
        "rounded-2xl p-4 transition-all",
        variants[variant],
        selected && "border-primary bg-blue-50/50 shadow-md ring-1 ring-primary",
        props.onClick && "cursor-pointer hover:shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
