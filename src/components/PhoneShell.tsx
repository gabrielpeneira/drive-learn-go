import { ReactNode } from "react";

export function PhoneShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-background overflow-x-hidden">
      <div className="pb-28">{children}</div>
    </div>
  );
}
