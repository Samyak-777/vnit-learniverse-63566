import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users, MessageSquare, Calendar, Briefcase, GraduationCap, Linkedin } from 'lucide-react';

const AlumniNetwork = () => {
  const alumni = [
    {
      id: '1',
      name: 'Dr. Rajesh Kumar',
      graduationYear: 2015,
      currentCompany: 'Google',
      position: 'Senior Software Engineer',
      expertise: ['Cloud Computing', 'Machine Learning', 'System Design'],
      mentorshipAvailable: true,
      avatar: '',
    },
    {
      id: '2',
      name: 'Priya Sharma',
      graduationYear: 2018,
      currentCompany: 'Microsoft',
      position: 'Product Manager',
      expertise: ['Product Management', 'Agile', 'UX Research'],
      mentorshipAvailable: true,
      avatar: '',
    },
    {
      id: '3',
      name: 'Amit Patel',
      graduationYear: 2012,
      currentCompany: 'Startup Founder',
      position: 'CEO & Founder',
      expertise: ['Entrepreneurship', 'Fundraising', 'Business Strategy'],
      mentorshipAvailable: false,
      avatar: '',
    },
  ];

  const upcomingEvents = [
    {
      id: '1',
      title: 'AI/ML Career Webinar',
      speaker: 'Dr. Rajesh Kumar',
      date: '2025-11-20',
      time: '6:00 PM',
      attendees: 145,
    },
    {
      id: '2',
      title: 'Product Management Masterclass',
      speaker: 'Priya Sharma',
      date: '2025-11-25',
      time: '5:00 PM',
      attendees: 98,
    },
  ];

  const mentorshipRequests = [
    {
      id: '1',
      mentor: 'Dr. Rajesh Kumar',
      status: 'Pending',
      requestedDate: '2025-11-05',
      area: 'Machine Learning Career Guidance',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Alumni Network</h1>
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
                      <Button size="sm" className="flex-1">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Connect
                      </Button>
                      <Button size="sm" variant="outline">
                        <Linkedin className="h-4 w-4" />
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
                      <Button size="sm" className="w-full">Request Mentorship</Button>
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
                    <Button className="w-full">Register Now</Button>
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
                <Button>Browse Alumni by Company</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AlumniNetwork;