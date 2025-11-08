import { User, Course, Material, BlogPost, ForumThread, Skill, Badge, Notification } from '@/types';

export const currentUser: User = {
  id: '1',
  name: 'Rahul Sharma',
  email: 'rahul.sharma@students.vnit.ac.in',
  role: 'student',
  department: 'Computer Science',
  year: 3,
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul',
  bio: 'Passionate about AI/ML and Web Development',
  points: 2450,
  rank: 15,
  badges: [
    { id: '1', name: 'Early Adopter', description: 'One of the first users', icon: '🌟' },
    { id: '2', name: 'Quiz Master', description: 'Completed 10 quizzes', icon: '🏆' },
    { id: '3', name: 'Helper', description: 'Answered 50 forum questions', icon: '💡' }
  ]
};

export const courses: Course[] = [
  {
    id: '1',
    code: 'CS301',
    name: 'Data Structures and Algorithms',
    department: 'CSE',
    semester: 3,
    professor: 'Dr. Amit Kumar',
    description: 'Advanced data structures and algorithmic techniques',
    enrolledStudents: 120,
    progress: 65,
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400'
  },
  {
    id: '2',
    code: 'CS302',
    name: 'Database Management Systems',
    department: 'CSE',
    semester: 3,
    professor: 'Dr. Priya Deshmukh',
    description: 'Relational databases, SQL, and database design',
    enrolledStudents: 115,
    progress: 45,
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400'
  },
  {
    id: '3',
    code: 'CS303',
    name: 'Operating Systems',
    department: 'CSE',
    semester: 3,
    professor: 'Dr. Rajesh Verma',
    description: 'OS concepts, process management, memory management',
    enrolledStudents: 118,
    progress: 80,
    thumbnail: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400'
  },
  {
    id: '4',
    code: 'CS304',
    name: 'Computer Networks',
    department: 'CSE',
    semester: 3,
    professor: 'Dr. Sneha Patil',
    description: 'Network protocols, TCP/IP, and network security',
    enrolledStudents: 110,
    progress: 30,
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400'
  },
  {
    id: '5',
    code: 'CS305',
    name: 'Software Engineering',
    department: 'CSE',
    semester: 3,
    professor: 'Dr. Anil Joshi',
    description: 'Software development lifecycle and methodologies',
    enrolledStudents: 125,
    progress: 55,
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400'
  },
  {
    id: '6',
    code: 'CS306',
    name: 'Theory of Computation',
    department: 'CSE',
    semester: 3,
    professor: 'Dr. Meera Patel',
    description: 'Automata theory, computability, and complexity',
    enrolledStudents: 100,
    progress: 20,
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400'
  }
];

export const departments = [
  { id: 'CSE', name: 'Computer Science & Engineering', icon: '💻', courses: 45 },
  { id: 'ECE', name: 'Electronics & Communication', icon: '📡', courses: 42 },
  { id: 'ME', name: 'Mechanical Engineering', icon: '⚙️', courses: 38 },
  { id: 'CE', name: 'Civil Engineering', icon: '🏗️', courses: 35 },
  { id: 'EE', name: 'Electrical Engineering', icon: '⚡', courses: 40 },
  { id: 'CHE', name: 'Chemical Engineering', icon: '🧪', courses: 32 },
  { id: 'MME', name: 'Metallurgical Engineering', icon: '🔬', courses: 30 },
  { id: 'ARC', name: 'Architecture', icon: '📐', courses: 28 }
];

