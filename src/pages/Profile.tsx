import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { currentUser, courses } from '@/data/mockData';
import { Edit, Award, TrendingUp, BookOpen, Clock } from 'lucide-react';

const Profile = () => {
  const completedCourses = courses.filter((c) => c.progress === 100).length;
  const inProgressCourses = courses.filter((c) => c.progress && c.progress < 100).length;

  const activityTimeline = [
    {
      id: '1',
      date: '2024-11-07',
      action: 'Completed Module: Advanced Trees',
      course: 'Data Structures',
    },
    {
      id: '2',
      date: '2024-11-06',
      action: 'Submitted Assignment 3',
      course: 'Database Management',
    },
    {
      id: '3',
      date: '2024-11-05',
      action: 'Earned Badge: Quiz Master',
      course: 'Achievement',
    },
    {
      id: '4',
      date: '2024-11-04',
      action: 'Posted Thread in Forum',
      course: 'Operating Systems',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile Header */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-32 h-32 rounded-full border-4 border-primary/20"
            />
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{currentUser.name}</h1>
                  <p className="text-muted-foreground mb-2">{currentUser.email}</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>{currentUser.department}</Badge>
                    <Badge variant="outline">Year {currentUser.year}</Badge>
                    <Badge variant="outline">{currentUser.role}</Badge>
                  </div>
                </div>
                <Button>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
              {currentUser.bio && (
                <p className="text-muted-foreground mb-4">{currentUser.bio}</p>
              )}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="text-center p-3 rounded-lg bg-muted">
                  <p className="text-2xl font-bold text-primary">{currentUser.points}</p>
                  <p className="text-xs text-muted-foreground">Total Points</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-muted">
                  <p className="text-2xl font-bold text-secondary">#{currentUser.rank}</p>
                  <p className="text-xs text-muted-foreground">Global Rank</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-muted">
                  <p className="text-2xl font-bold text-primary">{currentUser.badges.length}</p>
                  <p className="text-xs text-muted-foreground">Badges</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-muted">
                  <p className="text-2xl font-bold text-secondary">{courses.length}</p>
                  <p className="text-xs text-muted-foreground">Enrolled</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Course Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Enrolled Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {courses.map((course) => (
                  <div key={course.id} className="p-4 rounded-lg border">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold mb-1">{course.name}</h4>
                        <p className="text-sm text-muted-foreground">{course.code}</p>
                      </div>
                      <Badge variant="outline">{course.semester} Sem</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-semibold text-primary">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Activity Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
                <div className="space-y-6">
                  {activityTimeline.map((activity) => (
                    <div key={activity.id} className="relative flex gap-4">
                      <div className="relative z-10 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                      </div>
                      <div className="flex-1 pb-6">
                        <p className="text-xs text-muted-foreground mb-1">{activity.date}</p>
                        <p className="font-medium mb-1">{activity.action}</p>
                        <p className="text-sm text-muted-foreground">{activity.course}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Stats Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <TrendingUp className="h-5 w-5" />
                Learning Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
                <span className="text-sm text-muted-foreground">Courses Completed</span>
                <span className="text-xl font-bold text-success">{completedCourses}</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
                <span className="text-sm text-muted-foreground">In Progress</span>
                <span className="text-xl font-bold text-primary">{inProgressCourses}</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
                <span className="text-sm text-muted-foreground">Total Materials</span>
                <span className="text-xl font-bold text-secondary">42</span>
              </div>
            </CardContent>
          </Card>

          {/* Badges Showcase */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Award className="h-5 w-5" />
                Badges Earned
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-3">
                {currentUser.badges.map((badge) => (
                  <div
                    key={badge.id}
                    className="flex flex-col items-center p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors cursor-pointer"
                    title={badge.description}
                  >
                    <div className="text-3xl mb-2">{badge.icon}</div>
                    <p className="text-xs text-center font-medium line-clamp-2">{badge.name}</p>
                    {badge.earnedDate && (
                      <p className="text-xs text-muted-foreground mt-1">{badge.earnedDate}</p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Achievements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                <div className="text-2xl">🎯</div>
                <div>
                  <p className="font-medium text-sm">Perfect Attendance</p>
                  <p className="text-xs text-muted-foreground">Attended all lectures</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                <div className="text-2xl">📚</div>
                <div>
                  <p className="font-medium text-sm">Bookworm</p>
                  <p className="text-xs text-muted-foreground">Downloaded 100+ materials</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                <div className="text-2xl">🤝</div>
                <div>
                  <p className="font-medium text-sm">Community Helper</p>
                  <p className="text-xs text-muted-foreground">Answered 50 questions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
