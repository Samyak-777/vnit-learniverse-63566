export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'professor' | 'admin';
  department: string;
  year?: number;
  avatar?: string;
  bio?: string;
  points: number;
  rank: number;
  badges: Badge[];
}

export interface Course {
  id: string;
  code: string;
  name: string;
  department: string;
  semester: number;
  professor: string;
  description: string;
  enrolledStudents: number;
  progress?: number;
  thumbnail?: string;
}

export interface Material {
  id: string;
  title: string;
  type: 'pdf' | 'video' | 'ppt' | 'doc' | 'code';
  courseId: string;
  uploadedBy: string;
  uploadDate: string;
  downloads: number;
  views: number;
  url: string;
  thumbnail?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: User;
  publishDate: string;
  tags: string[];
  category: string;
  thumbnail: string;
  views: number;
  upvotes: number;
}

export interface ForumThread {
  id: string;
  title: string;
  content: string;
  author: User;
  courseId: string;
  category: 'doubt' | 'discussion' | 'resource' | 'announcement';
  replies: number;
  views: number;
  lastActivity: string;
  upvotes: number;
  isResolved?: boolean;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  roadmap: RoadmapStep[];
  resources: Resource[];
  clubs: Club[];
}

export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  duration: string;
  completed?: boolean;
}

export interface Resource {
  id: string;
  title: string;
  type: 'course' | 'article' | 'video' | 'book';
  url: string;
  isPaid: boolean;
  platform: string;
}

export interface Club {
  id: string;
  name: string;
  description: string;
  logo: string;
  contact: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedDate?: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: string;
  read: boolean;
}