export const materials: Material[] = [
  {
    id: '1',
    title: 'Introduction to Linked Lists',
    type: 'pdf',
    courseId: '1',
    uploadedBy: 'Dr. Amit Kumar',
    uploadDate: '2024-11-05',
    downloads: 245,
    views: 580,
    url: '#'
  },
  {
    id: '2',
    title: 'Binary Trees Lecture Recording',
    type: 'video',
    courseId: '1',
    uploadedBy: 'Dr. Amit Kumar',
    uploadDate: '2024-11-03',
    downloads: 189,
    views: 420,
    url: '#'
  },
  {
    id: '3',
    title: 'SQL Queries Tutorial',
    type: 'pdf',
    courseId: '2',
    uploadedBy: 'Dr. Priya Deshmukh',
    uploadDate: '2024-11-04',
    downloads: 310,
    views: 650,
    url: '#'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Machine Learning: A Beginner\'s Guide',
    content: 'Machine learning has revolutionized the tech industry...',
    excerpt: 'A comprehensive guide for students starting their ML journey with practical examples and resources.',
    author: {
      id: '2',
      name: 'Ananya Singh',
      email: 'ananya@vnit.ac.in',
      role: 'student',
      department: 'CSE',
      year: 4,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya',
      points: 3200,
      rank: 8,
      badges: []
    },
    publishDate: '2024-11-06',
    tags: ['Machine Learning', 'AI', 'Python'],
    category: 'Academic',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600',
    views: 1250,
    upvotes: 89
  },
  {
    id: '2',
    title: 'My Summer Internship Experience at Google',
    content: 'This summer, I had the incredible opportunity to intern at Google...',
    excerpt: 'Sharing my journey, learnings, and tips for landing tech internships at top companies.',
    author: {
      id: '3',
      name: 'Vikram Reddy',
      email: 'vikram@vnit.ac.in',
      role: 'student',
      department: 'CSE',
      year: 4,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram',
      points: 2800,
      rank: 12,
      badges: []
    },
    publishDate: '2024-11-05',
    tags: ['Internship', 'Google', 'Career'],
    category: 'Internships',
    thumbnail: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600',
    views: 2100,
    upvotes: 156
  },
  {
    id: '3',
    title: 'Building a Full-Stack Web App: MERN Stack Tutorial',
    content: 'The MERN stack (MongoDB, Express, React, Node.js) is one of the most popular...',
    excerpt: 'Step-by-step guide to building your first full-stack application using the MERN stack.',
    author: currentUser,
    publishDate: '2024-11-04',
    tags: ['Web Development', 'MERN', 'JavaScript'],
    category: 'Projects',
    thumbnail: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600',
    views: 980,
    upvotes: 72
  }
];

export const forumThreads: ForumThread[] = [
  {
    id: '1',
    title: 'Doubt: Time Complexity of Merge Sort',
    content: 'Can someone explain why merge sort has O(n log n) complexity?',
    author: currentUser,
    courseId: '1',
    category: 'doubt',
    replies: 8,
    views: 145,
    lastActivity: '2 hours ago',
    upvotes: 12,
    isResolved: true
  },
  {
    id: '2',
    title: 'Discussion: Best Resources for Learning React',
    content: 'What are your favorite resources for learning React in 2024?',
    author: {
      id: '4',
      name: 'Pooja Mehta',
      email: 'pooja@vnit.ac.in',
      role: 'student',
      department: 'CSE',
      year: 2,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pooja',
      points: 1500,
      rank: 45,
      badges: []
    },
    courseId: '5',
    category: 'discussion',
    replies: 15,
    views: 280,
    lastActivity: '5 hours ago',
    upvotes: 23
  },
  {
    id: '3',
    title: 'Resource: Complete DSA Sheet for Placement Prep',
    content: 'Sharing a comprehensive DSA problem sheet I compiled...',
    author: {
      id: '5',
      name: 'Arjun Nair',
      email: 'arjun@vnit.ac.in',
      role: 'student',
      department: 'CSE',
      year: 4,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun',
      points: 3500,
      rank: 5,
      badges: []
    },
    courseId: '1',
    category: 'resource',
    replies: 42,
    views: 1520,
    lastActivity: '1 day ago',
    upvotes: 98
  }
];

