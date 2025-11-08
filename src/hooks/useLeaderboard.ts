import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface LeaderboardEntry {
  rank: number;
  id: string;
  name: string;
  email: string;
  avatar: string | null;
  department: string | null;
  points: number;
}

export const useLeaderboard = (limit: number = 10) => {
  return useQuery({
    queryKey: ['leaderboard', limit],
    queryFn: async () => {
      const { data, error } = await (supabase as any)
        .from('profiles')
        .select('id, name, email, avatar, department, points, rank')
        .order('points', { ascending: false })
        .limit(limit);

      if (error) throw error;

      return (data || []).map((profile: any, index: number) => ({
        ...profile,
        rank: index + 1,
      })) as LeaderboardEntry[];
    },
  });
};
