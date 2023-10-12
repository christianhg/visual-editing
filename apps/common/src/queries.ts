import type {
  ImageAsset,
  ImageCrop,
  ImageHotspot,
  PortableTextTextBlock,
} from 'sanity'

export const shoesList = /* groq */ `*[_type == "shoe" && defined(slug.current)]{
  title,
  slug,
  price,
  "media": media[0]{ alt, asset, crop, hotspot },
  description,
  "brand": brandReference->{name, slug, logo{ alt, asset, crop, hotspot }},
}`
export type ShoesListResult = {
  title?: string | null
  slug: { current: string }
  price?: number | null
  media?: {
    alt?: string | null
    asset?: ImageAsset | null
    crop?: ImageCrop | null
    hotspot?: ImageHotspot | null
  } | null
  description?: PortableTextTextBlock[] | null
  brand?: {
    name?: string | null
    slug?: { current?: string | null } | null
    logo?: {
      alt?: string | null
      asset?: ImageAsset | null
      crop?: ImageCrop | null
      hotspot?: ImageHotspot | null
    } | null
  } | null
}[]