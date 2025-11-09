export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      alumni_profiles: {
        Row: {
          available_for_mentorship: boolean | null
          created_at: string | null
          current_company: string | null
          current_position: string | null
          expertise_areas: string[] | null
          graduation_year: number
          id: string
          linkedin_url: string | null
          user_id: string
        }
        Insert: {
          available_for_mentorship?: boolean | null
          created_at?: string | null
          current_company?: string | null
          current_position?: string | null
          expertise_areas?: string[] | null
          graduation_year: number
          id?: string
          linkedin_url?: string | null
          user_id: string
        }
        Update: {
          available_for_mentorship?: boolean | null
          created_at?: string | null
          current_company?: string | null
          current_position?: string | null
          expertise_areas?: string[] | null
          graduation_year?: number
          id?: string
          linkedin_url?: string | null
          user_id?: string
        }
        Relationships: []
      }
      announcements: {
        Row: {
          category: string
          content: string
          created_at: string | null
          created_by: string
          expires_at: string | null
          id: string
          priority: string | null
          title: string
        }
        Insert: {
          category: string
          content: string
          created_at?: string | null
          created_by: string
          expires_at?: string | null
          id?: string
          priority?: string | null
          title: string
        }
        Update: {
          category?: string
          content?: string
          created_at?: string | null
          created_by?: string
          expires_at?: string | null
          id?: string
          priority?: string | null
          title?: string
        }
        Relationships: []
      }
      assignment_submissions: {
        Row: {
          assignment_id: string
          content: string | null
          feedback: string | null
          graded_at: string | null
          id: string
          score: number | null
          student_id: string
          submission_url: string | null
          submitted_at: string | null
        }
        Insert: {
          assignment_id: string
          content?: string | null
          feedback?: string | null
          graded_at?: string | null
          id?: string
          score?: number | null
          student_id: string
          submission_url?: string | null
          submitted_at?: string | null
        }
        Update: {
          assignment_id?: string
          content?: string | null
          feedback?: string | null
          graded_at?: string | null
          id?: string
          score?: number | null
          student_id?: string
          submission_url?: string | null
          submitted_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "assignment_submissions_assignment_id_fkey"
            columns: ["assignment_id"]
            isOneToOne: false
            referencedRelation: "assignments"
            referencedColumns: ["id"]
          },
        ]
      }
      assignments: {
        Row: {
          course_id: string
          created_at: string | null
          created_by: string
          description: string | null
          due_date: string | null
          id: string
          max_points: number | null
          title: string
        }
        Insert: {
          course_id: string
          created_at?: string | null
          created_by: string
          description?: string | null
          due_date?: string | null
          id?: string
          max_points?: number | null
          title: string
        }
        Update: {
          course_id?: string
          created_at?: string | null
          created_by?: string
          description?: string | null
          due_date?: string | null
          id?: string
          max_points?: number | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "assignments_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      badges: {
        Row: {
          created_at: string
          criteria: string | null
          description: string
          icon: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          criteria?: string | null
          description: string
          icon: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          criteria?: string | null
          description?: string
          icon?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          author_id: string
          category: string
          content: string
          created_at: string
          excerpt: string | null
          id: string
          is_published: boolean | null
          published_at: string | null
          tags: string[] | null
          thumbnail: string | null
          title: string
          updated_at: string
          upvotes: number | null
          views: number | null
        }
        Insert: {
          author_id: string
          category: string
          content: string
          created_at?: string
          excerpt?: string | null
          id?: string
          is_published?: boolean | null
          published_at?: string | null
          tags?: string[] | null
          thumbnail?: string | null
          title: string
          updated_at?: string
          upvotes?: number | null
          views?: number | null
        }
        Update: {
          author_id?: string
          category?: string
          content?: string
          created_at?: string
          excerpt?: string | null
          id?: string
          is_published?: boolean | null
          published_at?: string | null
          tags?: string[] | null
          thumbnail?: string | null
          title?: string
          updated_at?: string
          upvotes?: number | null
          views?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "blog_posts_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      code_snippets: {
        Row: {
          code: string
          created_at: string | null
          created_by: string | null
          description: string | null
          id: string
          language: string
          rating: number | null
          tags: string[] | null
          title: string
        }
        Insert: {
          code: string
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          language: string
          rating?: number | null
          tags?: string[] | null
          title: string
        }
        Update: {
          code?: string
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          language?: string
          rating?: number | null
          tags?: string[] | null
          title?: string
        }
        Relationships: []
      }
      course_enrollments: {
        Row: {
          course_id: string
          enrolled_at: string
          id: string
          progress: number | null
          student_id: string
        }
        Insert: {
          course_id: string
          enrolled_at?: string
          id?: string
          progress?: number | null
          student_id: string
        }
        Update: {
          course_id?: string
          enrolled_at?: string
          id?: string
          progress?: number | null
          student_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "course_enrollments_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "course_enrollments_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      courses: {
        Row: {
          code: string
          created_at: string
          department_id: string | null
          description: string | null
          id: string
          name: string
          professor_id: string | null
          semester: number
          thumbnail: string | null
          updated_at: string
        }
        Insert: {
          code: string
          created_at?: string
          department_id?: string | null
          description?: string | null
          id?: string
          name: string
          professor_id?: string | null
          semester: number
          thumbnail?: string | null
          updated_at?: string
        }
        Update: {
          code?: string
          created_at?: string
          department_id?: string | null
          description?: string | null
          id?: string
          name?: string
          professor_id?: string | null
          semester?: number
          thumbnail?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "courses_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "courses_professor_id_fkey"
            columns: ["professor_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      departments: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      events: {
        Row: {
          created_at: string | null
          created_by: string
          description: string | null
          event_date: string
          id: string
          location: string | null
          max_participants: number | null
          registration_required: boolean | null
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by: string
          description?: string | null
          event_date: string
          id?: string
          location?: string | null
          max_participants?: number | null
          registration_required?: boolean | null
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string
          description?: string | null
          event_date?: string
          id?: string
          location?: string | null
          max_participants?: number | null
          registration_required?: boolean | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      forum_replies: {
        Row: {
          author_id: string
          content: string
          created_at: string
          id: string
          is_solution: boolean | null
          thread_id: string
          updated_at: string
          upvotes: number | null
        }
        Insert: {
          author_id: string
          content: string
          created_at?: string
          id?: string
          is_solution?: boolean | null
          thread_id: string
          updated_at?: string
          upvotes?: number | null
        }
        Update: {
          author_id?: string
          content?: string
          created_at?: string
          id?: string
          is_solution?: boolean | null
          thread_id?: string
          updated_at?: string
          upvotes?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "forum_replies_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "forum_replies_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "forum_threads"
            referencedColumns: ["id"]
          },
        ]
      }
      forum_threads: {
        Row: {
          author_id: string
          category: string
          content: string
          course_id: string | null
          created_at: string
          id: string
          is_resolved: boolean | null
          title: string
          updated_at: string
          upvotes: number | null
          views: number | null
        }
        Insert: {
          author_id: string
          category: string
          content: string
          course_id?: string | null
          created_at?: string
          id?: string
          is_resolved?: boolean | null
          title: string
          updated_at?: string
          upvotes?: number | null
          views?: number | null
        }
        Update: {
          author_id?: string
          category?: string
          content?: string
          course_id?: string | null
          created_at?: string
          id?: string
          is_resolved?: boolean | null
          title?: string
          updated_at?: string
          upvotes?: number | null
          views?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "forum_threads_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "forum_threads_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      job_postings: {
        Row: {
          application_deadline: string | null
          company_name: string
          created_at: string | null
          description: string | null
          id: string
          job_type: string | null
          position: string
          posted_by: string | null
          requirements: string[] | null
          salary_range: string | null
        }
        Insert: {
          application_deadline?: string | null
          company_name: string
          created_at?: string | null
          description?: string | null
          id?: string
          job_type?: string | null
          position: string
          posted_by?: string | null
          requirements?: string[] | null
          salary_range?: string | null
        }
        Update: {
          application_deadline?: string | null
          company_name?: string
          created_at?: string | null
          description?: string | null
          id?: string
          job_type?: string | null
          position?: string
          posted_by?: string | null
          requirements?: string[] | null
          salary_range?: string | null
        }
        Relationships: []
      }
      learning_roadmaps: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          difficulty_level: string | null
          estimated_duration: string | null
          id: string
          steps: Json | null
          technology: string
          title: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          difficulty_level?: string | null
          estimated_duration?: string | null
          id?: string
          steps?: Json | null
          technology: string
          title: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          difficulty_level?: string | null
          estimated_duration?: string | null
          id?: string
          steps?: Json | null
          technology?: string
          title?: string
        }
        Relationships: []
      }
      materials: {
        Row: {
          course_id: string
          created_at: string
          downloads: number | null
          id: string
          thumbnail: string | null
          title: string
          type: string
          uploaded_by: string
          url: string
          views: number | null
        }
        Insert: {
          course_id: string
          created_at?: string
          downloads?: number | null
          id?: string
          thumbnail?: string | null
          title: string
          type: string
          uploaded_by: string
          url: string
          views?: number | null
        }
        Update: {
          course_id?: string
          created_at?: string
          downloads?: number | null
          id?: string
          thumbnail?: string | null
          title?: string
          type?: string
          uploaded_by?: string
          url?: string
          views?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "materials_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "materials_uploaded_by_fkey"
            columns: ["uploaded_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      mentorship_connections: {
        Row: {
          created_at: string | null
          id: string
          mentee_id: string
          mentor_id: string
          status: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          mentee_id: string
          mentor_id: string
          status?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          mentee_id?: string
          mentor_id?: string
          status?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar: string | null
          bio: string | null
          created_at: string
          department: string | null
          email: string
          id: string
          name: string
          points: number
          rank: number
          updated_at: string
          year: number | null
        }
        Insert: {
          avatar?: string | null
          bio?: string | null
          created_at?: string
          department?: string | null
          email: string
          id: string
          name: string
          points?: number
          rank?: number
          updated_at?: string
          year?: number | null
        }
        Update: {
          avatar?: string | null
          bio?: string | null
          created_at?: string
          department?: string | null
          email?: string
          id?: string
          name?: string
          points?: number
          rank?: number
          updated_at?: string
          year?: number | null
        }
        Relationships: []
      }
      quiz_attempts: {
        Row: {
          answers: Json | null
          completed_at: string | null
          id: string
          quiz_id: string
          score: number | null
          started_at: string
          student_id: string
          total_points: number | null
        }
        Insert: {
          answers?: Json | null
          completed_at?: string | null
          id?: string
          quiz_id: string
          score?: number | null
          started_at?: string
          student_id: string
          total_points?: number | null
        }
        Update: {
          answers?: Json | null
          completed_at?: string | null
          id?: string
          quiz_id?: string
          score?: number | null
          started_at?: string
          student_id?: string
          total_points?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "quiz_attempts_quiz_id_fkey"
            columns: ["quiz_id"]
            isOneToOne: false
            referencedRelation: "quizzes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quiz_attempts_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      quiz_questions: {
        Row: {
          correct_answer: string
          created_at: string
          id: string
          options: Json | null
          order_num: number | null
          points: number | null
          question_text: string
          question_type: string
          quiz_id: string
        }
        Insert: {
          correct_answer: string
          created_at?: string
          id?: string
          options?: Json | null
          order_num?: number | null
          points?: number | null
          question_text: string
          question_type: string
          quiz_id: string
        }
        Update: {
          correct_answer?: string
          created_at?: string
          id?: string
          options?: Json | null
          order_num?: number | null
          points?: number | null
          question_text?: string
          question_type?: string
          quiz_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "quiz_questions_quiz_id_fkey"
            columns: ["quiz_id"]
            isOneToOne: false
            referencedRelation: "quizzes"
            referencedColumns: ["id"]
          },
        ]
      }
      quizzes: {
        Row: {
          course_id: string
          created_at: string
          created_by: string
          description: string | null
          duration_minutes: number | null
          id: string
          is_published: boolean | null
          title: string
          total_points: number | null
          updated_at: string
        }
        Insert: {
          course_id: string
          created_at?: string
          created_by: string
          description?: string | null
          duration_minutes?: number | null
          id?: string
          is_published?: boolean | null
          title: string
          total_points?: number | null
          updated_at?: string
        }
        Update: {
          course_id?: string
          created_at?: string
          created_by?: string
          description?: string | null
          duration_minutes?: number | null
          id?: string
          is_published?: boolean | null
          title?: string
          total_points?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "quizzes_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quizzes_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      research_papers: {
        Row: {
          abstract: string | null
          authors: string[]
          created_at: string | null
          doi: string | null
          file_url: string | null
          id: string
          journal: string | null
          publication_date: string | null
          tags: string[] | null
          title: string
        }
        Insert: {
          abstract?: string | null
          authors: string[]
          created_at?: string | null
          doi?: string | null
          file_url?: string | null
          id?: string
          journal?: string | null
          publication_date?: string | null
          tags?: string[] | null
          title: string
        }
        Update: {
          abstract?: string | null
          authors?: string[]
          created_at?: string | null
          doi?: string | null
          file_url?: string | null
          id?: string
          journal?: string | null
          publication_date?: string | null
          tags?: string[] | null
          title?: string
        }
        Relationships: []
      }
      student_applications: {
        Row: {
          applied_at: string | null
          cover_letter: string | null
          id: string
          job_id: string
          resume_url: string | null
          status: string | null
          student_id: string
        }
        Insert: {
          applied_at?: string | null
          cover_letter?: string | null
          id?: string
          job_id: string
          resume_url?: string | null
          status?: string | null
          student_id: string
        }
        Update: {
          applied_at?: string | null
          cover_letter?: string | null
          id?: string
          job_id?: string
          resume_url?: string | null
          status?: string | null
          student_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "student_applications_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "job_postings"
            referencedColumns: ["id"]
          },
        ]
      }
      student_progress: {
        Row: {
          assignment_scores: Json | null
          completion_percentage: number | null
          course_id: string
          id: string
          last_accessed: string | null
          module_id: string | null
          quiz_scores: Json | null
          student_id: string
        }
        Insert: {
          assignment_scores?: Json | null
          completion_percentage?: number | null
          course_id: string
          id?: string
          last_accessed?: string | null
          module_id?: string | null
          quiz_scores?: Json | null
          student_id: string
        }
        Update: {
          assignment_scores?: Json | null
          completion_percentage?: number | null
          course_id?: string
          id?: string
          last_accessed?: string | null
          module_id?: string | null
          quiz_scores?: Json | null
          student_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "student_progress_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      user_badges: {
        Row: {
          badge_id: string
          earned_at: string
          id: string
          user_id: string
        }
        Insert: {
          badge_id: string
          earned_at?: string
          id?: string
          user_id: string
        }
        Update: {
          badge_id?: string
          earned_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_badges_badge_id_fkey"
            columns: ["badge_id"]
            isOneToOne: false
            referencedRelation: "badges"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_badges_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "student" | "professor" | "admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["student", "professor", "admin"],
    },
  },
} as const
