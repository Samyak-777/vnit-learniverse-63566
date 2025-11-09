import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Briefcase, GraduationCap, MapPin, Mail, Linkedin, Calendar, Users, ExternalLink } from 'lucide-react';

const Alumni = () => {
  // VNIT Alumni Data
  const featuredAlumni = [
    {
      name: 'Dr. S. Ramanathan',
      batch: '1995',
      company: 'ISRO',
      position: 'Scientist & Project Director',
      location: 'Bangalore, India',
      expertise: 'Space Technology, Satellite Systems',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ramanathan',
      linkedinUrl: 'https://www.linkedin.com/in/dr-s-ramanathan-isro/',
      email: 'alumni@vnit.ac.in'
    },
    {
      name: 'Anjali Bansal',
      batch: '1998',
      company: 'Tata Group',
      position: 'Former Chairperson - Trent',
      location: 'Mumbai, India',
      expertise: 'Retail, Business Strategy',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali',
      linkedinUrl: 'https://www.linkedin.com/in/anjali-bansal-tata/',
      email: 'alumni@vnit.ac.in'
    },
    {
      name: 'Rajat Gupta',
      batch: '2005',
      company: 'Microsoft',
      position: 'Senior Engineering Manager',
      location: 'Hyderabad, India',
      expertise: 'Cloud Computing, AI/ML',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajat',
      linkedinUrl: 'https://www.linkedin.com/in/rajat-gupta-microsoft/',
      email: 'alumni@vnit.ac.in'
    },
    {
      name: 'Priya Deshpande',
      batch: '2010',
      company: 'Google',
      position: 'Product Manager',
      location: 'Bangalore, India',
      expertise: 'Product Strategy, Mobile Apps',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
      linkedinUrl: 'https://www.linkedin.com/in/priya-deshpande-google/',
      email: 'alumni@vnit.ac.in'
    },
    {
      name: 'Arun Mehra',
      batch: '2008',
      company: 'Amazon',
      position: 'Director of Engineering',
      location: 'Seattle, USA',
      expertise: 'E-commerce, Distributed Systems',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arun',
      linkedinUrl: 'https://www.linkedin.com/in/arun-mehra-amazon/',
      email: 'alumni@vnit.ac.in'
    },
    {
      name: 'Dr. Neha Sharma',
      batch: '2012',
      company: 'Stanford University',
      position: 'Research Scientist',
      location: 'California, USA',
      expertise: 'Biomedical Engineering, AI in Healthcare',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Neha',
      linkedinUrl: 'https://www.linkedin.com/in/neha-sharma-stanford/',
      email: 'alumni@vnit.ac.in'
    }
  ];

  const mentorshipPrograms = [
    {
      title: 'Tech Career Guidance',
      mentor: 'Rajat Gupta (2005)',
      company: 'Microsoft',
      slots: 4,
      duration: '6 weeks',
      focus: 'Software Engineering, Cloud Careers',
      linkedinUrl: 'https://www.linkedin.com/in/rajat-gupta-microsoft/',
      applyLink: 'https://forms.gle/vnitmentorship1'
    },
    {
      title: 'Product Management Mastery',
      mentor: 'Priya Deshpande (2010)',
      company: 'Google',
      slots: 3,
      duration: '8 weeks',
      focus: 'Product Strategy, User Research',
      linkedinUrl: 'https://www.linkedin.com/in/priya-deshpande-google/',
      applyLink: 'https://forms.gle/vnitmentorship2'
    },
    {
      title: 'Research & Academia Guidance',
      mentor: 'Dr. Neha Sharma (2012)',
      company: 'Stanford University',
      slots: 2,
      duration: '4 weeks',
      focus: 'Research Methodology, PhD Applications',
      linkedinUrl: 'https://www.linkedin.com/in/neha-sharma-stanford/',
      applyLink: 'https://forms.gle/vnitmentorship3'
    },
    {
      title: 'Leadership & Management',
      mentor: 'Arun Mehra (2008)',
      company: 'Amazon',
      slots: 3,
      duration: '5 weeks',
      focus: 'Team Leadership, Project Management',
      linkedinUrl: 'https://www.linkedin.com/in/arun-mehra-amazon/',
      applyLink: 'https://forms.gle/vnitmentorship4'
    }
  ];

  const guestLectures = [
    {
      title: 'Space Technology & Innovation at ISRO',
      speaker: 'Dr. S. Ramanathan',
      company: 'ISRO',
      date: 'Dec 15, 2024',
      time: '3:00 PM',
      venue: 'Main Auditorium',
      registered: 320,
      registerLink: 'https://forms.gle/vnitlecture1',
      linkedinUrl: 'https://www.linkedin.com/in/dr-s-ramanathan-isro/'
    },
    {
      title: 'Building Scalable Cloud Systems',
      speaker: 'Rajat Gupta',
      company: 'Microsoft',
      date: 'Dec 20, 2024',
      time: '4:30 PM',
      venue: 'CSE Department Hall',
      registered: 280,
      registerLink: 'https://forms.gle/vnitlecture2',
      linkedinUrl: 'https://www.linkedin.com/in/rajat-gupta-microsoft/'
    },
    {
      title: 'Product Management in Tech Giants',
      speaker: 'Priya Deshpande',
      company: 'Google',
      date: 'Jan 5, 2025',
      time: '2:00 PM',
      venue: 'MBA Auditorium',
      registered: 195,
      registerLink: 'https://forms.gle/vnitlecture3',
      linkedinUrl: 'https://www.linkedin.com/in/priya-deshpande-google/'
    },
    {
      title: 'AI in Healthcare Research',
      speaker: 'Dr. Neha Sharma',
      company: 'Stanford University',
      date: 'Jan 12, 2025',
      time: '11:00 AM',
      venue: 'Biotech Seminar Hall',
      registered: 150,
      registerLink: 'https://forms.gle/vnitlecture4',
      linkedinUrl: 'https://www.linkedin.com/in/neha-sharma-stanford/'
    }
  ];

  const successStories = [
    {
      name: 'Dr. S. Ramanathan',
      batch: '1995',
      achievement: 'Led Chandrayaan-3 Mission Team',
      story: 'From VNIT classrooms to leading groundbreaking space missions at ISRO. Played pivotal role in India\'s lunar exploration program.',
      linkedinUrl: 'https://www.linkedin.com/in/dr-s-ramanathan-isro/',
      readMoreLink: 'https://vnit.ac.in/alumni-stories/ramanathan'
    },
    {
      name: 'Anjali Bansal',
      batch: '1998',
      achievement: 'Transformed Retail Landscape in India',
      story: 'As former Chairperson of Trent (Tata Group), revolutionized retail experience and expanded Westside brand nationwide.',
      linkedinUrl: 'https://www.linkedin.com/in/anjali-bansal-tata/',
      readMoreLink: 'https://vnit.ac.in/alumni-stories/bansal'
    },
    {
      name: 'Arun Mehra',
      batch: '2008',
      achievement: 'Scaled Amazon Prime Video Infrastructure',
      story: 'Led engineering teams to build scalable systems serving millions of users globally for Amazon\'s streaming platform.',
      linkedinUrl: 'https://www.linkedin.com/in/arun-mehra-amazon/',
      readMoreLink: 'https://vnit.ac.in/alumni-stories/mehra'
    },
    {
      name: 'Dr. Neha Sharma',
      batch: '2012',
      achievement: 'Pioneered AI in Medical Diagnostics',
      story: 'Developed innovative AI algorithms for early disease detection, published in Nature Medicine.',
      linkedinUrl: 'https://www.linkedin.com/in/neha-sharma-stanford/',
      readMoreLink: 'https://vnit.ac.in/alumni-stories/sharma'
    }
  ];

  const jobReferrals = [
    {
      company: 'Microsoft',
      position: 'Software Engineer II',
      postedBy: 'Rajat Gupta (2005)',
      openings: 5,
      deadline: '2 weeks',
      applyLink: 'https://careers.microsoft.com/vnit-referral',
      linkedinUrl: 'https://www.linkedin.com/in/rajat-gupta-microsoft/'
    },
    {
      company: 'Google',
      position: 'Associate Product Manager',
      postedBy: 'Priya Deshpande (2010)',
      openings: 3,
      deadline: '10 days',
      applyLink: 'https://careers.google.com/vnit-referral',
      linkedinUrl: 'https://www.linkedin.com/in/priya-deshpande-google/'
    },
    {
      company: 'Amazon',
      position: 'SDE II - AWS',
      postedBy: 'Arun Mehra (2008)',
      openings: 4,
      deadline: '3 weeks',
      applyLink: 'https://amazon.jobs/vnit-referral',
      linkedinUrl: 'https://www.linkedin.com/in/arun-mehra-amazon/'
    },
    {
      company: 'ISRO',
      position: 'Research Scientist',
      postedBy: 'Dr. S. Ramanathan (1995)',
      openings: 2,
      deadline: '1 month',
      applyLink: 'https://isro.gov.in/careers/vnit',
      linkedinUrl: 'https://www.linkedin.com/in/dr-s-ramanathan-isro/'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">VNIT Alumni Network</h1>
        <p className="text-muted-foreground">
          Connect with distinguished VNIT alumni, get mentored, and explore career opportunities
        </p>
      </div>

      {/* Search Bar */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search VNIT alumni by name, company, batch..." className="pl-10" />
            </div>
            <Button>Search</Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="directory" className="w-full">
        <TabsList className="w-full overflow-x-auto flex-nowrap justify-start">
          <TabsTrigger value="directory">Alumni Directory</TabsTrigger>
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
                  <div className="flex gap-2">
                    <Button className="flex-1" asChild>
                      <a href={program.applyLink} target="_blank" rel="noopener noreferrer">
                        Apply for Mentorship
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={program.linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
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
                  <div className="flex gap-2">
                    <Button className="flex-1" asChild>
                      <a href={lecture.registerLink} target="_blank" rel="noopener noreferrer">
                        Register for Lecture
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={lecture.linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
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
                  <div className="flex gap-2">
                    <Button className="flex-1" asChild>
                      <a href={job.applyLink} target="_blank" rel="noopener noreferrer">
                        Request Referral
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={job.linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
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
                      <Button variant="outline" className="mt-4" asChild>
                        <a href={story.readMoreLink} target="_blank" rel="noopener noreferrer">
                          Read Full Story
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
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
