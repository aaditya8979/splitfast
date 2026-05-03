import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SplitFast',
    short_name: 'SplitFast',
    description:
      'The smartest way to split bills with flatmates, friends, and travel buddies. UPI settlements, real-time sync, no login required.',
    start_url: '/groups',
    id: '/groups',
    display: 'standalone',
    background_color: '#FAFAF9',
    theme_color: '#4F46E5',
    icons: [
      {
        src: '/logo/48x48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/logo/64x64.png',
        sizes: '64x64',
        type: 'image/png',
      },
      {
        src: '/logo/128x128.png',
        sizes: '128x128',
        type: 'image/png',
      },
      {
        src: '/logo/144x144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        src: '/logo/192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo/256x256.png',
        sizes: '256x256',
        type: 'image/png',
      },
      {
        src: '/logo/512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/logo/512x512-maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
