import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, FileText, Users, Calendar, Beaker, Award, BookOpen, ExternalLink } from 'lucide-react';

const Research = () => {
  const researchPapers = [
    {
      title: 'Deep Learning Approaches for Medical Image Analysis',
      authors: 'Dr. Amit Kumar, Dr. Priya Shah',
      department: 'CSE',
      published: 'IEEE Transactions on Medical Imaging, 2024',
      citations: 45,
      tags: ['Machine Learning', 'Healthcare', 'Computer Vision'],
    },
    {
      title: 'Sustainable Materials for Civil Infrastructure',
      authors: 'Dr. Rajesh Verma, Dr. Sneha Patil',
      department: 'Civil Engineering',
      published: 'Journal of Civil Engineering, 2024',
      citations: 32,
      tags: ['Sustainability', 'Materials Science'],
    },
    {
      title: 'Quantum Computing Applications in Cryptography',
      authors: 'Dr. Meera Patel, Dr. Anil Joshi',
      department: 'CSE',
      published: 'ACM Computing Surveys, 2024',
      citations: 67,
      tags: ['Quantum Computing', 'Security', 'Cryptography'],
    },
  ];

  const labs = [
    {
      name: 'AI & Machine Learning Lab',
      head: 'Dr. Amit Kumar',
      department: 'CSE',
      equipment: 'GPU Clusters, HPC Systems',
      focus: 'Deep Learning, NLP, Computer Vision',
      students: 25,
    },
    {
      name: 'Robotics & Automation Lab',
      head: 'Dr. Rajesh Verma',
      department: 'ME',
      equipment: 'Industrial Robots, 3D Printers',
      focus: 'Automation, Control Systems',
      students: 18,
    },
    {
      name: 'Sustainable Energy Lab',
      head: 'Dr. Sneha Kulkarni',
      department: 'EE',
      equipment: 'Solar Panels, Battery Testing',
      focus: 'Renewable Energy, Power Systems',
      students: 22,
    },
  ];

  const conferences = [
    {
      name: 'International Conference on AI & ML',
      date: 'Jan 20-22, 2025',
      location: 'VNIT Campus',
      type: 'International',
      submissions: 'Open',
      deadline: 'Dec 15, 2024',
    },
    {
      name: 'National Symposium on Sustainable Engineering',
      date: 'Feb 10-11, 2025',
      location: 'Main Auditorium',
      type: 'National',
      submissions: 'Open',
      deadline: 'Jan 5, 2025',
    },
  ];

  const facultyProfiles = [
    {
      name: 'Dr. Amit Kumar',
      designation: 'Professor',
      department: 'Computer Science',
      specialization: 'Artificial Intelligence, Machine Learning',
      publications: 78,
      hIndex: 24,
      projects: 12,
    },
    {
      name: 'Dr. Priya Shah',
      designation: 'Associate Professor',
      department: 'Computer Science',
      specialization: 'Data Science, Big Data Analytics',
      publications: 52,
      hIndex: 18,
      projects: 8,
    },
  ];

  const collaborationOpportunities = [
    {
      title: 'Industry-Academia Partnership',
      organization: 'TCS Innovation Labs',
      duration: '2 years',
      funding: '₹50 Lakhs',
      focus: 'AI-driven Solutions',
      deadline: '2 weeks',
    },
    {
      title: 'Research Collaboration',
      organization: 'IIT Bombay',
      duration: '3 years',
      funding: '₹1 Crore',
      focus: 'Quantum Computing',
      deadline: '1 month',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Research Portal</h1>
        <p className="text-muted-foreground">
          Explore research papers, labs, and collaboration opportunities
        </p>
      </div>

      {/* Search Bar */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search research papers, faculty, labs..." className="pl-10" />
            </div>
            <Button>Search</Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="papers" className="w-full">
        <TabsList className="w-full overflow-x-auto flex-nowrap justify-start">
          <TabsTrigger value="papers">Research Papers</TabsTrigger>
          <TabsTrigger value="labs">Labs & Equipment</TabsTrigger>
          <TabsTrigger value="faculty">Faculty Profiles</TabsTrigger>
          <TabsTrigger value="conferences">Conferences</TabsTrigger>
          <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
        </TabsList>

        {/* Research Papers */}
        <TabsContent value="papers" className="mt-6">
          <div className="space-y-6">
            {researchPapers.map((paper, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-lg flex-1">{paper.title}</h3>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    <Users className="h-3 w-3 inline mr-1" />
                    {paper.authors}
                  </p>
                  <div className="flex items-center gap-4 mb-3 text-sm">
                    <Badge variant="outline">{paper.department}</Badge>
                    <span className="text-muted-foreground">{paper.published}</span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Award className="h-3 w-3" />
                      {paper.citations} citations
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {paper.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Labs */}
        <TabsContent value="labs" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {labs.map((lab, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg mb-1">{lab.name}</CardTitle>
                      <Badge variant="outline">{lab.department}</Badge>
                    </div>
                    <Beaker className="h-8 w-8 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm">
                    <p className="text-muted-foreground mb-1">Lab Head</p>
                    <p className="font-medium">{lab.head}</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-muted-foreground mb-1">Equipment</p>
                    <p>{lab.equipment}</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-muted-foreground mb-1">Research Focus</p>
                    <p>{lab.focus}</p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t">
                    <span className="text-sm text-muted-foreground">
                      {lab.students} students working
                    </span>
                    <Button size="sm" variant="outline">
                      Book Equipment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Faculty Profiles */}
        <TabsContent value="faculty" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facultyProfiles.map((faculty, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${faculty.name}`}
                      alt={faculty.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <CardTitle className="text-lg mb-1">{faculty.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{faculty.designation}</p>
                      <Badge variant="outline" className="mt-1">
                        {faculty.department}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm">
                    <p className="text-muted-foreground mb-1">Specialization</p>
                    <p>{faculty.specialization}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-2 border-t text-center text-sm">
                    <div>
                      <p className="text-2xl font-bold text-primary">{faculty.publications}</p>
                      <p className="text-xs text-muted-foreground">Publications</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-secondary">{faculty.hIndex}</p>
                      <p className="text-xs text-muted-foreground">h-index</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-success">{faculty.projects}</p>
                      <p className="text-xs text-muted-foreground">Projects</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Conferences */}
        <TabsContent value="conferences" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conferences.map((conf, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{conf.name}</CardTitle>
                    <Badge>{conf.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{conf.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                    <span>{conf.location}</span>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Submissions</span>
                      <Badge variant="secondary">{conf.submissions}</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Deadline</span>
                      <span className="font-medium text-destructive">{conf.deadline}</span>
                    </div>
                  </div>
                  <Button className="w-full">Submit Paper</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Collaboration */}
        <TabsContent value="collaboration" className="mt-6">
          <div className="space-y-6">
            {collaborationOpportunities.map((collab, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{collab.title}</h3>
                      <p className="text-sm text-muted-foreground">{collab.organization}</p>
                    </div>
                    <Badge variant="default">{collab.funding}</Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="text-sm">
                      <p className="text-muted-foreground mb-1">Duration</p>
                      <p className="font-medium">{collab.duration}</p>
                    </div>
                    <div className="text-sm">
                      <p className="text-muted-foreground mb-1">Focus Area</p>
                      <p className="font-medium">{collab.focus}</p>
                    </div>
                    <div className="text-sm">
                      <p className="text-muted-foreground mb-1">Application Deadline</p>
                      <p className="font-medium text-destructive">{collab.deadline}</p>
                    </div>
                  </div>
                  <Button>Apply for Collaboration</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Research;