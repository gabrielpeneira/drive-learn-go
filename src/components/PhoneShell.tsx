import { ReactNode } from "react";

export function PhoneShell({ children, hideNav }: { children: ReactNode; hideNav?: boolean }) {
  return (
    <div className="min-h-screen w-full bg-gradient-hero flex items-start justify-center">
      <div className="relative w-full max-w-md min-h-screen bg-background overflow-hidden">
        <div className="pb-28">{children}</div>
      </div>
    </div>
  );
}
