import forumIcon from '../assets/icons/forum.svg'
import uploadIcon from '../assets/icons/upload.svg'
import searchIcon from '../assets/icons/search.svg'

export const user = {
  name: 'Mr. Muhammad Umar',
  id: 'admin',
  email: 'umarndulib@gmail.com',
  location: 'SYK Library, NDU, E-9, Islamabad',
  role: 'Administrator',
  avatar: 'https://syklibrary.ndu.edu.pk/libmax/Administrator/Profile/umar_11zon.jpg',
}

export const overDueBooks = [
  { id: 1, title: 'Islamic Studies for CSS PMS PCS and All Others', dueDate: '2026-05-20', days: 16 },
  { id: 2, title: 'Trek to Pakistan',                               dueDate: '2026-05-22', days: 14 },
  { id: 3, title: 'Ghaibi Insaan',                                  dueDate: '2026-05-25', days: 11 },
  { id: 4, title: 'Wafa Ka Tazkira',                                dueDate: '2026-05-28', days: 8  },
  { id: 5, title: 'Military Geography',                             dueDate: '2026-05-30', days: 6  },
]

export const freshArrivals = [
  { id: 1,  title: 'Age of Intolerance: Global Populism and Decline of Democracy',   category: 'Politics'       },
  { id: 2,  title: 'Artificial Intelligence: A Modern Approach',                     category: 'Technology'     },
  { id: 3,  title: 'Atomic Dreams: The New Nuclear Evangelists',                     category: 'Science'        },
  { id: 4,  title: 'Boots on the Ground: Modern Land Warfare from Iraq to Ukraine',  category: 'Military'       },
  { id: 5,  title: 'Contemporary Asia: Continuities Challenges and Transformations', category: 'Geography'      },
  { id: 6,  title: 'Contemporary Leader: The Value of Inclusion in Leadership',      category: 'Leadership'     },
  { id: 7,  title: 'Contemporary Strategy Analysis',                                 category: 'Strategy'       },
  { id: 8,  title: 'Developing Cybersecurity Programs and Policies in AI Driven World', category: 'Cyber'       },
  { id: 9,  title: 'Dream Count: A Novel',                                           category: 'Fiction'        },
  { id: 10, title: 'Economy: Backbone of National Security',                         category: 'Economics'      },
  { id: 11, title: 'Emerging Topics in Pattern Recognition and Artificial Intelligence', category: 'Technology' },
  { id: 12, title: 'Feeling Climate Change: How Emotions Govern Our Responses',      category: 'Environment'    },
  { id: 13, title: 'Geopolitics: Framework and Dynamics in a Multipolar World',      category: 'Geopolitics'    },
  { id: 14, title: 'Global Politics: A New Introduction',                            category: 'Politics'       },
]

export const digitalCollection = [
  { id: 1, title: 'Foreign Policy - Fall 2024', type: 'Journal', size: '12.4 MB' },
  { id: 2, title: 'Defence Journal - March 2025', type: 'Journal', size: '8.2 MB' },
  { id: 3, title: 'ISSI Report Q1 2025', type: 'Report', size: '5.7 MB' },
]

export const periodicals = [
  { id: 1, title: 'Caravan',           type: 'Digital',  freq: 'Monthly'    },
  { id: 2, title: 'CISS Insight',      type: 'Print',    freq: 'Quarterly'  },
  { id: 3, title: 'Citadel',           type: 'Print',    freq: 'Bi-Annual'  },
  { id: 4, title: 'Criterion Quarterly',type: 'Digital', freq: 'Quarterly'  },
  { id: 5, title: 'Current Affairs',   type: 'Digital',  freq: 'Monthly'    },
]

export const navLinks = [
  { label: 'Dashboard',          icon: 'LayoutDashboard', section: 'dashboard'   },
  { label: 'Acquisition',        icon: 'ShoppingCart',    section: 'acquisition' },
  { label: 'Stock Taking',       icon: 'Package',         section: 'stocktaking' },
  { label: 'Circulation',        icon: 'RefreshCw',       section: 'circulation' },
  { label: 'Cataloguing',        icon: 'BookOpen',        section: 'cataloguing' },
  { label: 'Digital Resources',  icon: 'Monitor',         section: 'digital'     },
  { label: 'Migration',          icon: 'ArrowLeftRight',  section: 'migration'   },
  { label: 'Periodicals',        icon: 'Newspaper',       section: 'periodicals' },
  { label: 'Newspaper',          icon: 'FileText',        section: 'newspaper'   },
  { label: 'E-Resources Links',  icon: 'Link',            section: 'eresources'  },
  { label: 'Research Papers',    icon: 'GraduationCap',   section: 'research'    },
  { label: 'Feedback',           icon: 'MessageSquare',   section: 'feedback'    },
  { label: 'Library News',       icon: 'Rss',             section: 'news'        },
]

export const statsData = [
  {
    label: 'Forum',
    value: '-',
    delta: 'Open discussions',
    color: 'cyan',
    imageUrl: forumIcon,
  },
  {
    label: 'Upload',
    value: '-',
    delta: 'Upload resources',
    color: 'lime',
    imageUrl: uploadIcon,
  },
  {
    label: 'Search',
    value: '-',
    delta: 'Search catalogue',
    color: 'amber',
    imageUrl: searchIcon,
  },
]

export const circulationChart = [
  { month: 'Jan', issued: 310, returned: 290, overdue: 12 },
  { month: 'Feb', issued: 280, returned: 270, overdue: 8  },
  { month: 'Mar', issued: 350, returned: 330, overdue: 15 },
  { month: 'Apr', issued: 420, returned: 400, overdue: 10 },
  { month: 'May', issued: 390, returned: 375, overdue: 7  },
  { month: 'Jun', issued: 180, returned: 170, overdue: 5  },
]

export const categoryDistribution = [
  { name: 'Military',    value: 28 },
  { name: 'Politics',    value: 22 },
  { name: 'Technology',  value: 18 },
  { name: 'History',     value: 15 },
  { name: 'Fiction',     value: 10 },
  { name: 'Others',      value: 7  },
]
