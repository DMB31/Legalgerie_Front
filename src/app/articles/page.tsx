import ArticleCards from "@/components/ArticleCards"
import useFetch from "@/utils/useFetch"

export default async function ActualitesPage() {
  const data = await useFetch('http://localhost:3001/api/posts')

  const articles = data.docs

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#D4A574] text-sm font-medium mb-4">Actualités Législatives</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nos articles <span className="text-[#D4A574]">récents</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Des conseils pratiques et des réponses claires pour mieux comprendre vos droits et démarches juridiques.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {articles.map((article: any, index : any) => (
              <ArticleCards key={index} article={article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
