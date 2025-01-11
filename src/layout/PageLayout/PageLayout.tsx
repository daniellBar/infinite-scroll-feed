import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => (
  <div className="flex flex-col min-h-screen p-layout">{children}</div>
);
