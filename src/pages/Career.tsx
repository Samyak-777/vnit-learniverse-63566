import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Briefcase,
  Calendar,
  Code,
  Download,
  FileText,
  TrendingUp,
  Trophy,
  Upload,
  Users,
} from 'lucide-react';

const Career = () => {
  const placements = [
    { company: 'Google', role: 'Software Engineer', package: '₹45 LPA', deadline: '3 days', applicants: 45 },
    { company: 'Microsoft', role: 'Data Scientist', package: '₹42 LPA', deadline: '5 days', applicants: 38 },
    { company: 'Amazon', role: 'SDE-1', package: '₹40 LPA', deadline: '1 week', applicants: 52 },
  ];

  const internships = [
    { company: 'Meta', role: 'ML Intern', duration: '3 months', stipend: '₹1L/month', deadline: '2 weeks' },
    { company: 'Adobe', role: 'Frontend Intern', duration: '6 months', stipend: '₹80K/month', deadline: '10 days' },
  ];

  const codingContests = [
    { platform: 'LeetCode', contest: 'Weekly Contest 380', date: 'Tomorrow, 8 PM', participants: 12000 },
    { platform: 'CodeChef', contest: 'Starters 120', date: 'Wed, 8:30 PM', participants: 8000 },
    { platform: 'Codeforces', contest: 'Round 920', date: 'Thu, 8:05 PM', participants: 15000 },
  ];

  const mockInterviews = [
    { interviewer: 'Dr. Amit Kumar', company: 'Ex-Google', date: 'Nov 15, 2024', time: '10:00 AM', slots: 5 },
    { interviewer: 'Ms. Priya Shah', company: 'Ex-Microsoft', date: 'Nov 18, 2024', time: '2:00 PM', slots: 3 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Career & Placement Hub</h1>
        <p className="text-muted-foreground">
          Your gateway to internships, placements, and career development
        </p>
      </div>

      <Tabs defaultValue="placements" className="w-full">
        <TabsList className="w-full overflow-x-auto flex-nowrap justify-start">
          <TabsTrigger value="placements">Placement Drives</TabsTrigger>
          <TabsTrigger value="internships">Internships</TabsTrigger>
          <TabsTrigger value="resume">Resume Builder</TabsTrigger>
          <TabsTrigger value="coding">Coding Practice</TabsTrigger>
          <TabsTrigger value="interviews">Mock Interviews</TabsTrigger>
        </TabsList>

        {/* Placement Drives */}
        <TabsContent value="placements" className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {placements.map((placement, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-1">{placement.company}</CardTitle>
                      <p className="text-sm text-muted-foreground">{placement.role}</p>
                    </div>
                    <Badge variant="default">{placement.package}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Deadline
                    </span>
                    <span className="font-medium text-destructive">{placement.deadline}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      Applied
                    </span>
                    <span className="font-medium">{placement.applicants} students</span>
                  </div>
                  <Button className="w-full">Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Internships */}
        <TabsContent value="internships" className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internships.map((internship, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-1">{internship.company}</CardTitle>
                      <p className="text-sm text-muted-foreground">{internship.role}</p>
                    </div>
                    <Badge variant="secondary">{internship.stipend}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{internship.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Deadline</span>
                    <span className="font-medium text-destructive">{internship.deadline}</span>
                  </div>
                  <Button className="w-full">Apply for Internship</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Resume Builder */}
        <TabsContent value="resume" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Resume Builder
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Full Name</Label>
                  <Input placeholder="John Doe" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input type="email" placeholder="john@vnit.ac.in" />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone</Label>
                    <Input placeholder="+91 9876543210" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Professional Summary</Label>
                  <Textarea
                    placeholder="Brief summary about yourself..."
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Skills (comma separated)</Label>
                  <Input placeholder="Python, React, Machine Learning, etc." />
                </div>
                <div className="space-y-2">
                  <Label>Projects</Label>
                  <Textarea
                    placeholder="Describe your projects..."
                    rows={6}
                  />
                </div>
                <Button className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Generate Resume PDF
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Resume Templates</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    📄 Professional
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    📄 Modern
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    📄 Technical
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    📄 Creative
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    Resume Tips
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Upload className="h-4 w-4 mr-2" />
                    Sample Resumes
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Coding Practice */}
        <TabsContent value="coding" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Upcoming Contests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {codingContests.map((contest, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold mb-1">{contest.contest}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{contest.platform}</p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {contest.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {contest.participants.toLocaleString()} participants
                            </span>
                          </div>
                        </div>
                        <Button>
                          <Trophy className="h-4 w-4 mr-2" />
                          Register
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="card-hover">
              <CardContent className="pt-6">
                <TrendingUp className="h-10 w-10 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Your Rating</h3>
                <p className="text-3xl font-bold text-primary">1456</p>
                <p className="text-sm text-muted-foreground mt-1">LeetCode Rating</p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardContent className="pt-6">
                <Trophy className="h-10 w-10 text-secondary mb-3" />
                <h3 className="font-semibold mb-2">Problems Solved</h3>
                <p className="text-3xl font-bold text-secondary">234</p>
                <p className="text-sm text-muted-foreground mt-1">Across all platforms</p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardContent className="pt-6">
                <Code className="h-10 w-10 text-success mb-3" />
                <h3 className="font-semibold mb-2">Contest Rank</h3>
                <p className="text-3xl font-bold text-success">#45</p>
                <p className="text-sm text-muted-foreground mt-1">In college</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Mock Interviews */}
        <TabsContent value="interviews" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Schedule Mock Interview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockInterviews.map((interview, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{interview.interviewer}</h4>
                          <Badge variant="outline" className="mb-2">
                            {interview.company}
                          </Badge>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {interview.date}
                            </span>
                            <span>{interview.time}</span>
                            <Badge variant="secondary">{interview.slots} slots left</Badge>
                          </div>
                        </div>
                        <Button>Book Slot</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Interview Preparation Resources</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Button variant="outline" className="justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Common Interview Questions
              </Button>
              <Button variant="outline" className="justify-start">
                <Code className="h-4 w-4 mr-2" />
                Coding Interview Patterns
              </Button>
              <Button variant="outline" className="justify-start">
                <Briefcase className="h-4 w-4 mr-2" />
                Behavioral Questions
              </Button>
              <Button variant="outline" className="justify-start">
                <TrendingUp className="h-4 w-4 mr-2" />
                System Design Basics
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Career;