import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Users, BookOpen, ClipboardList, TrendingUp, Plus, FileText } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const ProfessorDashboard = () => {
  const stats = [
    { label: 'Total Students', value: '234', icon: Users, color: 'text-blue-600' },
    { label: 'Active Courses', value: '8', icon: BookOpen, color: 'text-green-600' },
    { label: 'Assignments', value: '15', icon: ClipboardList, color: 'text-purple-600' },
    { label: 'Avg Performance', value: '78%', icon: TrendingUp, color: 'text-orange-600' },
  ];

  const students = [
    { id: '1', name: 'Rahul Sharma', course: 'CS301', progress: 85, engagement: 'High', lastActive: '2 hours ago' },
    { id: '2', name: 'Priya Patel', course: 'CS302', progress: 72, engagement: 'Medium', lastActive: '1 day ago' },
    { id: '3', name: 'Amit Kumar', course: 'CS301', progress: 91, engagement: 'High', lastActive: '30 mins ago' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Professor Dashboard</h1>
        <p className="text-muted-foreground">Manage courses, monitor students, and create content</p>
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

      <Tabs defaultValue="students" className="w-full">
        <TabsList className="w-full overflow-x-auto flex-nowrap justify-start">
          <TabsTrigger value="students">Student Monitoring</TabsTrigger>
          <TabsTrigger value="content">Content Creation</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="grading">Grading</TabsTrigger>
        </TabsList>

        {/* Student Monitoring Tab */}
        <TabsContent value="students" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Student Progress Tracking</CardTitle>
                <Input placeholder="Search students..." className="w-64" />
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student Name</TableHead>
                    <TableHead>Course</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Engagement</TableHead>
                    <TableHead>Last Active</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell className="font-medium">{student.name}</TableCell>
                      <TableCell>{student.course}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary" 
                              style={{ width: `${student.progress}%` }}
                            />
                          </div>
                          <span className="text-sm">{student.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={student.engagement === 'High' ? 'default' : 'secondary'}>
                          {student.engagement}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">{student.lastActive}</TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">View Details</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Content Creation Tab */}
        <TabsContent value="content" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-lg bg-primary/10">
                    <ClipboardList className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Create Quiz</h3>
                    <p className="text-sm text-muted-foreground">Build assessments for your courses</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-lg bg-green-500/10">
                    <FileText className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Create Assignment</h3>
                    <p className="text-sm text-muted-foreground">Design homework and projects</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-lg bg-purple-500/10">
                    <BookOpen className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Upload Material</h3>
                    <p className="text-sm text-muted-foreground">Share study resources</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-lg bg-orange-500/10">
                    <Plus className="h-8 w-8 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Announcement</h3>
                    <p className="text-sm text-muted-foreground">Post updates to students</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-4">Completion Rates by Course</h4>
                  <div className="space-y-4">
                    {['CS301 - Data Structures', 'CS302 - DBMS', 'CS303 - Algorithms'].map((course, idx) => (
                      <div key={course} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{course}</span>
                          <span className="font-semibold">{85 - idx * 5}%</span>
                        </div>
                        <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-primary/60" 
                            style={{ width: `${85 - idx * 5}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Grading Tab */}
        <TabsContent value="grading" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Pending Submissions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center py-8">No pending submissions to grade</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfessorDashboard;