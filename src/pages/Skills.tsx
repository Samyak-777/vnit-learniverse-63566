import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { skills } from '@/data/mockData';
import { ArrowRight, ExternalLink, CheckCircle2, Circle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const Skills = () => {
  const { skillId } = useParams();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Programming', 'Development', 'AI/ML', 'Cloud', 'Cybersecurity', 'Design'];

  const filteredSkills =
    selectedCategory === 'all'
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  const selectedSkill = skillId ? skills.find((s) => s.id === skillId) : null;

  // Popular learning websites for resources
  const learningWebsites = {
    free: [
      { id: 'gfg-free', title: 'GeeksforGeeks - Free Content', platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/', type: 'Tutorials & Articles' },
      { id: 'w3schools', title: 'W3Schools Tutorials', platform: 'W3Schools', url: 'https://www.w3schools.com/', type: 'Interactive Tutorials' },
      { id: 'freecodecamp', title: 'freeCodeCamp', platform: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', type: 'Interactive Courses' }
    ],
    paid: [
      { id: 'gfg-paid', title: 'GeeksforGeeks Courses', platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/courses', type: 'Structured Courses' },
      { id: 'coursera', title: 'Coursera Specializations', platform: 'Coursera', url: 'https://www.coursera.org/', type: 'University Courses' },
      { id: 'udemy', title: 'Udemy Courses', platform: 'Udemy', url: 'https://www.udemy.com/', type: 'Video Courses' }
    ]
  };

  if (selectedSkill) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Button asChild variant="outline" className="mb-6">
          <Link to="/skills">← Back to Skills</Link>
        </Button>

        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-6xl">{selectedSkill.icon}</div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{selectedSkill.name}</h1>
              <p className="text-muted-foreground">{selectedSkill.description}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Roadmap */}
            <Card>
              <CardHeader>
                <CardTitle>Learning Roadmap</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
                  <div className="space-y-6">
                    {selectedSkill.roadmap.map((step, index) => (
                      <div key={step.id} className="relative flex gap-4">
                        <div className="relative z-10">
                          {step.completed ? (
                            <CheckCircle2 className="h-12 w-12 text-success bg-background" />
                          ) : (
                            <Circle className="h-12 w-12 text-muted-foreground bg-background" />
                          )}
                        </div>
                        <div className="flex-1 pb-6">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-lg">{step.title}</h3>
                            <Badge variant="outline">{step.duration}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <Button className="w-full mt-4" asChild>
                  <a href="https://www.geeksforgeeks.org/batch/skill-up-dsa?tab=Chapters" target="_blank" rel="noopener noreferrer">
                    Continue Learning on GeeksforGeeks
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Resources */}
            <Card>
              <CardHeader>
                <CardTitle>Learning Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="free">
                  <TabsList className="w-full">
                    <TabsTrigger value="free" className="flex-1">
                      Free Resources
                    </TabsTrigger>
                    <TabsTrigger value="paid" className="flex-1">
                      Paid Courses
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="free" className="mt-4">
                    <div className="space-y-3">
                      {learningWebsites.free.map((resource) => (
                        <Card key={resource.id} className="card-hover">
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <h4 className="font-semibold mb-1">{resource.title}</h4>
                                <p className="text-sm text-muted-foreground">
                                  {resource.platform} • {resource.type}
                                </p>
                              </div>
                              <Button size="sm" variant="outline" asChild>
                                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-4 w-4" />
                                </a>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="paid" className="mt-4">
                    <div className="space-y-3">
                      {learningWebsites.paid.map((resource) => (
                        <Card key={resource.id} className="card-hover">
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <h4 className="font-semibold mb-1">{resource.title}</h4>
                                <p className="text-sm text-muted-foreground">
                                  {resource.platform} • {resource.type}
                                </p>
                              </div>
                              <Button size="sm" variant="outline" asChild>
                                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-4 w-4" />
                                </a>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Related Clubs */}
            {selectedSkill.clubs.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Related Clubs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {selectedSkill.clubs.map((club) => (
                    <Card key={club.id} className="card-hover">
                      <CardContent className="p-4">
                        <div className="text-3xl mb-2">{club.logo}</div>
                        <h4 className="font-semibold mb-1">{club.name}</h4>
                        <p className="text-xs text-muted-foreground mb-2">{club.description}</p>
                        <a
                          href={`mailto:${club.contact}`}
                          className="text-xs text-primary hover:underline"
                        >
                          {club.contact}
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Practice Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Practice Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer">
                    📝 Coding Practice Sheets
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="https://github.com/topics/final-year-project" target="_blank" rel="noopener noreferrer">
                    💡 Project Ideas
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="https://www.geeksforgeeks.org/company-interview-corner/" target="_blank" rel="noopener noreferrer">
                    🎯 Interview Questions
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Community Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Community Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p className="text-muted-foreground italic">
                  "Start with small projects and gradually increase complexity. Don't rush!"
                </p>
                <p className="text-xs text-muted-foreground">- Ananya, 4th Year CSE</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Skills Development Hub</h1>
        <p className="text-muted-foreground">
          Master in-demand skills with curated roadmaps, resources, and community support
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill) => (
          <Link key={skill.id} to={`/skill/${skill.id}`}>
            <Card className="card-hover h-full">
              <CardContent className="p-6">
                <div className="text-5xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <Badge className="mb-3">{skill.category}</Badge>
                <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    {skill.roadmap.length} milestones
                  </span>
                  <Button variant="ghost" size="sm" className="group">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Skills;
