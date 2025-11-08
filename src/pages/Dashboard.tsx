import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import CourseCard from '@/components/CourseCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, TrendingUp, Award, MessageSquare, Calendar, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Leaderboard } from "@/components/Leaderboard";
import { ProgressTracker } from "@/components/ProgressTracker";
import { AIChatbot } from "@/components/AIChatbot";
import { ForumThread } from "@/components/ForumThread";
import { courses as mockCourses } from '@/data/mockData';

const Dashboard = () => {
  const { profile, isLoading } = useAuth();
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);
  const [threads, setThreads] = useState<any[]>([]);
  const [leaderboard, setLeaderboard] = useState<any[]>([]);

  useEffect(() => {
    if (profile) {
      loadDashboardData();
    }
  }, [profile]);

  const loadDashboardData = async () => {
    const { data: enrollments } = await (supabase as any)
      .from('course_enrollments')
      .select('*, courses(*)')
      .eq('student_id', profile?.id);
    
    if (enrollments) {
      setEnrolledCourses(enrollments.map((e: any) => e.courses));
    }

    const { data: forumData } = await (supabase as any)
      .from('forum_threads')
      .select('*, profiles(*)')
      .order('created_at', { ascending: false })
      .limit(5);
    
    if (forumData) {
      setThreads(forumData);
    }

    const { data: topUsers } = await (supabase as any)
      .from('profiles')
      .select('*')
      .order('points', { ascending: false })
      .limit(10);
    
    if (topUsers) {
      setLeaderboard(topUsers.map((user: any, idx: number) => ({
        rank: idx + 1,
        user: { name: user.name, avatar: user.avatar, department: user.department },
        points: user.points,
        badges: 0
      })));
    }
  };

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  // Use mock data if no enrolled courses yet
  const displayCourses = enrolledCourses.length > 0 ? enrolledCourses : mockCourses;
  const upcomingDeadlines = [
    { id: '1', title: 'DBMS Assignment 3', course: 'CS302', dueDate: '2 days', type: 'assignment' },
    { id: '2', title: 'OS Quiz', course: 'CS303', dueDate: '5 days', type: 'quiz' },
    { id: '3', title: 'Networks Project', course: 'CS304', dueDate: '1 week', type: 'project' },
  ];

  const recentActivity = [
    { id: '1', action: 'Completed lecture', course: 'Data Structures', time: '2 hours ago' },
    { id: '2', action: 'Submitted assignment', course: 'DBMS', time: '1 day ago' },
    { id: '3', action: 'Earned badge', course: 'Quiz Master', time: '2 days ago' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Welcome back, {profile?.name.split(' ')[0] || 'Student'}! 👋
        </h1>
        <p className="text-muted-foreground">Here's what's happening with your learning today</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Main Content - Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Points</p>
                    <p className="text-2xl font-bold text-primary">{profile?.points || 0}</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Global Rank</p>
                    <p className="text-2xl font-bold text-secondary">#{profile?.rank || 0}</p>
                  </div>
                  <Award className="h-8 w-8 text-secondary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Badges Earned</p>
                    <p className="text-2xl font-bold text-primary">0</p>
                  </div>
                  <Award className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enrolled Courses */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  My Courses
                </CardTitle>
                <Button asChild variant="outline" size="sm">
                  <Link to="/academics">Browse All</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {enrolledCourses.map((course) => (
                  <CourseCard key={course.id} course={course} showProgress />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                    <div className="flex-1">
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.course}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar - Right Column */}
        <div className="space-y-6">
          {/* AI Chatbot */}
          <AIChatbot />
          
          {/* Profile Summary */}
          <Card>
            <CardContent className="pt-6 text-center">
              <img
                src={profile?.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=default'}
                alt={profile?.name || 'Student'}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-primary/20"
              />
              <h3 className="font-semibold text-lg mb-1">{profile?.name || 'Student'}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {profile?.department || 'N/A'} {profile?.year && `• Year ${profile.year}`}
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/profile">View Profile</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Upcoming Deadlines */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Calendar className="h-5 w-5" />
                Upcoming Deadlines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingDeadlines.map((deadline) => (
                  <div
                    key={deadline.id}
                    className="p-3 rounded-lg border border-border hover:border-primary transition-colors"
                  >
                    <p className="font-medium text-sm mb-1">{deadline.title}</p>
                    <p className="text-xs text-muted-foreground mb-2">{deadline.course}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">
                        {deadline.type}
                      </span>
                      <span className="text-xs font-medium text-destructive">
                        Due in {deadline.dueDate}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/forums">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Browse Forums
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/skills">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Explore Skills
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/blogs">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Read Blogs
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Badges Showcase */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Award className="h-5 w-5" />
                Recent Badges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center text-sm text-muted-foreground py-4">
                No badges earned yet. Complete activities to earn badges!
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
