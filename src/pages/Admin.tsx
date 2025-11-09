import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
import { Users, BookOpen, MessageSquare, TrendingUp, Upload, FileText } from 'lucide-react';
import { departments } from '@/data/mockData';

const Admin = () => {
  const stats = [
    { label: 'Total Users', value: '5,234', icon: Users, color: 'text-blue-600' },
    { label: 'Total Courses', value: '350', icon: BookOpen, color: 'text-green-600' },
    { label: 'Materials', value: '1,245', icon: FileText, color: 'text-purple-600' },
    { label: 'Active Threads', value: '892', icon: MessageSquare, color: 'text-orange-600' },
  ];

  const recentUsers = [
    { id: '1', name: 'Rahul Sharma', email: 'rahul@vnit.ac.in', department: 'CSE', joined: '2024-11-07' },
    { id: '2', name: 'Priya Patel', email: 'priya@vnit.ac.in', department: 'ECE', joined: '2024-11-06' },
    { id: '3', name: 'Amit Kumar', email: 'amit@vnit.ac.in', department: 'ME', joined: '2024-11-05' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage users, content, and platform settings</p>
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

      {/* Main Content Tabs */}
      <Tabs defaultValue="users" className="w-full">
        <TabsList className="w-full overflow-x-auto flex-nowrap justify-start">
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="content">Content Upload</TabsTrigger>
          <TabsTrigger value="materials">Materials</TabsTrigger>
          <TabsTrigger value="moderation">Moderation</TabsTrigger>
        </TabsList>

        {/* Users Tab */}
        <TabsContent value="users" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>User Management</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline">Assign Roles</Button>
                  <Button>Add New User</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex gap-4">
                <Input placeholder="Search users..." className="max-w-md" />
                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Filter by Role" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover">
                    <SelectItem value="all">All Roles</SelectItem>
                    <SelectItem value="student">Students</SelectItem>
                    <SelectItem value="professor">Faculty</SelectItem>
                    <SelectItem value="admin">Admins</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by Department" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover">
                    {departments.map((dept) => (
                      <SelectItem key={dept.id} value={dept.id}>
                        {dept.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Badge variant="outline">Student</Badge>
                      </TableCell>
                      <TableCell>{user.department}</TableCell>
                      <TableCell>{user.joined}</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500">Active</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                          <Button size="sm" variant="outline">
                            Manage Roles
                          </Button>
                          <Button size="sm" variant="outline" className="text-destructive">
                            Reset Password
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Content Upload Tab */}
        <TabsContent value="content" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Upload Study Material
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Select>
                      <SelectTrigger id="department">
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover">
                        {departments.map((dept) => (
                          <SelectItem key={dept.id} value={dept.id}>
                            {dept.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="semester">Semester</Label>
                    <Select>
                      <SelectTrigger id="semester">
                        <SelectValue placeholder="Select semester" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                          <SelectItem key={sem} value={sem.toString()}>
                            Semester {sem}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="course">Course</Label>
                    <Select>
                      <SelectTrigger id="course">
                        <SelectValue placeholder="Select course" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover">
                        <SelectItem value="cs301">CS301 - DSA</SelectItem>
                        <SelectItem value="cs302">CS302 - DBMS</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title">Material Title</Label>
                  <Input id="title" placeholder="e.g., Introduction to Linked Lists" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Brief description of the material..."
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="file">Upload File</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Drag and drop your file here, or click to browse
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Supported formats: PDF, PPT, DOC, MP4, ZIP (Max 50MB)
                    </p>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Upload Material
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Materials Tab */}
        <TabsContent value="materials" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Uploaded Materials</CardTitle>
                <div className="flex gap-2">
                  <Input placeholder="Search materials..." className="w-64" />
                  <Button variant="outline">Filter</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Course</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Uploaded By</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Downloads</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Data Structures Notes</TableCell>
                    <TableCell>CS301</TableCell>
                    <TableCell><Badge variant="outline">PDF</Badge></TableCell>
                    <TableCell>Prof. Kumar</TableCell>
                    <TableCell>2025-11-05</TableCell>
                    <TableCell>245</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">View</Button>
                        <Button size="sm" variant="outline" className="text-destructive">Delete</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Moderation Tab */}
        <TabsContent value="moderation" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Content Moderation Queue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold mb-1">Forum Post: "Help with Assignment"</h4>
                      <p className="text-sm text-muted-foreground">Posted by: Rahul Sharma</p>
                    </div>
                    <Badge variant="secondary">Pending Review</Badge>
                  </div>
                  <p className="text-sm mb-4">Content preview: I need help with the DSA assignment...</p>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-green-500">Approve</Button>
                    <Button size="sm" variant="destructive">Reject</Button>
                    <Button size="sm" variant="outline">View Full Content</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
