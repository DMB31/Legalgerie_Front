import { notFound } from "next/navigation"
import { env } from "process"

export async function useFetchBySlug(postType: string, slug : string) {
  const res = await fetch(`${env.PAYLAOD_BASE_URL}api/${postType}?where[slug][equals]=${slug}`)
  const data = await res.json()
    if (!res.ok) {
        notFound()
      }

  return data
}