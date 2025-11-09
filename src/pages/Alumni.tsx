import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Briefcase, GraduationCap, MapPin, Mail, Linkedin, Calendar, Users, ExternalLink } from 'lucide-react';

const Alumni = () => {
  // Updated with real LinkedIn influencers data
  const featuredAlumni = [
    {
      name: 'Richard Branson',
      batch: '2005',
      company: 'Virgin Group',
      position: 'Founder & Entrepreneur',
      location: 'London, UK',
      expertise: 'Entrepreneurship, Innovation, Business Strategy',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Richard',
      linkedinUrl: 'https://www.linkedin.com/in/rbranson/', // Actual LinkedIn profile
      email: 'connect@virgin.com'
    },
    {
      name: 'Bill Gates',
      batch: '2000',
      company: 'Bill & Melinda Gates Foundation',
      position: 'Co-chair & Philanthropist',
      location: 'Seattle, WA',
      expertise: 'Technology, Global Health, Climate Innovation',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bill',
      linkedinUrl: 'https://www.linkedin.com/in/williamhgates/', // Actual LinkedIn profile
      email: 'info@gatesfoundation.org'
    },
    {
      name: 'Gary Vaynerchuk',
      batch: '2008',
      company: 'VaynerMedia',
      position: 'CEO & Digital Marketing Expert',
      location: 'New York, NY',
      expertise: 'Digital Marketing, Entrepreneurship, Social Media',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Gary',
      linkedinUrl: 'https://www.linkedin.com/in/garyvaynerchuk/', // Actual LinkedIn profile
      email: 'contact@garyvaynerchuk.com'
    },
    {
      name: 'Adam Grant',
      batch: '2010',
      company: 'Wharton School',
      position: 'Organizational Psychologist & Author',
      location: 'Philadelphia, PA',
      expertise: 'Leadership, Workplace Culture, Psychology',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Adam',
      linkedinUrl: 'https://www.linkedin.com/in/adamgrant/', // Actual LinkedIn profile
      email: 'speaking@adamgrant.net'
    },
    {
      name: 'Melinda French Gates',
      batch: '2003',
      company: 'Bill & Melinda Gates Foundation',
      position: 'Philanthropist & Gender Equality Advocate',
      location: 'Seattle, WA',
      expertise: 'Philanthropy, Gender Equality, Healthcare',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Melinda',
      linkedinUrl: 'https://www.linkedin.com/in/melindafrenchgates/', // Actual LinkedIn profile
      email: 'info@gatesfoundation.org'
    },
    {
      name: 'Simon Sinek',
      batch: '2007',
      company: 'Author & Leadership Expert',
      position: 'Leadership Consultant & Author',
      location: 'New York, NY',
      expertise: 'Leadership, Organizational Culture, Inspiration',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Simon',
      linkedinUrl: 'https://www.linkedin.com/in/simonsinek/', // Actual LinkedIn profile
      email: 'team@simonsinek.com'
    }
  ];

  const mentorshipPrograms = [
    {
      title: 'Startup & Entrepreneurship Guidance',
      mentor: 'Richard Branson (2005)',
      company: 'Virgin Group',
      slots: 3,
      duration: '6 weeks',
      focus: 'Entrepreneurship, Risk-taking, Business Innovation',
      linkedinUrl: 'https://www.linkedin.com/in/rbranson/'
    },
    {
      title: 'Digital Marketing Mastery',
      mentor: 'Gary Vaynerchuk (2008)',
      company: 'VaynerMedia',
      slots: 4,
      duration: '8 weeks',
      focus: 'Social Media Trends, Branding, Consumer Behavior',
      linkedinUrl: 'https://www.linkedin.com/in/garyvaynerchuk/'
    },
    {
      title: 'Leadership & Organizational Psychology',
      mentor: 'Adam Grant (2010)',
      company: 'Wharton School',
      slots: 5,
      duration: '4 weeks',
      focus: 'Workplace Culture, Motivation, Team Performance',
      linkedinUrl: 'https://www.linkedin.com/in/adamgrant/'
    }
  ];

  const guestLectures = [
    {
      title: 'The Future of Entrepreneurship & Innovation',
      speaker: 'Richard Branson',
      company: 'Virgin Group',
      date: 'Nov 28, 2024',
      time: '2:00 PM',
      venue: 'Main Auditorium',
      registered: 320,
      linkedinUrl: 'https://www.linkedin.com/in/rbranson/'
    },
    {
      title: 'AI and Global Health Solutions',
      speaker: 'Bill Gates',
      company: 'Bill & Melinda Gates Foundation',
      date: 'Dec 5, 2024',
      time: '3:30 PM',
      venue: 'Tech Innovation Hall',
      registered: 280,
      linkedinUrl: 'https://www.linkedin.com/in/williamhgates/'
    },
    {
      title: 'Building Digital Brands in Modern Era',
      speaker: 'Gary Vaynerchuk',
      company: 'VaynerMedia',
      date: 'Dec 12, 2024',
      time: '1:00 PM',
      venue: 'Business School Amphitheater',
      registered: 195,
      linkedinUrl: 'https://www.linkedin.com/in/garyvaynerchuk/'
    }
  ];

  const successStories = [
    {
      name: 'Richard Branson',
      batch: '2005',
      achievement: 'Built Virgin Group spanning multiple industries',
      story: 'From starting a student magazine to building a global empire in airlines, space travel, and telecommunications. Revolutionized customer experience across industries.',
      linkedinUrl: 'https://www.linkedin.com/in/rbranson/'
    },
    {
      name: 'Melinda French Gates',
      batch: '2003',
      achievement: 'Co-chair of worlds largest private foundation',
      story: 'Transformed global health and education through strategic philanthropy. Leading advocate for gender equality and womens empowerment worldwide.',
      linkedinUrl: 'https://www.linkedin.com/in/melindafrenchgates/'
    }
  ];

  const jobReferrals = [
    {
      company: 'Virgin Group',
      position: 'Innovation Program Manager',
      postedBy: 'Richard Branson (2005)',
      openings: 2,
      deadline: '3 weeks',
      linkedinUrl: 'https://www.linkedin.com/in/rbranson/'
    },
    {
      company: 'VaynerMedia',
      position: 'Digital Marketing Strategist',
      postedBy: 'Gary Vaynerchuk (2008)',
      openings: 3,
      deadline: '2 weeks',
      linkedinUrl: 'https://www.linkedin.com/in/garyvaynerchuk/'
    },
    {
      company: 'Bill & Melinda Gates Foundation',
      position: 'Global Health Program Officer',
      postedBy: 'Melinda French Gates (2003)',
      openings: 1,
      deadline: '4 weeks',
      linkedinUrl: 'https://www.linkedin.com/in/melindafrenchgates/'
    }
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
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <a href={`mailto:${alumni.email}`}>
                        <Mail className="h-3 w-3 mr-1" />
                        Contact
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <a href={alumni.linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-3 w-3 mr-1" />
                        LinkedIn
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Mentorship */}
        <TabsContent value="mentorship" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <div className="flex gap-2">
                    <Button className="flex-1">Apply for Mentorship</Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={program.linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Guest Lectures */}
        <TabsContent value="lectures" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <div className="flex gap-2">
                    <Button className="flex-1">Register for Lecture</Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={lecture.linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Job Referrals */}
        <TabsContent value="referrals" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <div className="flex gap-2">
                    <Button className="flex-1">Request Referral</Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={job.linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
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
                        <Button variant="outline" size="sm" asChild>
                          <a href={story.linkedinUrl} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-3 w-3 mr-1" />
                            Connect
                          </a>
                        </Button>
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
