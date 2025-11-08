import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { courses } from '@/data/mockData';
import { Users, BookOpen, FileText, Calendar, TrendingUp } from 'lucide-react';

const Professor = () => {
  const selectedCourse = courses[0];

  const studentProgress = [
    { id: '1', name: 'Rahul Sharma', progress: 85, assignments: '8/10', lastActive: '2 hours ago' },
    { id: '2', name: 'Priya Patel', progress: 92, assignments: '9/10', lastActive: '1 day ago' },
    { id: '3', name: 'Amit Kumar', progress: 78, assignments: '7/10', lastActive: '3 hours ago' },
    { id: '4', name: 'Sneha Deshmukh', progress: 95, assignments: '10/10', lastActive: '30 min ago' },
  ];

  const stats = [
    { label: 'Enrolled Students', value: selectedCourse.enrolledStudents, icon: Users },
    { label: 'Avg Progress', value: '85%', icon: TrendingUp },
    { label: 'Materials', value: '24', icon: FileText },
    { label: 'Assignments', value: '10', icon: BookOpen },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Professor Dashboard</h1>
        <p className="text-muted-foreground">
          Manage courses, track student progress, and create assignments
        </p>
      </div>

      {/* Course Selector */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <Label htmlFor="course-select" className="mb-2 block">
                Select Course
              </Label>
              <Select defaultValue={selectedCourse.id}>
                <SelectTrigger id="course-select" className="md:w-96">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  {courses.map((course) => (
                    <SelectItem key={course.id} value={course.id}>
                      {course.code} - {course.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button>View Full Course</Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
                <stat.icon className="h-10 w-10 text-primary" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Student Progress */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Student Progress</CardTitle>
                <Button variant="outline" size="sm">
                  Export Data
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Input placeholder="Search students..." />
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student Name</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Assignments</TableHead>
                    <TableHead>Last Active</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {studentProgress.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell className="font-medium">{student.name}</TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span>{student.progress}%</span>
                          </div>
                          <Progress value={student.progress} className="h-2" />
                        </div>
                      </TableCell>
                      <TableCell>{student.assignments}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {student.lastActive}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Create Assignment */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Create Assignment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="assignment-title">Assignment Title</Label>
                  <Input
                    id="assignment-title"
                    placeholder="e.g., Binary Search Tree Implementation"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="assignment-description">Description</Label>
                  <Textarea
                    id="assignment-description"
                    placeholder="Detailed instructions..."
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="due-date">Due Date</Label>
                    <Input id="due-date" type="date" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="max-score">Max Score</Label>
                    <Input id="max-score" type="number" placeholder="100" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="attachments">Attachments (Optional)</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                    <FileText className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Click to upload files or drag and drop
                    </p>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Create Assignment
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Course Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Course Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">{selectedCourse.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {selectedCourse.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Course Code:</span>
                      <span className="font-medium">{selectedCourse.code}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Semester:</span>
                      <span className="font-medium">{selectedCourse.semester}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Department:</span>
                      <span className="font-medium">{selectedCourse.department}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Upload Material
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Quiz
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="h-4 w-4 mr-2" />
                View Forum Activity
              </Button>
            </CardContent>
          </Card>

          {/* Recent Submissions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Submissions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { student: 'Rahul S.', assignment: 'Assignment 3', time: '2h ago' },
                  { student: 'Priya P.', assignment: 'Assignment 3', time: '5h ago' },
                  { student: 'Amit K.', assignment: 'Assignment 2', time: '1d ago' },
                ].map((submission, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    <p className="font-medium text-sm mb-1">{submission.student}</p>
                    <p className="text-xs text-muted-foreground mb-1">
                      {submission.assignment}
                    </p>
                    <p className="text-xs text-muted-foreground">{submission.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Professor;
