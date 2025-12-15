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
  const lastScroll = useRef(0);

  /* ===============================
     Seamless glow state (inertia)
  =============================== */
  const glow = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const [, force] = useState(0);

  useEffect(() => {
    let raf: number;

    const animate = () => {
      glow.current.x += (target.current.x - glow.current.x) * 0.12;
      glow.current.y += (target.current.y - glow.current.y) * 0.12;
      force((v) => v + 1);
      raf = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

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
     Cursor tracking
  =============================== */
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    target.current.x = e.clientX - rect.left;
    target.current.y = e.clientY - rect.top;
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

        <div onMouseMove={onMouseMove}>
          <Dock
            className={cn(
              "relative pointer-events-auto flex items-center gap-1 px-2",
              "h-14 sm:h-16",

              // Frosted glass
              "rounded-2xl bg-gray-400/5 dark:bg-black/30",
              "backdrop-blur-[18px] saturate-[1.25]",

              // Border
              "border border-gray-700/30 dark:border-white/10",

              // Depth
              "shadow-[0_30px_80px_rgba(0,0,0,0.35)] dark:shadow-[0_30px_120px_rgba(0,0,0,0.65)]",

              // Reflection
              "before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none",
              "before:bg-gradient-to-b before:from-white/35 before:to-transparent before:opacity-40",

              // ❄️ Noise glass
              "after:absolute after:inset-0 after:rounded-2xl after:pointer-events-none",
              "after:bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)]",
              "after:bg-[length:4px_4px]",
              "after:opacity-[0.18] after:mix-blend-overlay"
            )}
            style={{
              backgroundImage: `
                radial-gradient(
                  180px circle at ${glow.current.x}px ${glow.current.y}px,
                  rgba(255,255,255,0.38),
                  transparent 48%
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

            <Separator
              orientation="vertical"
              className="h-7 bg-gray-700/30 dark:bg-white/20"
            />

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

            <Separator
              orientation="vertical"
              className="h-7 bg-gray-700/30 dark:bg-white/20"
            />

            {/* THEME */}
            <DockIcon>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="group relative size-11 sm:size-12 rounded-xl flex items-center justify-center hover:bg-white/25 dark:hover:bg-white/10 transition-all duration-300">
                    <ModeToggle />
                  </div>
                </TooltipTrigger>
                <TooltipContent>Theme</TooltipContent>
              </Tooltip>
            </DockIcon>
          </Dock>
        </div>
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
                className="size-5 opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-1"
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
