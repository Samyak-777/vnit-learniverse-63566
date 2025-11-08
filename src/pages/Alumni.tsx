import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Briefcase, GraduationCap, MapPin, Mail, Linkedin, Calendar, Users } from 'lucide-react';

const Alumni = () => {
  const featuredAlumni = [
    {
      name: 'Dr. Rajesh Sharma',
      batch: '2010',
      company: 'Google',
      position: 'Senior Engineering Manager',
      location: 'Mountain View, CA',
      expertise: 'Cloud Architecture, Distributed Systems',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh',
    },
    {
      name: 'Priya Malhotra',
      batch: '2015',
      company: 'Microsoft',
      position: 'Principal Product Manager',
      location: 'Seattle, WA',
      expertise: 'Product Strategy, AI/ML',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
    },
    {
      name: 'Amit Patel',
      batch: '2012',
      company: 'Amazon',
      position: 'Director of Engineering',
      location: 'Bangalore, India',
      expertise: 'E-commerce, System Design',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amit',
    },
  ];

  const mentorshipPrograms = [
    {
      title: 'Career Guidance Program',
      mentor: 'Ananya Singh (2013)',
      company: 'Meta',
      slots: 5,
      duration: '4 weeks',
      focus: 'Career Transitions, Interview Prep',
    },
    {
      title: 'Startup Mentorship',
      mentor: 'Karthik Iyer (2011)',
      company: 'Founder, TechStartup',
      slots: 3,
      duration: '8 weeks',
      focus: 'Entrepreneurship, Product Development',
    },
  ];

  const guestLectures = [
    {
      title: 'AI in Production Systems',
      speaker: 'Dr. Sneha Kulkarni',
      company: 'OpenAI',
      date: 'Nov 25, 2024',
      time: '4:00 PM',
      venue: 'Main Auditorium',
      registered: 230,
    },
    {
      title: 'Building Scalable Architectures',
      speaker: 'Rahul Verma',
      company: 'Netflix',
      date: 'Dec 2, 2024',
      time: '3:00 PM',
      venue: 'CSE Seminar Hall',
      registered: 180,
    },
  ];

  const successStories = [
    {
      name: 'Vikram Reddy',
      batch: '2016',
      achievement: 'Founded AI Startup valued at $50M',
      story: 'From campus to Silicon Valley, journey of building a successful AI company.',
    },
    {
      name: 'Pooja Mehta',
      batch: '2014',
      achievement: 'Published research in Nature',
      story: 'Groundbreaking research in quantum computing at MIT.',
    },
  ];

  const jobReferrals = [
    {
      company: 'Google',
      position: 'Software Engineer L4',
      postedBy: 'Arun Kumar (2012)',
      openings: 3,
      deadline: '2 weeks',
    },
    {
      company: 'Meta',
      position: 'Data Scientist',
      postedBy: 'Sanjana Shah (2015)',
      openings: 2,
      deadline: '10 days',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Alumni Network</h1>
        <p className="text-muted-foreground">
          Connect with successful alumni, get mentored, and explore opportunities
        </p>
      </div>

      {/* Search Bar */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search alumni by name, company, batch..." className="pl-10" />
            </div>
            <Button>Search</Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="directory" className="w-full">
        <TabsList className="w-full overflow-x-auto flex-nowrap justify-start">
          <TabsTrigger value="directory">Directory</TabsTrigger>
          <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
          <TabsTrigger value="lectures">Guest Lectures</TabsTrigger>
          <TabsTrigger value="referrals">Job Referrals</TabsTrigger>
          <TabsTrigger value="stories">Success Stories</TabsTrigger>
        </TabsList>

        {/* Alumni Directory */}
        <TabsContent value="directory" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAlumni.map((alumni, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <img
                      src={alumni.avatar}
                      alt={alumni.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">{alumni.name}</CardTitle>
                      <Badge variant="outline">Batch of {alumni.batch}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{alumni.position}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{alumni.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{alumni.location}</span>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-xs text-muted-foreground mb-2">Expertise</p>
                    <p className="text-sm">{alumni.expertise}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Mail className="h-3 w-3 mr-1" />
                      Contact
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Linkedin className="h-3 w-3 mr-1" />
                      LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Mentorship */}
        <TabsContent value="mentorship" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mentorshipPrograms.map((program, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{program.mentor}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Briefcase className="h-4 w-4" />
                    <span>{program.company}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Duration</p>
                      <p className="font-medium">{program.duration}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Available Slots</p>
                      <p className="font-medium">{program.slots} left</p>
                    </div>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-xs text-muted-foreground mb-1">Focus Areas</p>
                    <p className="text-sm">{program.focus}</p>
                  </div>
                  <Button className="w-full">Apply for Mentorship</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Guest Lectures */}
        <TabsContent value="lectures" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guestLectures.map((lecture, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">{lecture.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{lecture.speaker}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Briefcase className="h-4 w-4" />
                    <span>{lecture.company}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-2 text-sm">
                    <div>
                      <div className="flex items-center gap-1 text-muted-foreground mb-1">
                        <Calendar className="h-3 w-3" />
                        <span>Date & Time</span>
                      </div>
                      <p className="font-medium">{lecture.date}</p>
                      <p className="text-muted-foreground">{lecture.time}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-muted-foreground mb-1">
                        <MapPin className="h-3 w-3" />
                        <span>Venue</span>
                      </div>
                      <p className="font-medium">{lecture.venue}</p>
                    </div>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-sm text-muted-foreground">
                      {lecture.registered} students registered
                    </p>
                  </div>
                  <Button className="w-full">Register for Lecture</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Job Referrals */}
        <TabsContent value="referrals" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobReferrals.map((job, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg mb-1">{job.position}</CardTitle>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                    </div>
                    <Badge variant="secondary">{job.openings} openings</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>Posted by {job.postedBy}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Application Deadline</span>
                    <span className="font-medium text-destructive">{job.deadline}</span>
                  </div>
                  <Button className="w-full">Request Referral</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Success Stories */}
        <TabsContent value="stories" className="mt-6">
          <div className="space-y-6">
            {successStories.map((story, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${story.name}`}
                      alt={story.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{story.name}</h3>
                          <Badge variant="outline">Batch of {story.batch}</Badge>
                        </div>
                      </div>
                      <p className="text-primary font-medium mb-2">{story.achievement}</p>
                      <p className="text-muted-foreground">{story.story}</p>
                      <Button variant="outline" className="mt-4">
                        Read Full Story
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Alumni;