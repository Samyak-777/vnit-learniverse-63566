import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { forumThreads, courses } from '@/data/mockData';
import { Search, Plus, MessageSquare, Eye, ArrowUp, CheckCircle2 } from 'lucide-react';

const Forums = () => {
  const [selectedCourse, setSelectedCourse] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredThreads = forumThreads.filter((thread) => {
    const matchesCourse = selectedCourse === 'all' || thread.courseId === selectedCourse;
    const matchesSearch =
      searchQuery === '' ||
      thread.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      thread.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCourse && matchesSearch;
  });

  const getCategoryThreads = (category: string) =>
    filteredThreads.filter((thread) => thread.category === category);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'doubt':
        return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
      case 'discussion':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      case 'resource':
        return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'announcement':
        return 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Discussion Forums</h1>
            <p className="text-muted-foreground">
              Ask questions, share knowledge, and discuss course topics
            </p>
          </div>
          <Button className="hidden sm:flex">
            <Plus className="h-4 w-4 mr-2" />
            New Thread
          </Button>
        </div>
        <Button className="sm:hidden w-full">
          <Plus className="h-4 w-4 mr-2" />
          New Thread
        </Button>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search threads..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={selectedCourse} onValueChange={setSelectedCourse}>
          <SelectTrigger className="sm:w-64">
            <SelectValue placeholder="Select Course" />
          </SelectTrigger>
          <SelectContent className="bg-popover">
            <SelectItem value="all">All Courses</SelectItem>
            {courses.map((course) => (
              <SelectItem key={course.id} value={course.id}>
                {course.code} - {course.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Category Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full overflow-x-auto flex-nowrap justify-start">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="doubt">Doubts</TabsTrigger>
          <TabsTrigger value="discussion">Discussions</TabsTrigger>
          <TabsTrigger value="resource">Resources</TabsTrigger>
          <TabsTrigger value="announcement">Announcements</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="space-y-4">
            {filteredThreads.map((thread) => (
              <Card key={thread.id} className="card-hover cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={thread.author.avatar} alt={thread.author.name} />
                      <AvatarFallback>{thread.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-semibold text-lg hover:text-primary transition-colors">
                          {thread.title}
                        </h3>
                        {thread.isResolved && (
                          <Badge className="flex items-center gap-1 bg-success">
                            <CheckCircle2 className="h-3 w-3" />
                            Resolved
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {thread.content}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                        <Badge className={getCategoryColor(thread.category)} variant="outline">
                          {thread.category}
                        </Badge>
                        <span>{thread.author.name}</span>
                        <span>•</span>
                        <span>{thread.lastActivity}</span>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-3 w-3" />
                          <span>{thread.replies} replies</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          <span>{thread.views} views</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ArrowUp className="h-3 w-3" />
                          <span>{thread.upvotes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {['doubt', 'discussion', 'resource', 'announcement'].map((category) => (
          <TabsContent key={category} value={category} className="mt-6">
            <div className="space-y-4">
              {getCategoryThreads(category).map((thread) => (
                <Card key={thread.id} className="card-hover cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={thread.author.avatar} alt={thread.author.name} />
                        <AvatarFallback>{thread.author.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="font-semibold text-lg hover:text-primary transition-colors">
                            {thread.title}
                          </h3>
                          {thread.isResolved && (
                            <Badge className="flex items-center gap-1 bg-success">
                              <CheckCircle2 className="h-3 w-3" />
                              Resolved
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {thread.content}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                          <span>{thread.author.name}</span>
                          <span>•</span>
                          <span>{thread.lastActivity}</span>
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-3 w-3" />
                            <span>{thread.replies} replies</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            <span>{thread.views} views</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <ArrowUp className="h-3 w-3" />
                            <span>{thread.upvotes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Forums;
