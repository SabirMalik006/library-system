import { BookOpen, Users, TrendingUp, HardDrive } from 'lucide-react'
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
  joinDate: 'Jan 2020',
  department: 'Library Services',
}

export const overDueBooks = [
  { id: 1, title: 'Islamic Studies for CSS PMS PCS and All Others', dueDate: '2026-05-20', days: 16, member: 'Ali Khan' },
  { id: 2, title: 'Trek to Pakistan',                               dueDate: '2026-05-22', days: 14, member: 'Sara Ahmed' },
  { id: 3, title: 'Ghaibi Insaan',                                  dueDate: '2026-05-25', days: 11, member: 'Usman Riaz' },
  { id: 4, title: 'Wafa Ka Tazkira',                                dueDate: '2026-05-28', days: 8,  member: 'Fatima Noor' },
  { id: 5, title: 'Military Geography',                             dueDate: '2026-05-30', days: 6,  member: 'Hamza Ali' },
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
  { id: 4, title: 'Strategic Studies Quarterly', type: 'Journal', size: '15.1 MB' },
  { id: 5, title: 'NDU Research Brief 2025', type: 'Report', size: '3.4 MB' },
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
    label: 'Total Books',
    value: 24680,
    delta: '+1,240 this year',
    color: 'blue',
    imageUrl: null,
    icon: BookOpen,
  },
  {
    label: 'Active Members',
    value: 5840,
    delta: '+320 this quarter',
    color: 'green',
    imageUrl: null,
    icon: Users,
  },
  {
    label: 'Issued Today',
    value: 127,
    delta: '12 overdue',
    color: 'amber',
    imageUrl: null,
    icon: TrendingUp,
  },
  {
    label: 'Digital Resources',
    value: 15200,
    delta: '+890 this month',
    color: 'purple',
    imageUrl: null,
    icon: HardDrive,
  },
  {
    label: 'Forum',
    value: '-',
    delta: 'Open discussions',
    color: 'blue',
    imageUrl: forumIcon,
  },
  {
    label: 'Upload',
    value: '-',
    delta: 'Upload resources',
    color: 'green',
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

export const recentActivity = [
  { id: 1, action: 'Book Issued', item: 'Artificial Intelligence: A Modern Approach', user: 'Ahmed Hassan', time: '2 min ago', type: 'issue' },
  { id: 2, action: 'Book Returned', item: 'Contemporary Strategy Analysis', user: 'Sana Malik', time: '15 min ago', type: 'return' },
  { id: 3, action: 'New Member', item: 'Dr. Faisal Khan registered', user: '', time: '1 hour ago', type: 'member' },
  { id: 4, action: 'Overdue Notice', item: 'Islamic Studies for CSS', user: 'Ali Khan', time: '2 hours ago', type: 'overdue' },
  { id: 5, action: 'Book Acquired', item: 'Geopolitics in a Multipolar World', user: 'Acquisition Dept', time: '3 hours ago', type: 'acquire' },
]

export const libraryNews = [
  { id: 1, title: 'Summer Reading Program Launched', excerpt: 'Join our summer reading challenge. Prizes for top readers!', date: 'June 5, 2026', tag: 'Event' },
  { id: 2, title: 'New Database Access', excerpt: 'Access to JSTOR and ProQuest now available for all members.', date: 'June 3, 2026', tag: 'Resource' },
  { id: 3, title: 'Maintenance Notice', excerpt: 'Library catalog will be offline June 10, 2-4 AM for upgrades.', date: 'June 1, 2026', tag: 'Notice' },
]

export const suppliers = [
  { id: 1, name: 'A & Z Enterprises' },
  { id: 2, name: 'A B C, Lahore' },
  { id: 3, name: 'ABSCO Books and Subscription Services' },
  { id: 4, name: 'Academic Book Corporation' },
  { id: 5, name: 'Adm Offr Ministry of Defence' },
  { id: 6, name: 'Advance Publications' },
  { id: 7, name: 'Aero Asian Book Co' },
  { id: 8, name: 'Afrasiab Collection' },
  { id: 9, name: 'Al-Ehsan Newspaper Agency(M. Hussain)' },
  { id: 10, name: 'Ali Publishing Company' },
  { id: 11, name: 'Allied Book Co' },
  { id: 12, name: 'American Book Company' },
  { id: 13, name: 'AQ Branche Office' },
  { id: 14, name: 'Armed Forces War College Islamabad' },
  { id: 15, name: 'Army Education Press' },
  { id: 16, name: 'Asia Foundation' },
  { id: 17, name: 'Begum Lt Gen (R) Ejaz Azim' },
  { id: 18, name: 'Better Books' },
]

export const budgets = [
  { id: 1, session: '2011', totalBudget: 10000.00, remainingBudget: 5000.00 },
  { id: 2, session: '2016/2017', totalBudget: 30000000.00, remainingBudget: 25575000.00 },
]

export const budgetAllocations = [
  { id: 1, category: 'Books', actualAmount: 500000, remainingAmount: 200000 },
  { id: 2, category: 'Journals', actualAmount: 200000, remainingAmount: 50000 },
  { id: 3, category: 'E-Resources', actualAmount: 1000000, remainingAmount: 800000 },
]

export const suggestions = [
  { id: 1, title: "Pakistan's defence policy 1947-1958", author: 'PERVAIZ IQBAL CHEEMA', memberId: 'APWCF069', name: 'Brig Kamran Tabrez Savera, DS (Army)' },
  { id: 2, title: "Layman's guide to naval strategy", author: 'Bernard Brodie', memberId: 'APWCF105', name: 'Cdre Chaudhry Sajjad Akber Khan, SI (M)' },
  { id: 3, title: 'Afghanistan politics and economics in a globalising state', author: 'Ibrahimi', memberId: 'APWCF107', name: 'Brig Aman Ullah, DS (Army)' },
  { id: 4, title: 'Storm before the calm', author: 'George Friedman', memberId: 'AODF06', name: 'Brig Asad Ullah Dogar, DS (Coord) AOD' },
  { id: 5, title: 'Leadership: Six Studies In World Strategy', author: 'Henry Kissinger', memberId: 'AODF06', name: 'Brig Asad Ullah Dogar, DS (Coord) AOD' },
  { id: 6, title: 'The last war', author: 'Pravin sawhney', memberId: 'AODF06', name: 'Brig Asad Ullah Dogar, DS (Coord) AOD' },
]

export const purchasingList = [
  { id: 1, title: 'The Art of War', author: 'Sun Tzu', purchaseDate: '2026-06-01' },
  { id: 2, title: 'Diplomacy', author: 'Henry Kissinger', purchaseDate: '2026-06-05' },
]

export const orders = [
  { id: 1, orderNo: 'ORD-2026-001', supplier: 'A & Z Enterprises', orderDate: '2026-06-02', status: 'Pending' },
  { id: 2, orderNo: 'ORD-2026-002', supplier: 'Academic Book Corporation', orderDate: '2026-06-04', status: 'Approved' },
]
