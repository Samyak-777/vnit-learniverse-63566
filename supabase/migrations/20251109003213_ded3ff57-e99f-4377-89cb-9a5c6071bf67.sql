-- Add events table for Campus Ecosystem
CREATE TABLE IF NOT EXISTS public.events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  event_date TIMESTAMP WITH TIME ZONE NOT NULL,
  location TEXT,
  registration_required BOOLEAN DEFAULT false,
  max_participants INTEGER,
  created_by UUID REFERENCES auth.users(id) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Events are viewable by everyone"
ON public.events FOR SELECT USING (true);

CREATE POLICY "Admins can manage events"
ON public.events FOR ALL USING (has_role(auth.uid(), 'admin'::app_role));

-- Add announcements table
CREATE TABLE IF NOT EXISTS public.announcements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  priority TEXT DEFAULT 'normal',
  created_by UUID REFERENCES auth.users(id) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  expires_at TIMESTAMP WITH TIME ZONE
);

ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Announcements are viewable by everyone"
ON public.announcements FOR SELECT USING (true);

CREATE POLICY "Faculty and admins can manage announcements"
ON public.announcements FOR ALL 
USING (has_role(auth.uid(), 'professor'::app_role) OR has_role(auth.uid(), 'admin'::app_role));

-- Add alumni profiles table
CREATE TABLE IF NOT EXISTS public.alumni_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  graduation_year INTEGER NOT NULL,
  current_company TEXT,
  current_position TEXT,
  linkedin_url TEXT,
  available_for_mentorship BOOLEAN DEFAULT false,
  expertise_areas TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

ALTER TABLE public.alumni_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Alumni profiles are viewable by everyone"
ON public.alumni_profiles FOR SELECT USING (true);

CREATE POLICY "Users can manage their alumni profile"
ON public.alumni_profiles FOR ALL USING (auth.uid() = user_id);

-- Add mentorship connections table
CREATE TABLE IF NOT EXISTS public.mentorship_connections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  mentor_id UUID REFERENCES auth.users(id) NOT NULL,
  mentee_id UUID REFERENCES auth.users(id) NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

ALTER TABLE public.mentorship_connections ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their mentorship connections"
ON public.mentorship_connections FOR SELECT 
USING (auth.uid() = mentor_id OR auth.uid() = mentee_id);

CREATE POLICY "Users can create mentorship requests"
ON public.mentorship_connections FOR INSERT 
WITH CHECK (auth.uid() = mentee_id);

-- Add research papers table
CREATE TABLE IF NOT EXISTS public.research_papers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  abstract TEXT,
  authors UUID[] NOT NULL,
  publication_date DATE,
  journal TEXT,
  doi TEXT,
  file_url TEXT,
  tags TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

ALTER TABLE public.research_papers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Research papers are viewable by everyone"
ON public.research_papers FOR SELECT USING (true);

CREATE POLICY "Faculty can manage research papers"
ON public.research_papers FOR ALL 
USING (has_role(auth.uid(), 'professor'::app_role) OR has_role(auth.uid(), 'admin'::app_role));

-- Add job postings table for Career Hub
CREATE TABLE IF NOT EXISTS public.job_postings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name TEXT NOT NULL,
  position TEXT NOT NULL,
  description TEXT,
  requirements TEXT[],
  salary_range TEXT,
  application_deadline DATE,
  job_type TEXT,
  posted_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

ALTER TABLE public.job_postings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Job postings are viewable by everyone"
ON public.job_postings FOR SELECT USING (true);

CREATE POLICY "Admins can manage job postings"
ON public.job_postings FOR ALL USING (has_role(auth.uid(), 'admin'::app_role));

-- Add student applications table
CREATE TABLE IF NOT EXISTS public.student_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES auth.users(id) NOT NULL,
  job_id UUID REFERENCES public.job_postings(id) NOT NULL,
  resume_url TEXT,
  cover_letter TEXT,
  status TEXT DEFAULT 'submitted',
  applied_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

