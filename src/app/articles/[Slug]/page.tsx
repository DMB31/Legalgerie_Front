import Image from "next/image";
import { RichText } from "@payloadcms/richtext-lexical/react";
import "./article.css";
type PageProps = {
  params: Promise<{ Slug: string }>;
};
const useFetch = async (uri: string) => {
  const data = await fetch(uri);
  if (!data.ok) {
    throw new Error("Failed to fetch");
  }
  const res = await data.json();
  console.log(res);
  return res;
};

async function getPosts(id: string) {
  return await useFetch(`http://192.168.0.210:3001/api/posts/${id}`);
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { Slug } = await params;

  const posts = await getPosts(Slug);

  const publish_date = new Date(posts.publierLe).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const titles = posts.contenu.root.children
    .filter((el: any) => {
      return el.type === "heading";
    })
    .map((el: any) => {
      return { text: el.children[0].text, tag: el.tag };
    });

  console.log("titles", titles);

  // Sample article data - in a real app, this would be fetched based on the slug

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#D4A574] text-sm font-medium mb-4"></p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              {posts.titre}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {
                "la vie de couple, les enfants, le patrimoine. Dans ces moments parfois délicats, il est essentiel d'être accompagné par un spécialiste compétent et à l'écoute."
              }
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative h-[300px] md:h-[400px] w-full">
              <Image
                src={posts.image.url || "/placeholder.svg"}
                alt={posts.image.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
              {/* Sidebar */}
              <aside className="lg:sticky lg:top-24 h-fit">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">Details</h3>
                  <div className="space-y-3 mb-6 text-sm">
                    <div>
                      <p className="font-semibold">Date</p>
                      <p className="text-gray-600">{publish_date}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Auteur</p>
                      <p className="text-gray-600">{posts.auteur.Nom}</p>
                    </div>
                  </div>

                  <h3 className="font-bold text-lg mb-4 pt-4 border-t">
                    Sommaire
                  </h3>
                  <nav className="space-y-2">
                    {titles.map((title: any, i: number) => {
                      return (
                        <button key={i} className="block text-left text-sm text-gray-600 hover:text-[#D4A574] transition-colors w-full">
                          {title.text} 
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </aside>

              {/* Main Content */}
              <article className="prose prose-lg max-w-none">
                <RichText data={posts.contenu} />
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
