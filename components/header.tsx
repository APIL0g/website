"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Globe, Menu } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/lib/language-context"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const { language, setLanguage } = useLanguage()

  const translations = {
    en: {
      features: "Features",
      docs: "Documentation",
      community: "Community",
      github: "GitHub",
      download: "Download",
    },
    ko: {
      features: "기능",
      docs: "문서",
      community: "커뮤니티",
      github: "GitHub",
      download: "다운로드",
    },
  }

  const t = translations[language]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Apilog logo" width={32} height={32} className="w-8 h-8 rounded-lg" />
            <span className="font-bold text-xl">Apilog</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.features}
            </a>
            <a href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.docs}
            </a>
            <a
              href="https://github.com/APIL0g/APILog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.github}
            </a>
            <a href="/community" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.community}
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("en")}>English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("ko")}>한국어</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button asChild className="hidden sm:inline-flex">
            <a href="https://github.com/APIL0g/APILog" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              {t.download}
            </a>
          </Button>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4 mt-8">
                <a href="/#features" className="text-lg hover:text-accent transition-colors">
                  {t.features}
                </a>
                <a href="/docs" className="text-lg hover:text-accent transition-colors">
                  {t.docs}
                </a>
                <a
                  href="https://github.com/APIL0g/APILog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-accent transition-colors"
                >
                  {t.github}
                </a>
                <a href="/community" className="text-lg hover:text-accent transition-colors">
                  {t.community}
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
