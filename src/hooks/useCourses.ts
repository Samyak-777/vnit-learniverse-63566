import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Course {
  id: string;
  code: string;
  name: string;
  department_id: string | null;
  semester: number;
  professor_id: string | null;
  description: string | null;
  thumbnail: string | null;
  created_at: string;
  updated_at: string;
}

export interface CourseWithProgress extends Course {
  progress?: number;
  enrolledStudents?: number;
}

export const useCourses = () => {
  return useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      const { data, error } = await (supabase as any)
        .from('courses')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as Course[];
    },
  });
};

export const useEnrolledCourses = (userId: string | undefined) => {
  return useQuery({
    queryKey: ['enrolled-courses', userId],
    queryFn: async () => {
      if (!userId) return [];

      const { data, error } = await (supabase as any)
        .from('course_enrollments')
        .select('*, courses(*)')
        .eq('student_id', userId);

      if (error) throw error;

      return data.map((enrollment: any) => ({
        ...enrollment.courses,
        progress: enrollment.progress,
      })) as CourseWithProgress[];
    },
    enabled: !!userId,
  });
};
