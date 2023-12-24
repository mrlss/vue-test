import filterByExpirationDay from './filterByExpirationDay'
import formatDate from './formatDate'
import getCategories from './getCategories'
import sortByOption from './sortByOption'

const mockData = [
  {
    title: 'Find new ways to travel north',
    publishDate: '2023-12-23T13:51:50.417Z',
    category: 'news',
    url: '/articles/4738.html'
  },
  {
    title: 'When will it become possible to use time travel in order to fix your earlier mistakes?',
    publishDate: '2023-12-21T12:18:10.317Z',
    category: 'essay',
    url: '/articles/7256.html'
  },
  {
    title: '10 ways to write better text',
    publishDate: '2023-12-23T09:00:32.200Z',
    category: 'news',
    url: '/articles/7247.html'
  },
  {
    title: 'Announcement: we have a new website category',
    publishDate: '2023-12-17T17:12:13.102Z',
    category: 'news',
    url: '/articles/1749.html'
  },
  {
    title: 'Weekly news',
    publishDate: '2023-12-29T00:23:15.276Z',
    category: 'news',
    url: '/articles/1538.html'
  },
  {
    title: 'In-depth travel guide for Tanzania',
    publishDate: '2023-12-31T11:12:43.003Z',
    category: 'essay',
    url: '/articles/2594.html'
  }
]

export { formatDate, getCategories, sortByOption, filterByExpirationDay, mockData }
