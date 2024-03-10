export interface PhotoUrl {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}

export interface PhotoLink {
  self: string
  html: string
  download: string
  download_location: string
}

export interface Links {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following: string
  followers: string
}

export interface ProfileImage {
  small: string
  medium: string
  large: string
}

export interface Social {
  instagram_username: string
  portfolio_url: string
}

export interface UnsplashUser {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: string
  portfolio_url: string
  bio: string
  location: string
  links: Links
  profile_image: ProfileImage
  instagram_username: string
  total_collections: number
  total_likes: number
  total_photos: number
  total_promoted_photos: number
  accepted_tos: boolean
  for_hire: boolean
  social: Social
}

export interface IPhoto {
  id: string
  slug: string
  created_at: Date
  updated_at: Date
  width: number
  height: number
  color: string
  blur_hash: string
  description: string
  alt_description: string
  urls: PhotoUrl
  links: PhotoLink
  likes: number
  liked_by_user: boolean
  sponsorship: null
  user: UnsplashUser
}

export interface UnsplashResult {
  results: Array<IPhoto>
  total: 10011
  total_pages: 10011
}
