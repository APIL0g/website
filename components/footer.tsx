"use client"

import { Github, Twitter, MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function Footer() {
  const { language } = useLanguage()

  const translations = {
    en: {
      tagline: "Open-source analytics that respects privacy",
      product: "Product",
      features: "Features",
      docs: "Documentation",
      download: "Download",
      resources: "Resources",
      github: "GitHub",
      community: "Community",
      contributing: "Contributing",
      company: "Company",
      about: "About",
      blog: "Blog",
      license: "MIT License",
      rights: "All rights reserved.",
    },
    ko: {
      tagline: "프라이버시를 존중하는 오픈소스 분석",
      product: "제품",
      features: "기능",
      docs: "문서",
      download: "다운로드",
      resources: "리소스",
      github: "GitHub",
      community: "커뮤니티",
      contributing: "기여하기",
      company: "회사",
      about: "소개",
      blog: "블로그",
      license: "MIT 라이선스",
      rights: "모든 권리 보유.",
    },
  }

  const t = translations[language]

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Apilog logo" width={32} height={32} className="w-8 h-8 rounded-lg" />
              <span className="font-bold text-xl">Apilog</span>
            </div>
            <p className="text-sm text-muted-foreground">{t.tagline}</p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/APIL0g/APILog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{t.product}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/#features" className="hover:text-foreground transition-colors">
                  {t.features}
                </a>
              </li>
              <li>
                <a href="/docs" className="hover:text-foreground transition-colors">
                  {t.docs}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/APIL0g/APILog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  {t.download}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{t.resources}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://github.com/APIL0g/APILog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  {t.github}
                </a>
              </li>
              <li>
                <a href="/community" className="hover:text-foreground transition-colors">
                  {t.community}
                </a>
              </li>
              <li>
                <a href="/community" className="hover:text-foreground transition-colors">
                  {t.contributing}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{t.company}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  {t.about}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  {t.blog}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/APIL0g/APILog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  {t.license}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Apilog. {t.rights}
        </div>
      </div>
    </footer>
  )
}
