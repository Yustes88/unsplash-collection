export const siteConfig = {
  title: 'Unsplash Collection',
  description: `Explore awesome pics in our Unsplash Marvels. Get inspired by stunning images handpicked for your creative spark.Boost your projects with these amazing visuals!`,
  icons: [{rel: 'icon', url: '/favicon.ico'}],
}

export const ORIGIN = process.env.NEXT_PUBLIC_VERCEL_URL
  ? process.env.NEXT_PUBLIC_VERCEL_URL
  : 'http://localhost:3000'