ALTER TABLE public.student_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Students can view their applications"
ON public.student_applications FOR SELECT 
USING (auth.uid() = student_id OR has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Students can create applications"
ON public.student_applications FOR INSERT 
WITH CHECK (auth.uid() = student_id);

-- Add learning roadmaps table for Skills Hub
CREATE TABLE IF NOT EXISTS public.learning_roadmaps (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  technology TEXT NOT NULL,
  difficulty_level TEXT,
  estimated_duration TEXT,
  steps JSONB,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

ALTER TABLE public.learning_roadmaps ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Roadmaps are viewable by everyone"
ON public.learning_roadmaps FOR SELECT USING (true);

CREATE POLICY "Faculty and admins can manage roadmaps"
ON public.learning_roadmaps FOR ALL 
USING (has_role(auth.uid(), 'professor'::app_role) OR has_role(auth.uid(), 'admin'::app_role));

-- Add code snippets table
CREATE TABLE IF NOT EXISTS public.code_snippets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  language TEXT NOT NULL,
  code TEXT NOT NULL,
  tags TEXT[],
  rating DECIMAL DEFAULT 0,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

ALTER TABLE public.code_snippets ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Code snippets are viewable by everyone"
ON public.code_snippets FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create snippets"
ON public.code_snippets FOR INSERT WITH CHECK (auth.uid() = created_by);

-- Add student progress tracking table
CREATE TABLE IF NOT EXISTS public.student_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES auth.users(id) NOT NULL,
  course_id UUID REFERENCES public.courses(id) NOT NULL,
  module_id TEXT,
  completion_percentage INTEGER DEFAULT 0,
  last_accessed TIMESTAMP WITH TIME ZONE DEFAULT now(),
  quiz_scores JSONB,
  assignment_scores JSONB
);

ALTER TABLE public.student_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Students can view their progress"
ON public.student_progress FOR SELECT 
USING (auth.uid() = student_id OR has_role(auth.uid(), 'professor'::app_role) OR has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "System can update student progress"
ON public.student_progress FOR ALL 
USING (auth.uid() = student_id OR has_role(auth.uid(), 'professor'::app_role) OR has_role(auth.uid(), 'admin'::app_role));

-- Add assignments table
CREATE TABLE IF NOT EXISTS public.assignments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID REFERENCES public.courses(id) NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  due_date TIMESTAMP WITH TIME ZONE,
  max_points INTEGER DEFAULT 100,
  created_by UUID REFERENCES auth.users(id) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

ALTER TABLE public.assignments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Assignments are viewable by enrolled students"
ON public.assignments FOR SELECT 
USING (
  EXISTS (SELECT 1 FROM course_enrollments WHERE course_id = assignments.course_id AND student_id = auth.uid())
  OR has_role(auth.uid(), 'professor'::app_role)
  OR has_role(auth.uid(), 'admin'::app_role)
);

CREATE POLICY "Professors can manage assignments"
ON public.assignments FOR ALL 
USING (has_role(auth.uid(), 'professor'::app_role) OR has_role(auth.uid(), 'admin'::app_role));

-- Add assignment submissions table
CREATE TABLE IF NOT EXISTS public.assignment_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  assignment_id UUID REFERENCES public.assignments(id) NOT NULL,
  student_id UUID REFERENCES auth.users(id) NOT NULL,
  submission_url TEXT,
  content TEXT,
  score INTEGER,
  feedback TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  graded_at TIMESTAMP WITH TIME ZONE
);

ALTER TABLE public.assignment_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Students can view their submissions"
ON public.assignment_submissions FOR SELECT 
USING (auth.uid() = student_id OR has_role(auth.uid(), 'professor'::app_role) OR has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Students can create submissions"
ON public.assignment_submissions FOR INSERT WITH CHECK (auth.uid() = student_id);

CREATE POLICY "Professors can grade submissions"
ON public.assignment_submissions FOR UPDATE 
USING (has_role(auth.uid(), 'professor'::app_role) OR has_role(auth.uid(), 'admin'::app_role));

-- Add triggers for updated_at
CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON public.events
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_courses_updated_at_trigger BEFORE UPDATE ON public.courses
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();