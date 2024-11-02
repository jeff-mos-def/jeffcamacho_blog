export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'jeff-camacho',
  DESCRIPTION:
    'My personal site with my own thoughts: complete and incomplete.',
  EMAIL: 'jeff@jeffcamacho.com',
  NUM_POSTS_ON_HOMEPAGE: 4,
  POSTS_PER_PAGE: 3,
  SITEURL: 'https://astro-erudite.vercel.app',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/authors', label: 'authors' },
  { href: '/about', label: 'about' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/jeff-mos-def', label: 'GitHub' },
  { href: 'jeff@jeffcamacho.com', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]