export const skills: Skill[] = [
  {
    id: '1',
    name: 'Python Programming',
    category: 'Programming',
    description: 'Master Python from basics to advanced concepts',
    icon: '🐍',
    roadmap: [
      { id: '1', title: 'Python Basics', description: 'Variables, data types, control flow', duration: '2 weeks' },
      { id: '2', title: 'OOP Concepts', description: 'Classes, objects, inheritance', duration: '2 weeks' },
      { id: '3', title: 'Advanced Topics', description: 'Decorators, generators, async', duration: '3 weeks' }
    ],
    resources: [
      { id: '1', title: 'Python for Everybody', type: 'course', url: '#', isPaid: false, platform: 'Coursera' },
      { id: '2', title: 'Automate the Boring Stuff', type: 'book', url: '#', isPaid: false, platform: 'Online' }
    ],
    clubs: [
      { id: '1', name: 'CodeChef VNIT Chapter', description: 'Competitive programming club', logo: '👨‍💻', contact: 'codechef@vnit.ac.in' }
    ]
  },
  {
    id: '2',
    name: 'Web Development',
    category: 'Development',
    description: 'Build modern web applications with latest technologies',
    icon: '🌐',
    roadmap: [
      { id: '1', title: 'HTML & CSS', description: 'Web fundamentals', duration: '2 weeks' },
      { id: '2', title: 'JavaScript', description: 'Programming for the web', duration: '4 weeks' },
      { id: '3', title: 'React.js', description: 'Modern frontend framework', duration: '4 weeks' }
    ],
    resources: [
      { id: '1', title: 'The Odin Project', type: 'course', url: '#', isPaid: false, platform: 'Online' },
      { id: '2', title: 'Frontend Masters', type: 'course', url: '#', isPaid: true, platform: 'Frontend Masters' }
    ],
    clubs: []
  },
  {
    id: '3',
    name: 'Machine Learning',
    category: 'AI/ML',
    description: 'Learn ML algorithms and build intelligent systems',
    icon: '🤖',
    roadmap: [
      { id: '1', title: 'Python & Math', description: 'Prerequisites', duration: '3 weeks' },
      { id: '2', title: 'Supervised Learning', description: 'Classification & Regression', duration: '4 weeks' },
      { id: '3', title: 'Deep Learning', description: 'Neural networks', duration: '6 weeks' }
    ],
    resources: [
      { id: '1', title: 'Andrew Ng ML Course', type: 'course', url: '#', isPaid: false, platform: 'Coursera' },
      { id: '2', title: 'Fast.ai', type: 'course', url: '#', isPaid: false, platform: 'fast.ai' }
    ],
    clubs: [
      { id: '2', name: 'AI/ML Club VNIT', description: 'Explore artificial intelligence', logo: '🧠', contact: 'aiml@vnit.ac.in' }
    ]
  }
];

export const notifications: Notification[] = [
  {
    id: '1',
    title: 'New Material Uploaded',
    message: 'Dr. Amit Kumar uploaded "Advanced Trees" in DSA course',
    type: 'info',
    timestamp: '10 minutes ago',
    read: false
  },
  {
    id: '2',
    title: 'Assignment Due Soon',
    message: 'DBMS Assignment 3 is due in 2 days',
    type: 'warning',
    timestamp: '1 hour ago',
    read: false
  },
  {
    id: '3',
    title: 'New Badge Earned!',
    message: 'You earned the "Quick Learner" badge',
    type: 'success',
    timestamp: '2 hours ago',
    read: true
  }
];

export const leaderboard = [
  { rank: 1, name: 'Arjun Nair', points: 3500, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun', department: 'CSE' },
  { rank: 2, name: 'Sneha Kulkarni', points: 3350, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha', department: 'CSE' },
  { rank: 3, name: 'Aditya Malhotra', points: 3200, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya', department: 'ECE' },
  { rank: 4, name: 'Ananya Singh', points: 3200, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya', department: 'CSE' },
  { rank: 5, name: 'Karthik Iyer', points: 3100, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Karthik', department: 'ME' },
];
