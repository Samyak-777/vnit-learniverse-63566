import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { currentUser, courses } from '@/data/mockData';
import { Download, TrendingUp, Award, BookOpen, Target } from 'lucide-react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Reports = () => {
  const semesterData = {
    semester: 3,
    year: '2024-25',
    gpa: 8.5,
    totalCredits: 24,
    completedCredits: 20,
  };

  const courseProgress = courses.map((course) => ({
    name: course.code,
    progress: course.progress,
    score: Math.floor(Math.random() * 30) + 70,
  }));

  const quizScores = [
    { name: 'Week 1', score: 85 },
    { name: 'Week 2', score: 78 },
    { name: 'Week 3', score: 92 },
    { name: 'Week 4', score: 88 },
    { name: 'Week 5', score: 95 },
    { name: 'Week 6', score: 90 },
  ];

  const materialAccess = [
    { name: 'Videos', value: 45 },
    { name: 'PDFs', value: 30 },
    { name: 'Quizzes', value: 15 },
    { name: 'Assignments', value: 10 },
  ];

  const COLORS = ['hsl(var(--primary))', 'hsl(var(--secondary))', 'hsl(var(--success))', 'hsl(var(--destructive))'];

  const stats = [
    { label: 'Current GPA', value: semesterData.gpa, icon: TrendingUp, color: 'text-primary' },
    { label: 'XP Points', value: currentUser.points, icon: Award, color: 'text-secondary' },
    { label: 'Courses', value: courses.length, icon: BookOpen, color: 'text-success' },
    { label: 'Global Rank', value: `#${currentUser.rank}`, icon: Target, color: 'text-primary' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Semester Progress Report</h1>
          <p className="text-muted-foreground">
            Semester {semesterData.semester} • Academic Year {semesterData.year}
          </p>
        </div>
        <Button>
          <Download className="h-4 w-4 mr-2" />
          Download PDF
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
                <stat.icon className={`h-10 w-10 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Course Completion */}
        <Card>
          <CardHeader>
            <CardTitle>Course Completion Rates</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={courseProgress}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--foreground))" />
                <YAxis stroke="hsl(var(--foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
                <Legend />
                <Bar dataKey="progress" fill="hsl(var(--primary))" name="Progress %" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Quiz Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Quiz Performance Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={quizScores}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--foreground))" />
                <YAxis stroke="hsl(var(--foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="hsl(var(--secondary))"
                  strokeWidth={2}
                  name="Score %"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Material Access Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Materials Accessed</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={materialAccess}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {materialAccess.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Individual Course Progress */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Detailed Course Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {courses.map((course) => (
                <div key={course.id}>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold">{course.code}</h4>
                      <p className="text-sm text-muted-foreground">{course.name}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline">{course.progress}%</Badge>
                      <p className="text-xs text-muted-foreground mt-1">
                        Score: {Math.floor(Math.random() * 30) + 70}%
                      </p>
                    </div>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Badges and Achievements */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Semester Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {currentUser.badges.map((badge) => (
              <div
                key={badge.id}
                className="flex flex-col items-center p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              >
                <div className="text-4xl mb-2">{badge.icon}</div>
                <p className="text-xs text-center font-medium">{badge.name}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Comparison with Class Average */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Performance vs Class Average</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {courseProgress.map((course) => {
              const classAvg = Math.floor(Math.random() * 20) + 70;
              const difference = course.score - classAvg;
              return (
                <div key={course.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{course.name}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm">
                        You: <span className="font-bold">{course.score}%</span>
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Avg: {classAvg}%
                      </span>
                      <Badge variant={difference >= 0 ? 'default' : 'destructive'}>
                        {difference >= 0 ? '+' : ''}{difference}%
                      </Badge>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;