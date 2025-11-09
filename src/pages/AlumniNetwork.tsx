import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users, MessageSquare, Calendar, Briefcase, GraduationCap, Linkedin, ExternalLink } from 'lucide-react';

const AlumniNetwork = () => {
  // VNIT Alumni Data
  const alumni = [
    {
      id: '1',
      name: 'Dr. S. Ramanathan',
      graduationYear: 1995,
      currentCompany: 'ISRO',
      position: 'Scientist & Project Director',
      expertise: ['Space Technology', 'Satellite Systems'],
      mentorshipAvailable: true,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ramanathan',
      linkedinUrl: 'https://www.linkedin.com/in/dr-s-ramanathan-isro/',
      email: 'alumni@vnit.ac.in'
    },
    {
      id: '2',
      name: 'Anjali Bansal',
      graduationYear: 1998,
      currentCompany: 'Tata Group',
      position: 'Former Chairperson - Trent',
      expertise: ['Retail', 'Business Strategy'],
      mentorshipAvailable: true,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali',
      linkedinUrl: 'https://www.linkedin.com/in/anjali-bansal-tata/',
      email: 'alumni@vnit.ac.in'
    },
    {
      id: '3',
      name: 'Rajat Gupta',
      graduationYear: 2005,
      currentCompany: 'Microsoft',
      position: 'Senior Engineering Manager',
      expertise: ['Cloud Computing', 'AI/ML'],
      mentorshipAvailable: true,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajat',
      linkedinUrl: 'https://www.linkedin.com/in/rajat-gupta-microsoft/',
      email: 'alumni@vnit.ac.in'
    },
    {
      id: '4',
      name: 'Priya Deshpande',
      graduationYear: 2010,
      currentCompany: 'Google',
      position: 'Product Manager',
      expertise: ['Product Strategy', 'Mobile Apps'],
      mentorshipAvailable: true,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
      linkedinUrl: 'https://www.linkedin.com/in/priya-deshpande-google/',
      email: 'alumni@vnit.ac.in'
    },
    {
      id: '5',
      name: 'Arun Mehra',
      graduationYear: 2008,
      currentCompany: 'Amazon',
      position: 'Director of Engineering',
      expertise: ['E-commerce', 'Distributed Systems'],
      mentorshipAvailable: false,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arun',
      linkedinUrl: 'https://www.linkedin.com/in/arun-mehra-amazon/',
      email: 'alumni@vnit.ac.in'
    },
    {
      id: '6',
      name: 'Dr. Neha Sharma',
      graduationYear: 2012,
      currentCompany: 'Stanford University',
      position: 'Research Scientist',
      expertise: ['Biomedical Engineering', 'AI in Healthcare'],
      mentorshipAvailable: true,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Neha',
      linkedinUrl: 'https://www.linkedin.com/in/neha-sharma-stanford/',
      email: 'alumni@vnit.ac.in'
    }
  ];

  const upcomingEvents = [
    {
      id: '1',
      title: 'Space Technology & Innovation at ISRO',
      speaker: 'Dr. S. Ramanathan',
      date: '2024-12-15',
      time: '3:00 PM',
      attendees: 320,
      registerLink: 'https://forms.gle/vnitlecture1'
    },
    {
      id: '2',
      title: 'Building Scalable Cloud Systems',
      speaker: 'Rajat Gupta',
      date: '2024-12-20',
      time: '4:30 PM',
      attendees: 280,
      registerLink: 'https://forms.gle/vnitlecture2'
    },
    {
      id: '3',
      title: 'Product Management in Tech Giants',
      speaker: 'Priya Deshpande',
      date: '2025-01-05',
      time: '2:00 PM',
      attendees: 195,
      registerLink: 'https://forms.gle/vnitlecture3'
    },
    {
      id: '4',
      title: 'AI in Healthcare Research',
      speaker: 'Dr. Neha Sharma',
      date: '2025-01-12',
      time: '11:00 AM',
      attendees: 150,
      registerLink: 'https://forms.gle/vnitlecture4'
    }
  ];

  const mentorshipRequests = [
    {
      id: '1',
      mentor: 'Dr. S. Ramanathan',
      status: 'Pending',
      requestedDate: '2024-11-05',
      area: 'Space Technology Research Guidance',
    },
    {
      id: '2',
      mentor: 'Rajat Gupta',
      status: 'Approved',
      requestedDate: '2024-11-01',
      area: 'Cloud Computing Career Guidance',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">VNIT Alumni Network</h1>
        <p className="text-muted-foreground">Connect with VNIT alumni and build your professional network</p>
      </div>

      <Tabs defaultValue="directory" className="w-full">
        <TabsList className="w-full overflow-x-auto flex-nowrap justify-start">
          <TabsTrigger value="directory">Alumni Directory</TabsTrigger>
          <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
          <TabsTrigger value="events">Events & Webinars</TabsTrigger>
          <TabsTrigger value="jobs">Job Referrals</TabsTrigger>
        </TabsList>

        {/* Alumni Directory */}
        <TabsContent value="directory" className="mt-6">
          <div className="mb-6 flex gap-4">
            <Input placeholder="Search alumni by name, company, or expertise..." className="max-w-md" />
            <Button variant="outline">Filter</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumni.map((alumnus) => (
              <Card key={alumnus.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={alumnus.avatar} />
                      <AvatarFallback className="text-lg">{alumnus.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">{alumnus.name}</CardTitle>
                      <p className="text-sm text-muted-foreground mb-1">{alumnus.position}</p>
                      <p className="text-sm font-semibold text-primary">{alumnus.currentCompany}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <GraduationCap className="h-4 w-4" />
                      <span>Class of {alumnus.graduationYear}</span>
                    </div>
                    
                    <div>
                      <p className="text-sm font-semibold mb-2">Expertise</p>
                      <div className="flex flex-wrap gap-2">
                        {alumnus.expertise.map((skill) => (
                          <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                      </div>
                    </div>

                    {alumnus.mentorshipAvailable && (
                      <Badge className="w-full justify-center bg-green-500">Available for Mentorship</Badge>
                    )}

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1" asChild>
                        <a href={`mailto:${alumnus.email}`}>
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Contact
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={alumnus.linkedinUrl} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                          <ExternalLink className="h-4 w-4 ml-1" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Mentorship */}
        <TabsContent value="mentorship" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Available Mentors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {alumni.filter(a => a.mentorshipAvailable).map((mentor) => (
                    <div key={mentor.id} className="p-4 border rounded-lg">
                      <div className="flex items-start gap-4 mb-3">
                        <Avatar>
                          <AvatarImage src={mentor.avatar} />
                          <AvatarFallback>{mentor.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h4 className="font-semibold">{mentor.name}</h4>
                          <p className="text-sm text-muted-foreground">{mentor.position}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {mentor.expertise.slice(0, 2).map((skill) => (
                          <Badge key={skill} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1" asChild>
                          <a href={`mailto:${mentor.email}`}>
                            Request Mentorship
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a href={mentor.linkedinUrl} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>My Mentorship Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mentorshipRequests.map((request) => (
                    <div key={request.id} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold">{request.mentor}</h4>
                          <p className="text-sm text-muted-foreground">{request.area}</p>
                        </div>
                        <Badge variant="secondary">{request.status}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">Requested on {request.requestedDate}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Events & Webinars */}
        <TabsContent value="events" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Calendar className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">{event.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">by {event.speaker}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{event.date}</span>
                      </div>
                      <span>•</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees} registered</span>
                    </div>
                    <Button className="w-full" asChild>
                      <a href={event.registerLink} target="_blank" rel="noopener noreferrer">
                        Register Now
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Job Referrals */}
        <TabsContent value="jobs" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Job Referral System
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Briefcase className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Request Referrals</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Connect with alumni working at your dream companies and request referrals for open positions.
                </p>
                <Button asChild>
                  <a href="#directory">Browse Alumni by Company</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AlumniNetwork;
