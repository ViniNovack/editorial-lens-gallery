import { ReactNode } from "react";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
  noPadding?: boolean;
  headerRevealMode?: boolean;
}

export function Layout({ 
  children, 
  noPadding = false,
  headerRevealMode = false,
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header revealMode={headerRevealMode} />
      <main className={`flex-1 ${noPadding ? '' : 'pt-20 md:pt-24'}`}>
        {children}
      </main>
    </div>
  );
}
