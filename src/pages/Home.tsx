import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import BlogCard from '@/components/BlogCard';
import { blogPosts, skills, leaderboard } from '@/data/mockData';
import { ArrowRight, BookOpen, Trophy, Users, GraduationCap, Sparkles, TrendingUp } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const Home = () => {
  const { isAuthenticated } = useAuth();
  const featuredPosts = blogPosts.slice(0, 3);
  const trendingSkills = skills.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to VNIT Learning Management System
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Your gateway to academic excellence, skill development, and collaborative learning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link to={isAuthenticated ? "/dashboard" : "/auth"}>
                  {isAuthenticated ? 'Go to Dashboard' : 'Get Started'} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg bg-white/10 border-white text-white hover:bg-white/20">
                <Link to="/academics">Explore Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="h-10 w-10 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">Active Students</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <BookOpen className="h-10 w-10 mx-auto mb-3 text-secondary" />
                <div className="text-3xl font-bold text-secondary">350+</div>
                <div className="text-sm text-muted-foreground">Courses Available</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <GraduationCap className="h-10 w-10 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Expert Faculty</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Trophy className="h-10 w-10 mx-auto mb-3 text-secondary" />
                <div className="text-3xl font-bold text-secondary">1000+</div>
                <div className="text-sm text-muted-foreground">Materials Shared</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Blogs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Blogs</h2>
              <p className="text-muted-foreground">Discover insights from our community</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/blogs">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Skills */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
                <TrendingUp className="h-8 w-8 text-secondary" />
                Trending Skills
              </h2>
              <p className="text-muted-foreground">Popular skills students are learning</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/skills">
                Explore All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trendingSkills.map((skill) => (
              <Link key={skill.id} to={`/skill/${skill.id}`}>
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{skill.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
                    <div className="flex items-center text-sm text-primary">
                      <Sparkles className="h-4 w-4 mr-1" />
                      <span>{skill.resources.length} resources available</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2">
                <Trophy className="h-8 w-8 text-secondary" />
                Top Learners
              </h2>
              <p className="text-muted-foreground">Students leading the way</p>
            </div>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {leaderboard.slice(0, 5).map((student) => (
                    <div
                      key={student.rank}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                            student.rank === 1
                              ? 'bg-yellow-100 text-yellow-700'
                              : student.rank === 2
                              ? 'bg-gray-100 text-gray-700'
                              : student.rank === 3
                              ? 'bg-orange-100 text-orange-700'
                              : 'bg-muted text-muted-foreground'
                          }`}
                        >
                          {student.rank}
                        </div>
                        <img
                          src={student.avatar}
                          alt={student.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="font-semibold">{student.name}</p>
                          <p className="text-xs text-muted-foreground">{student.department}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">{student.points}</p>
                        <p className="text-xs text-muted-foreground">points</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of VNIT students already using our platform to excel in their academics
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link to="/dashboard">
              Go to Dashboard <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
