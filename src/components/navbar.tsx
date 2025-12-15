"use client";

import { useEffect, useRef, useState } from "react";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [glow, setGlow] = useState({ x: 0, y: 0 });
  const lastScroll = useRef(0);

  /* ===============================
     Auto-hide on scroll
  =============================== */
  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setHidden(current > lastScroll.current && current > 80);
      lastScroll.current = current;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ===============================
     Cursor glow tracking
  =============================== */
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlow({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <>
      {/* ================= Dock ================= */}
      <div
        className={cn(
          "pointer-events-none fixed inset-x-0 bottom-0 z-40 mx-auto pb-4 flex justify-center",
          "transition-all duration-500 ease-out",
          hidden ? "translate-y-24 opacity-0" : "translate-y-0 opacity-100"
        )}
      >
        {/* Background blur reflection */}
        <div
          className="
            fixed inset-x-0 bottom-0 h-28
            bg-gradient-to-t from-background/90 via-background/60 to-transparent
            backdrop-blur-3xl
            [-webkit-mask-image:linear-gradient(to_top,black,transparent)]
          "
        />

        <Dock
          onMouseMove={onMouseMove}
          className={cn(
            "relative pointer-events-auto flex items-center gap-1 px-2",
            "h-14 sm:h-16",

            // Liquid glass base
            "rounded-2xl bg-white/10 dark:bg-black/30 backdrop-blur-3xl",

            // Border
            "border border-white/30 dark:border-white/10",

            // Depth shadow
            "shadow-[0_20px_60px_rgba(0,0,0,0.25)] dark:shadow-[0_20px_80px_rgba(0,0,0,0.6)]",

            // Top reflection
            "before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none",
            "before:bg-gradient-to-b before:from-white/40 before:to-transparent before:opacity-40"
          )}
          style={{
            backgroundImage: `
              radial-gradient(
                140px circle at ${glow.x}px ${glow.y}px,
                rgba(255,255,255,0.35),
                transparent 60%
              )
            `,
          }}
        >
          {/* MAIN NAV */}
          {DATA.navbar.map((item) => (
            <DockIcon key={item.href}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "group relative size-11 sm:size-12 rounded-xl",
                      "hover:bg-white/25 dark:hover:bg-white/10",
                      "transition-all duration-300 ease-out",

                      // Glow halo
                      "after:absolute after:inset-0 after:rounded-xl after:opacity-0",
                      "after:bg-white/40 after:blur-xl after:transition-opacity",
                      "group-hover:after:opacity-70"
                    )}
                  >
                    <item.icon
                      className="
                        size-5
                        opacity-80
                        transition-all duration-300
                        group-hover:opacity-100
                        group-hover:scale-110
                        group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]
                      "
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>{item.label}</TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

          <Separator orientation="vertical" className="h-7 bg-white/20" />

          {/* SOCIAL */}
          {Object.entries(DATA.contact.social)
            .filter(([_, social]) => social.navbar)
            .map(([name, social]) => (
              <DockIcon key={name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={social.url}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "group relative size-11 sm:size-12 rounded-xl",
                        "hover:bg-white/25 dark:hover:bg-white/10",
                        "transition-all duration-300",

                        // Glow
                        "after:absolute after:inset-0 after:rounded-xl after:opacity-0",
                        "after:bg-white/40 after:blur-xl",
                        "group-hover:after:opacity-70"
                      )}
                    >
                      <social.icon
                        className="
                          size-5
                          opacity-80
                          transition-all duration-300
                          group-hover:opacity-100
                          group-hover:scale-110
                          group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]
                        "
                      />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>{name}</TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}

          <Separator orientation="vertical" className="h-7 bg-white/20" />

          {/* THEME */}
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className="
                    group relative size-11 sm:size-12 rounded-xl
                    flex items-center justify-center
                    hover:bg-white/25 dark:hover:bg-white/10
                    transition-all duration-300
                  "
                >
                  <ModeToggle />
                </div>
              </TooltipTrigger>
              <TooltipContent>Theme</TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </div>

      {/* ================= Back to Top ================= */}
      <div className="fixed bottom-6 right-6 z-40">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#top"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "group relative size-10 rounded-lg",
                "hover:bg-white/25 dark:hover:bg-white/10",
                "transition-all duration-300"
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="
                  size-5
                  opacity-80
                  transition-all duration-300
                  group-hover:opacity-100
                  group-hover:-translate-y-1
                "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            </Link>
          </TooltipTrigger>
          <TooltipContent>Back to top</TooltipContent>
        </Tooltip>
      </div>
    </>
  );
}
