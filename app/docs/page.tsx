import { DocsContent } from "@/components/docs-content"
import { DocsSidebar } from "@/components/docs-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function DocsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            <DocsSidebar />
            <DocsContent />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
