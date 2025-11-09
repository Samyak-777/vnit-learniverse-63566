import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Code, Users, Brain, Heart } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    {
      name: 'Python Programming',
      platform: 'GeeksforGeeks',
      level: 'Beginner to Advanced',
      link: 'https://www.geeksforgeeks.org/free-online-courses-by-geeksforgeeks-learn-new-tech-skills/'
    },
    {
      name: 'Data Structures & Algorithms',
      platform: 'GeeksforGeeks',
      level: 'Intermediate',
      link: 'https://www.geeksforgeeks.org/free-online-courses-by-geeksforgeeks-learn-new-tech-skills/'
    },
    {
      name: 'Machine Learning & Data Science',
      platform: 'GeeksforGeeks',
      level: 'Advanced',
      link: 'https://www.geeksforgeeks.org/free-online-courses-by-geeksforgeeks-learn-new-tech-skills/'
    },
    {
      name: 'Web Development (MERN)',
      platform: 'GeeksforGeeks',
      level: 'Intermediate',
      link: 'https://www.geeksforgeeks.org/free-online-courses-by-geeksforgeeks-learn-new-tech-skills/'
    },
    {
      name: 'Cloud Computing',
      platform: 'Multiple Platforms',
      level: 'Beginner',
      link: 'https://dev.to/dareyio/15-in-demand-tech-skills-to-learn-in-2025-1od0'
    },
    {
      name: 'Cybersecurity Fundamentals',
      platform: 'Multiple Platforms',
      level: 'Beginner',
      link: 'https://dev.to/dareyio/15-in-demand-tech-skills-to-learn-in-2025-1od0'
    },
    {
      name: 'DevOps & Automation',
      platform: 'Multiple Platforms',
      level: 'Intermediate',
      link: 'https://dev.to/dareyio/15-in-demand-tech-skills-to-learn-in-2025-1od0'
    }
  ];

  const coreSkills = [
    {
      name: 'Effective Communication',
      platform: 'SC Training',
      category: 'Workplace',
      link: 'https://training.safetyculture.com/blog/20-free-core-competency-training-courses/'
    },
    {
      name: 'Time Management',
      platform: 'SC Training',
      category: 'Productivity',
      link: 'https://training.safetyculture.com/blog/20-free-core-competency-training-courses/'
    },
    {
      name: 'Team Leadership',
      platform: 'SC Training',
      category: 'Leadership',
      link: 'https://training.safetyculture.com/blog/20-free-core-competency-training-courses/'
    },
    {
      name: 'Problem Solving',
      platform: 'SC Training',
      category: 'Analytical',
      link: 'https://training.safetyculture.com/blog/20-free-core-competency-training-courses/'
    },
    {
      name: 'Critical Thinking',
      platform: 'Multiple Platforms',
      category: 'Analytical',
      link: 'https://training.safetyculture.com/blog/20-free-core-competency-training-courses/'
    },
    {
      name: 'Adaptability',
      platform: 'Multiple Platforms',
      category: 'Workplace',
      link: 'https://www.classcentral.com/course/teaching-core-skills-53861'
    }
  ];

  const softSkills = [
    {
      name: 'People & Soft Skills for Professional Success',
      platform: 'Coursera - IBM',
      duration: '1-3 Months',
      rating: '4.7/5',
      link: 'https://www.coursera.org/learn/people-soft-skills'
    },
    {
      name: 'Developing Interpersonal Skills',
      platform: 'Coursera - IBM',
      duration: '1-4 Weeks',
      rating: '4.7/5',
      link: 'https://www.coursera.org/learn/interpersonal-skills'
    },
    {
      name: 'Emotional Intelligence',
      platform: 'Coursera',
      duration: '1-4 Weeks',
      rating: '4.8/5',
      link: 'https://www.coursera.org/learn/emotional-intelligence'
    },
    {
      name: 'Active Listening',
      platform: 'Coursera',
      duration: '1-4 Weeks',
      rating: '4.7/5',
      link: 'https://www.coursera.org/learn/active-listening'
    },
    {
      name: 'Communication Skills',
      platform: 'edX',
      duration: 'Self-Paced',
      rating: 'Beginner',
      link: 'https://www.edx.org/learn/soft-skills'
    },
    {
      name: 'Teamwork & Collaboration',
      platform: 'edX',
      duration: 'Self-Paced',
      rating: 'Beginner',
      link: 'https://www.edx.org/learn/soft-skills'
    }
  ];

  const nonTechSkills = [
    {
      name: 'Non-Technical Life Skills',
      platform: 'Codecademy',
      duration: '<1 hour',
      topics: 'Taxes, Cleaning, Life Management',
      link: 'https://www.codecademy.com/learn/nontech-life-skills'
    },
    {
      name: 'Everyday Life Skills',
      platform: 'GCFGlobal',
      duration: 'Self-Paced',
      topics: 'Finance, Food, Math',
      link: 'https://edu.gcfglobal.org/en/subjects/life-skills/'
    },
    {
      name: 'Personal Finance & Budgeting',
      platform: 'Multiple Platforms',
      duration: 'Self-Paced',
      topics: 'Money Management',
      link: 'https://edu.gcfglobal.org/en/subjects/life-skills/'
    },
    {
      name: 'Basic Cooking & Nutrition',
      platform: 'Multiple Platforms',
      duration: 'Self-Paced',
      topics: 'Food Preparation',
      link: 'https://www.codecademy.com/learn/nontech-life-skills'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Comprehensive Skills Development</h1>
        <p className="text-muted-foreground">
          Master technical, soft, core, and life skills with free curated courses
        </p>
      </div>

      <Tabs defaultValue="technical" className="w-full">
        <TabsList className="w-full overflow-x-auto flex-nowrap justify-start">
          <TabsTrigger value="technical" className="flex items-center gap-2">
            <Code className="h-4 w-4" />
            Technical Skills
          </TabsTrigger>
          <TabsTrigger value="soft" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Soft Skills
          </TabsTrigger>
          <TabsTrigger value="core" className="flex items-center gap-2">
            <Brain className="h-4 w-4" />
            Core Skills
          </TabsTrigger>
          <TabsTrigger value="nontech" className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            Life Skills
          </TabsTrigger>
        </TabsList>

        {/* Technical Skills Tab */}
        <TabsContent value="technical" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{skill.name}</CardTitle>
                    <Badge variant="secondary">{skill.level}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Platform</span>
                    <span className="font-medium">{skill.platform}</span>
                  </div>
                  <Button className="w-full" asChild>
                    <a href={skill.link} target="_blank" rel="noopener noreferrer">
                      Start Learning
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Soft Skills Tab */}
        <TabsContent value="soft" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {softSkills.map((skill, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">{skill.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Platform</span>
                    <span className="font-medium">{skill.platform}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{skill.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Rating</span>
                    <span className="font-medium">{skill.rating}</span>
                  </div>
                  <Button className="w-full" asChild>
                    <a href={skill.link} target="_blank" rel="noopener noreferrer">
                      Enroll Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Core Skills Tab */}
        <TabsContent value="core" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreSkills.map((skill, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{skill.name}</CardTitle>
                    <Badge variant="outline">{skill.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Platform</span>
                    <span className="font-medium">{skill.platform}</span>
                  </div>
                  <Button className="w-full" asChild>
                    <a href={skill.link} target="_blank" rel="noopener noreferrer">
                      Learn Skills
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Non-Technical Skills Tab */}
        <TabsContent value="nontech" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nonTechSkills.map((skill, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">{skill.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Platform</span>
                    <span className="font-medium">{skill.platform}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{skill.duration}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Topics: </span>
                    <span>{skill.topics}</span>
                  </div>
                  <Button className="w-full" asChild>
                    <a href={skill.link} target="_blank" rel="noopener noreferrer">
                      Explore Course
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Skills;
