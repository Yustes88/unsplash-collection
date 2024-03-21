export const siteConfig = {
  title: 'Unsplash Collection',
  description: `Explore awesome pics in our Unsplash Marvels. Get inspired by stunning images handpicked for your creative spark.Boost your projects with these amazing visuals!`,
  icons: [{rel: 'icon', url: '/favicon.ico'}],
}

export const ORIGIN =
  process.env.NODE_ENV === 'production'
    ? 'https://unsplash-collection.vercel.app'
    : 'http://localhost:3000'
