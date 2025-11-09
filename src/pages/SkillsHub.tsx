import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Code2, BookOpen, Lightbulb, Rocket, Copy, Star, Search, ExternalLink } from 'lucide-react';

const SkillsHub = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const roadmaps = [
    { 
      id: '1', 
      title: 'Python Mastery', 
      tech: 'Python',
      difficulty: 'Beginner',
      duration: '8 weeks',
      steps: 5,
      progress: 60,
      gfgLink: 'https://www.geeksforgeeks.org/batch/skill-up-dsa?tab=Chapters'
    },
    { 
      id: '2', 
      title: 'Full Stack Web Dev', 
      tech: 'JavaScript',
      difficulty: 'Intermediate',
      duration: '12 weeks',
      steps: 8,
      progress: 30,
      gfgLink: 'https://www.geeksforgeeks.org/batch/skill-up-dsa?tab=Chapters'
    },
    { 
      id: '3', 
      title: 'Machine Learning', 
      tech: 'ML/AI',
      difficulty: 'Advanced',
      duration: '16 weeks',
      steps: 10,
      progress: 0,
      gfgLink: 'https://www.geeksforgeeks.org/batch/skill-up-dsa?tab=Chapters'
    },
  ];

  const learningResources = [
    {
      id: '1',
      title: 'GeeksforGeeks - Complete DSA',
      type: 'course',
      platform: 'GeeksforGeeks',
      isPaid: false,
      rating: 4.8,
      url: 'https://www.geeksforgeeks.org/'
    },
    {
      id: '2',
      title: 'W3Schools Web Tutorials',
      type: 'tutorials',
      platform: 'W3Schools',
      isPaid: false,
      rating: 4.7,
      url: 'https://www.w3schools.com/'
    },
    {
      id: '3',
      title: 'freeCodeCamp Curriculum',
      type: 'course',
      platform: 'freeCodeCamp',
      isPaid: false,
      rating: 4.9,
      url: 'https://www.freecodecamp.org/'
    },
    {
      id: '4',
      title: 'Coursera Specializations',
      type: 'course',
      platform: 'Coursera',
      isPaid: true,
      rating: 4.8,
      url: 'https://www.coursera.org/'
    },
  ];

  const codeSnippets = [
    {
      id: '1',
      title: 'Binary Search Implementation',
      language: 'Python',
      rating: 4.8,
      code: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`,
    },
    {
      id: '2',
      title: 'Quick Sort Algorithm',
      language: 'Java',
      rating: 4.9,
      code: `public static void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`,
    },
  ];

  const projects = [
    {
      id: '1',
      title: 'E-Commerce Website',
      difficulty: 'Intermediate',
      tech: ['React', 'Node.js', 'MongoDB'],
      duration: '3-4 weeks',
      rating: 4.7,
      githubLink: 'https://github.com/topics/final-year-project'
    },
    {
      id: '2',
      title: 'Chat Application',
      difficulty: 'Advanced',
      tech: ['WebSockets', 'Redis', 'React'],
      duration: '2-3 weeks',
      rating: 4.9,
      githubLink: 'https://github.com/topics/final-year-project'
    },
    {
      id: '3',
      title: 'Machine Learning Project',
      difficulty: 'Advanced',
      tech: ['Python', 'TensorFlow', 'Scikit-learn'],
      duration: '4-5 weeks',
      rating: 4.8,
      githubLink: 'https://github.com/topics/final-year-project'
    },
  ];

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Skills Development Hub</h1>
        <p className="text-muted-foreground">Learn, practice, and master new technologies</p>
      </div>

      <Tabs defaultValue="roadmaps" className="w-full">
        <TabsList className="w-full overflow-x-auto flex-nowrap justify-start">
          <TabsTrigger value="roadmaps">Learning Roadmaps</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="code">Code Repository</TabsTrigger>
          <TabsTrigger value="projects">Project Bank</TabsTrigger>
        </TabsList>

        {/* Learning Roadmaps */}
        <TabsContent value="roadmaps" className="mt-6">
          <div className="mb-6">
            <Input placeholder="Search roadmaps..." className="max-w-md" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmaps.map((roadmap) => (
              <Card key={roadmap.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Code2 className="h-8 w-8 text-primary" />
                    <Badge variant={
                      roadmap.difficulty === 'Beginner' ? 'default' : 
                      roadmap.difficulty === 'Intermediate' ? 'secondary' : 
                      'destructive'
                    }>
                      {roadmap.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{roadmap.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{roadmap.steps} steps</span>
                      <span>{roadmap.duration}</span>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span className="font-semibold">{roadmap.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-primary/60" 
                          style={{ width: `${roadmap.progress}%` }}
                        />
                      </div>
                    </div>
                    <Button className="w-full" asChild>
                      <a href={roadmap.gfgLink} target="_blank" rel="noopener noreferrer">
                        {roadmap.progress > 0 ? 'Continue Learning' : 'Start Roadmap'}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Resources */}
        <TabsContent value="resources" className="mt-6">
          <div className="mb-6 flex gap-4">
            <Input placeholder="Search resources..." className="max-w-md" />
            <Button variant="outline">Filter</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningResources.map((resource) => (
              <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <Badge variant="outline">{resource.type}</Badge>
                      {resource.isPaid ? (
                        <Badge variant="secondary">Paid</Badge>
                      ) : (
                        <Badge className="bg-green-500">Free</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold">{resource.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">Platform: {resource.platform}</p>
                  <Button className="w-full" variant="outline" asChild>
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      View Resource
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Code Repository */}
        <TabsContent value="code" className="mt-6">
          <div className="mb-6 flex gap-4">
            <Input placeholder="Search code snippets..." className="max-w-md" />
            <Button variant="outline">Filter by Language</Button>
          </div>
          <div className="space-y-6">
            {codeSnippets.map((snippet) => (
              <Card key={snippet.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <CardTitle>{snippet.title}</CardTitle>
                      <Badge>{snippet.language}</Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold">{snippet.rating}</span>
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleCopyCode(snippet.code, snippet.id)}
                      >
                        {copiedCode === snippet.id ? 'Copied!' : <><Copy className="h-4 w-4 mr-2" />Copy</>}
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm">{snippet.code}</code>
                  </pre>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Project Bank */}
        <TabsContent value="projects" className="mt-6">
          <div className="mb-6">
            <Input placeholder="Search projects..." className="max-w-md" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Rocket className="h-8 w-8 text-primary" />
                    <Badge variant={
                      project.difficulty === 'Beginner' ? 'default' : 
                      project.difficulty === 'Intermediate' ? 'secondary' : 
                      'destructive'
                    }>
                      {project.difficulty}
                    </Badge>
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Duration: {project.duration}</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{project.rating}</span>
                      </div>
                    </div>
                    <Button className="w-full" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        View Project Details on GitHub
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
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

export default SkillsHub;
