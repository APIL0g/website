"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Languages , Menu } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/lib/language-context"
import { Sheet, SheetContent, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

export function Header() {
  const { language, setLanguage } = useLanguage()

  const translations = {
    en: {
      features: "Features",
      docs: "Documentation",
      community: "Community",
      github: "GitHub",
      download: "Download",
      menuTitle: "Apilog",
      menuDescription: "Choose a destination to keep exploring.",
      languageToggle: "View site in Korean",
    },
    kr: {
      features: "기능",
      docs: "문서",
      community: "커뮤니티",
      github: "GitHub",
      download: "다운로드",
      menuTitle: "Apilog",
      menuDescription: "이동할 메뉴를 선택하세요.",
      languageToggle: "영어로 보기",
    },
  }

  const languageLabels: Record<"en" | "kr", string> = {
    en: "English",
    kr: "한국어",
  }

  const t = translations[language]
  const nextLanguage = language === "en" ? "kr" : "en"

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
              <Button variant="ghost" size="sm" className="gap-2" aria-label="Select language">
                <Languages className="h-5 w-5" />
                <span className="text-sm font-medium">{languageLabels[language]}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("en")}>English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("kr")}>한국어</DropdownMenuItem>
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
            <SheetContent className="bg-background/95 backdrop-blur flex h-full flex-col px-6 pb-10 pt-6">
              <div className="flex items-center gap-3">
                <Image src="/logo.png" alt="Apilog logo" width={40} height={40} className="rounded-lg" />
                <div>
                  <SheetTitle className="text-xl font-semibold">{t.menuTitle}</SheetTitle>
                  <SheetDescription className="text-sm text-muted-foreground">
                    {t.menuDescription}
                  </SheetDescription>
                </div>
              </div>
              <nav className="mt-10 flex flex-col gap-3">
                <a
                  href="/#features"
                  className="rounded-xl border border-border/60 px-4 py-3 text-lg font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {t.features}
                </a>
                <a
                  href="/docs"
                  className="rounded-xl border border-border/60 px-4 py-3 text-lg font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {t.docs}
                </a>
                <a
                  href="https://github.com/APIL0g/APILog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-border/60 px-4 py-3 text-lg font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {t.github}
                </a>
                <a
                  href="/community"
                  className="rounded-xl border border-border/60 px-4 py-3 text-lg font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {t.community}
                </a>
              </nav>
              <Separator className="my-6" />
              <div className="flex flex-col gap-3">
                <Button asChild className="w-full">
                  <a href="https://github.com/APIL0g/APILog" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    {t.download}
                  </a>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full justify-between"
                  onClick={() => setLanguage(nextLanguage)}
                >
                  <span>{t.languageToggle}</span>
                  <Languages className="h-4 w-4" />
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
