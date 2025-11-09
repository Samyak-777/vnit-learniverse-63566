import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Briefcase, FileText, Bell, Video, Calendar, Building, ExternalLink } from 'lucide-react';

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
      applyLink: 'https://careers.google.com/jobs/'
    },
    {
      id: '2',
      company: 'Microsoft',
      position: 'Full Time - SDE',
      type: 'Full Time',
      deadline: '2025-12-20',
      eligibility: ['CSE', 'IT'],
      ctc: '₹25-30 LPA',
      applyLink: 'https://careers.microsoft.com/'
    },
    {
      id: '3',
      company: 'Amazon',
      position: 'SDE 1',
      type: 'Full Time',
      deadline: '2025-12-18',
      eligibility: ['CSE', 'ECE', 'IT', 'EEE'],
      ctc: '₹20-25 LPA',
      applyLink: 'https://www.amazon.jobs/'
    },
    {
      id: '4',
      company: 'Meta',
      position: 'Frontend Engineer',
      type: 'Full Time',
      deadline: '2025-12-22',
      eligibility: ['CSE', 'IT'],
      ctc: '₹30-35 LPA',
      applyLink: 'https://www.metacareers.com/'
    },
    {
      id: '5',
      company: 'Apple',
      position: 'iOS Developer',
      type: 'Full Time',
      deadline: '2025-12-25',
      eligibility: ['CSE', 'IT'],
      ctc: '₹35-40 LPA',
      applyLink: 'https://www.apple.com/careers/in/'
    },
    {
      id: '6',
      company: 'Netflix',
      position: 'Backend Engineer',
      type: 'Full Time',
      deadline: '2025-12-28',
      eligibility: ['CSE'],
      ctc: '₹40-45 LPA',
      applyLink: 'https://jobs.netflix.com/'
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
      prampLink: 'https://www.pramp.com/#/'
    },
    {
      id: '2',
      company: 'Flipkart',
      round: 'HR Interview',
      date: '2025-11-18',
      time: '2:00 PM',
      mode: 'In-person',
      prampLink: 'https://www.pramp.com/#/'
    },
    {
      id: '3',
      company: 'Microsoft',
      round: 'Final Technical Round',
      date: '2025-11-20',
      time: '11:30 AM',
      mode: 'Online',
      prampLink: 'https://www.pramp.com/#/'
    },
  ];

  const mockInterviews = [
    { 
      id: '1', 
      topic: 'Data Structures', 
      slots: 5, 
      duration: '45 mins',
      prampLink: 'https://www.pramp.com/#/'
    },
    { 
      id: '2', 
      topic: 'System Design', 
      slots: 3, 
      duration: '60 mins',
      prampLink: 'https://www.pramp.com/#/'
    },
    { 
      id: '3', 
      topic: 'Behavioral', 
      slots: 8, 
      duration: '30 mins',
      prampLink: 'https://www.pramp.com/#/'
    },
    { 
      id: '4', 
      topic: 'Algorithm Design', 
      slots: 6, 
      duration: '50 mins',
      prampLink: 'https://www.pramp.com/#/'
    },
  ];

  const applications = [
    {
      id: '1',
      company: 'Google',
      position: 'Software Engineer Intern',
      status: 'Under Review',
      appliedDate: '2025-11-10',
      nextRound: 'Coding Test',
      statusColor: 'bg-blue-500'
    },
    {
      id: '2',
      company: 'Microsoft',
      position: 'SDE Full Time',
      status: 'Interview Scheduled',
      appliedDate: '2025-11-08',
      nextRound: 'Technical Round 1',
      statusColor: 'bg-green-500'
    },
    {
      id: '3',
      company: 'Amazon',
      position: 'SDE 1',
      status: 'Rejected',
      appliedDate: '2025-11-05',
      nextRound: 'None',
      statusColor: 'bg-red-500'
    },
    {
      id: '4',
      company: 'Meta',
      position: 'Frontend Engineer',
      status: 'Offer Received',
      appliedDate: '2025-11-01',
      nextRound: 'Offer Discussion',
      statusColor: 'bg-green-600'
    },
  ];

  const resumeTemplates = [
    { 
      id: '1', 
      name: 'Classic Template', 
      description: 'Clean and professional',
      overleafLink: 'https://www.overleaf.com/'
    },
    { 
      id: '2', 
      name: 'Modern Template', 
      description: 'Eye-catching design',
      overleafLink: 'https://www.overleaf.com/'
    },
    { 
      id: '3', 
      name: 'Technical Template', 
      description: 'For tech roles',
      overleafLink: 'https://www.overleaf.com/'
    },
    { 
      id: '4', 
      name: 'Creative Template', 
      description: 'For design roles',
      overleafLink: 'https://www.overleaf.com/'
    },
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
                    <Button className="flex-1" asChild>
                      <a href={job.applyLink} target="_blank" rel="noopener noreferrer">
                        Apply Now
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
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
                {resumeTemplates.map((template) => (
                  <Card key={template.id} className="cursor-pointer hover:shadow-lg transition-shadow border-2 border-dashed">
                    <CardContent className="pt-6 text-center">
                      <div className="h-32 bg-muted rounded mb-4 flex items-center justify-center">
                        <FileText className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <h3 className="font-semibold mb-2">{template.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{template.description}</p>
                      <Button size="sm" className="w-full" asChild>
                        <a href={template.overleafLink} target="_blank" rel="noopener noreferrer">
                          Use Template on Overleaf
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Button className="flex-1" asChild>
                  <a href="https://www.overleaf.com/" target="_blank" rel="noopener noreferrer">
                    Create New Resume on Overleaf
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://www.overleaf.com/" target="_blank" rel="noopener noreferrer">
                    Upload Existing
                  </a>
                </Button>
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
                      <Button size="sm" variant="outline" className="w-full mt-3" asChild>
                        <a href={interview.prampLink} target="_blank" rel="noopener noreferrer">
                          Practice on Pramp
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </a>
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
                      <Button size="sm" className="w-full mt-3" asChild>
                        <a href={mock.prampLink} target="_blank" rel="noopener noreferrer">
                          Book on Pramp
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </a>
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
              <div className="space-y-4">
                {applications.map((application) => (
                  <div key={application.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-lg">{application.company}</h4>
                        <p className="text-muted-foreground">{application.position}</p>
                      </div>
                      <Badge className={application.statusColor}>{application.status}</Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Applied: </span>
                        <span>{application.appliedDate}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Next Round: </span>
                        <span>{application.nextRound}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" variant="outline">View Details</Button>
                      <Button size="sm" variant="outline">Withdraw</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CareerHub;
