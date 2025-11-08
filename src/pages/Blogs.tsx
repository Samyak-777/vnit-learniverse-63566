import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import BlogCard from '@/components/BlogCard';
import { leaderboard } from '@/data/mockData';
import { Search, TrendingUp, PenSquare, Loader2 } from 'lucide-react';
import { useBlogs } from '@/hooks/useBlogs';

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const { data: blogPosts = [], isLoading } = useBlogs();

  const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags || [])));
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.excerpt && post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesTag = !selectedTag || (post.tags && post.tags.includes(selectedTag));
    return matchesSearch && matchesTag;
  });

  const topContributors = leaderboard.slice(0, 5);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Community Blogs</h1>
            <p className="text-muted-foreground">
              Share knowledge, experiences, and insights with the VNIT community
            </p>
          </div>
          <Button className="hidden sm:flex">
            <PenSquare className="h-4 w-4 mr-2" />
            Write a Blog
          </Button>
        </div>
        <Button className="sm:hidden w-full">
          <PenSquare className="h-4 w-4 mr-2" />
          Write a Blog
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search blogs..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              No blog posts found. Be the first to write one!
            </div>
          ) : (
            <>
              {/* Featured Post */}
            <Card className="mb-8 overflow-hidden card-hover">
              <div className="md:flex">
                <div className="md:w-2/5 h-64 md:h-auto">
                  <img
                    src={filteredPosts[0].thumbnail}
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="md:w-3/5 p-6">
                  <Badge className="mb-3">Featured</Badge>
                  <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-4">{filteredPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={filteredPosts[0].author.avatar}
                        alt={filteredPosts[0].author.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="text-sm">
                        <p className="font-medium">{filteredPosts[0].author.name}</p>
                        <p className="text-muted-foreground">
                          {new Date(filteredPosts[0].published_at || filteredPosts[0].created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <Button>Read More</Button>
                  </div>
                </CardContent>
              </div>
              </Card>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.slice(1).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </>
        )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Categories */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant="ghost"
                    className="w-full justify-start"
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Trending Tags */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Trending Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTag === tag ? 'default' : 'outline'}
                    className="cursor-pointer"
                    onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Contributors */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3">Top Contributors</h3>
              <div className="space-y-3">
                {topContributors.map((contributor) => (
                  <div key={contributor.rank} className="flex items-center gap-3">
                    <img
                      src={contributor.avatar}
                      alt={contributor.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{contributor.name}</p>
                      <p className="text-xs text-muted-foreground">{contributor.department}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      #{contributor.rank}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
