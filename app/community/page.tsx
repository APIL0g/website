import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CommunityContent } from "@/components/community-content"

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CommunityContent />
      <Footer />
    </div>
  )
}
