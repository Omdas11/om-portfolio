"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input or textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key.toLowerCase() === "t") {
        setTheme(theme === "dark" ? "light" : "dark");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [theme, setTheme]);

  if (!mounted) {
    return (
      <button className="fixed top-4 right-4 p-2 md:top-6 md:right-6 rounded-full bg-card border border-border shadow-sm text-muted-foreground w-10 h-10 flex items-center justify-center opacity-0 transition-opacity">
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-4 right-4 md:top-6 md:right-6 z-50 p-2 rounded-full bg-card border border-border shadow-sm text-muted-foreground hover:text-emerald-500 hover:border-emerald-500/50 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500"
      title="Press 'T' to toggle theme"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
