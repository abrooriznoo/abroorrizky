"use client";

import { Meteors } from "@/components/ui/meteors";

export default function BackgroundMeteors() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <Meteors number={40} />
    </div>
  );
}
