import { transliterate as tr, slugify } from 'transliteration';

export function createSlug(title: string): string {
  const transliterate = tr(title)

  return slugify(transliterate)
}
