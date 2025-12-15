"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  style?: React.CSSProperties; // ✅ support inline style (glow, gradient, dll)
  magnification?: number;
  distance?: number;
  children: React.ReactNode;
}

export interface DockIconProps {
  size?: number;
  magnification?: number;
  distance?: number;
  mousex?: any;
  className?: string;
  children?: React.ReactNode;
}

/* -------------------------------------------------------------------------- */
/*                                  CONSTANTS                                 */
/* -------------------------------------------------------------------------- */

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

/* -------------------------------------------------------------------------- */
/*                                  VARIANTS                                  */
/* -------------------------------------------------------------------------- */

const dockVariants = cva(
  "mx-auto w-max h-full p-2 flex items-end rounded-full border"
);

/* -------------------------------------------------------------------------- */
/*                                    DOCK                                    */
/* -------------------------------------------------------------------------- */

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      style,
      children,
      magnification = DEFAULT_MAGNIFICATION,
      distance = DEFAULT_DISTANCE,
      ...props
    },
    ref
  ) => {
    const mousex = useMotionValue(Infinity);

    const renderChildren = () =>
      React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            mousex,
            magnification,
            distance,
          });
        }
        return child;
      });

    return (
      <motion.div
        ref={ref}
        style={style}
        onMouseMove={(e) => mousex.set(e.pageX)}
        onMouseLeave={() => mousex.set(Infinity)}
        className={cn(dockVariants({ className }))}
        {...props}
      >
        {renderChildren()}
      </motion.div>
    );
  }
);

Dock.displayName = "Dock";

/* -------------------------------------------------------------------------- */
/*                                 DOCK ICON                                  */
/* -------------------------------------------------------------------------- */

const DockIcon = ({
  size,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mousex,
  className,
  children,
  ...props
}: DockIconProps) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const distanceCalc = useTransform(mousex, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: 0,
    };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [40, magnification, 40]
  );

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

DockIcon.displayName = "DockIcon";

/* -------------------------------------------------------------------------- */
/*                                   EXPORTS                                  */
/* -------------------------------------------------------------------------- */

export { Dock, DockIcon, dockVariants };
