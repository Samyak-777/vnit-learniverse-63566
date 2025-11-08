import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface ForumThread {
  id: string;
  title: string;
  content: string;
  author_id: string;
  course_id: string | null;
  category: string;
  is_resolved: boolean;
  views: number;
  upvotes: number;
  created_at: string;
  updated_at: string;
}

export interface ForumThreadWithAuthor extends ForumThread {
  author: {
    id: string;
    name: string;
    email: string;
    avatar: string | null;
    department: string | null;
  };
  replies_count?: number;
}

export const useForumThreads = () => {
  return useQuery({
    queryKey: ['forum-threads'],
    queryFn: async () => {
      const { data, error } = await (supabase as any)
        .from('forum_threads')
        .select(`
          *,
          author:profiles(id, name, email, avatar, department)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;

      // Get reply counts
      const threadsWithCounts = await Promise.all(
        data.map(async (thread: any) => {
          const { count } = await (supabase as any)
            .from('forum_replies')
            .select('*', { count: 'exact', head: true })
            .eq('thread_id', thread.id);

          return {
            ...thread,
            replies_count: count || 0,
          };
        })
      );

      return threadsWithCounts as ForumThreadWithAuthor[];
    },
  });
};
