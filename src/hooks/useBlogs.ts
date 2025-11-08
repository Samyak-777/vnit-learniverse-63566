import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string | null;
  author_id: string;
  thumbnail: string | null;
  tags: string[] | null;
  category: string;
  published_at: string | null;
  is_published: boolean;
  views: number;
  upvotes: number;
  created_at: string;
  updated_at: string;
}

export interface BlogPostWithAuthor extends BlogPost {
  author: {
    id: string;
    name: string;
    email: string;
    avatar: string | null;
    department: string | null;
  };
}

export const useBlogs = () => {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const { data, error } = await (supabase as any)
        .from('blog_posts')
        .select(`
          *,
          author:profiles(id, name, email, avatar, department)
        `)
        .eq('is_published', true)
        .order('published_at', { ascending: false });

      if (error) throw error;
      return data as BlogPostWithAuthor[];
    },
  });
};

export const useUserBlogs = (userId: string | undefined) => {
  return useQuery({
    queryKey: ['user-blogs', userId],
    queryFn: async () => {
      if (!userId) return [];

      const { data, error } = await (supabase as any)
        .from('blog_posts')
        .select(`
          *,
          author:profiles(id, name, email, avatar, department)
        `)
        .eq('author_id', userId)
        .order('created_at', { ascending: false});

      if (error) throw error;
      return data as BlogPostWithAuthor[];
    },
    enabled: !!userId,
  });
};
