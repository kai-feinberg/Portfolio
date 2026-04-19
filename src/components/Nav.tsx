"use client"

import { useState, useEffect } from "react"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu"
import { Zap, Menu, X } from "lucide-react"
import Link from "next/link"
import { Moon, Sun } from "lucide-react"

export default function Nav() {

  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.body.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.body.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      if (newMode) {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  const handleScroll = (id: string) => {
    setIsMobileMenuOpen(false);
    if (window.location.pathname !== "/") {
      window.location.href = `/?scrollTo=${id}`;
    } else if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { label: "Home", target: "hero" },
    { label: "Work", target: "work" },
    { label: "Case studies", target: "case-studies" },
    { label: "More builds", target: "projects" },
  ];

  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-14 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold" prefetch={false}>
          <Zap className="h-6 w-6" />
          <span>Kai Feinberg</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.target}>
                  <button
                    onClick={() => handleScroll(item.target)}
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    {item.label}
                  </button>
                </NavigationMenuItem>
              ))}
             
              <NavigationMenuItem>
                <button
                  onClick={() => toggleTheme()}
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-accent transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => handleScroll(item.target)}
                className="w-full text-left px-4 py-3 rounded-md hover:bg-accent transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => toggleTheme()}
              className="w-full text-left px-4 py-3 rounded-md hover:bg-accent transition-colors font-medium flex items-center gap-2"
            >
              {isDarkMode ? (
                <><Sun className="h-5 w-5" /> Light Mode</>
              ) : (
                <><Moon className="h-5 w-5" /> Dark Mode</>
              )}
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
