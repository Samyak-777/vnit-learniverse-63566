import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Briefcase, FileText, Bell, Video, Calendar, Building } from 'lucide-react';

const CareerHub = () => {
  const jobPostings = [
    {
      id: '1',
      company: 'Google',
      position: 'Software Engineer Intern',
      type: 'Internship',
      deadline: '2025-12-15',
      eligibility: ['CSE', 'ECE', 'IT'],
      ctc: '₹15-20 LPA',
    },
    {
      id: '2',
      company: 'Microsoft',
      position: 'Full Time - SDE',
      type: 'Full Time',
      deadline: '2025-12-20',
      eligibility: ['CSE', 'IT'],
      ctc: '₹25-30 LPA',
    },
  ];

  const interviewSchedule = [
    {
      id: '1',
      company: 'Amazon',
      round: 'Technical Round 1',
      date: '2025-11-15',
      time: '10:00 AM',
      mode: 'Online',
    },
    {
      id: '2',
      company: 'Flipkart',
      round: 'HR Interview',
      date: '2025-11-18',
      time: '2:00 PM',
      mode: 'In-person',
    },
  ];

  const mockInterviews = [
    { id: '1', topic: 'Data Structures', slots: 5, duration: '45 mins' },
    { id: '2', topic: 'System Design', slots: 3, duration: '60 mins' },
    { id: '3', topic: 'Behavioral', slots: 8, duration: '30 mins' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Career & Placement Hub</h1>
        <p className="text-muted-foreground">Your gateway to internships and placements</p>
      </div>

      <Tabs defaultValue="opportunities" className="w-full">
        <TabsList className="w-full overflow-x-auto flex-nowrap justify-start">
          <TabsTrigger value="opportunities">Job Opportunities</TabsTrigger>
          <TabsTrigger value="resume">Resume Builder</TabsTrigger>
          <TabsTrigger value="interviews">Mock Interviews</TabsTrigger>
          <TabsTrigger value="applications">My Applications</TabsTrigger>
        </TabsList>

        {/* Job Opportunities */}
        <TabsContent value="opportunities" className="mt-6">
          <div className="mb-6 flex gap-4">
            <Input placeholder="Search companies or positions..." className="max-w-md" />
            <Button variant="outline">
              <Bell className="h-4 w-4 mr-2" />
              Set Alerts
            </Button>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {jobPostings.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Building className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-1">{job.company}</CardTitle>
                        <p className="text-muted-foreground">{job.position}</p>
                      </div>
                    </div>
                    <Badge>{job.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">CTC</p>
                      <p className="font-semibold">{job.ctc}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Deadline</p>
                      <p className="font-semibold">{job.deadline}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Eligible Branches</p>
                      <div className="flex flex-wrap gap-2">
                        {job.eligibility.map((branch) => (
                          <Badge key={branch} variant="outline">{branch}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1">Apply Now</Button>
                    <Button variant="outline">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Resume Builder */}
        <TabsContent value="resume" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-6 w-6" />
                Resume Builder
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card className="cursor-pointer hover:shadow-lg transition-shadow border-2 border-dashed">
                  <CardContent className="pt-6 text-center">
                    <div className="h-32 bg-muted rounded mb-4 flex items-center justify-center">
                      <FileText className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2">Classic Template</h3>
                    <p className="text-sm text-muted-foreground mb-4">Clean and professional</p>
                    <Button size="sm" className="w-full">Use Template</Button>
                  </CardContent>
                </Card>

                <Card className="cursor-pointer hover:shadow-lg transition-shadow border-2 border-dashed">
                  <CardContent className="pt-6 text-center">
                    <div className="h-32 bg-muted rounded mb-4 flex items-center justify-center">
                      <FileText className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2">Modern Template</h3>
                    <p className="text-sm text-muted-foreground mb-4">Eye-catching design</p>
                    <Button size="sm" className="w-full">Use Template</Button>
                  </CardContent>
                </Card>

                <Card className="cursor-pointer hover:shadow-lg transition-shadow border-2 border-dashed">
                  <CardContent className="pt-6 text-center">
                    <div className="h-32 bg-muted rounded mb-4 flex items-center justify-center">
                      <FileText className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2">Technical Template</h3>
                    <p className="text-sm text-muted-foreground mb-4">For tech roles</p>
                    <Button size="sm" className="w-full">Use Template</Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex gap-4">
                <Button className="flex-1">Create New Resume</Button>
                <Button variant="outline">Upload Existing</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Mock Interviews */}
        <TabsContent value="interviews" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Upcoming Interviews
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {interviewSchedule.map((interview) => (
                    <div key={interview.id} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold">{interview.company}</h4>
                          <p className="text-sm text-muted-foreground">{interview.round}</p>
                        </div>
                        <Badge>{interview.mode}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{interview.date}</span>
                        <span>•</span>
                        <span>{interview.time}</span>
                      </div>
                      <Button size="sm" variant="outline" className="w-full mt-3">
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="h-5 w-5" />
                  Schedule Mock Interview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockInterviews.map((mock) => (
                    <div key={mock.id} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold">{mock.topic}</h4>
                          <p className="text-sm text-muted-foreground">Duration: {mock.duration}</p>
                        </div>
                        <Badge variant="outline">{mock.slots} slots left</Badge>
                      </div>
                      <Button size="sm" className="w-full mt-3">
                        Book Slot
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* My Applications */}
        <TabsContent value="applications" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Application Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-12">
                No applications yet. Start applying to see your application status here.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CareerHub;