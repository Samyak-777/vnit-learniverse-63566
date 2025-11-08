import { useState, useEffect } from 'react';
import { Search, FileText, Users, MessageSquare, BookOpen, Code } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { courses, blogPosts, forumThreads, skills, materials } from '@/data/mockData';

type SearchResult = {
  id: string;
  title: string;
  description: string;
  type: 'course' | 'blog' | 'forum' | 'skill' | 'material' | 'user';
  icon: React.ReactNode;
};

export const GlobalSearch = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const searchQuery = query.toLowerCase();
    const allResults: SearchResult[] = [];

    // Search courses
    courses
      .filter((c) => c.name.toLowerCase().includes(searchQuery) || c.code.toLowerCase().includes(searchQuery))
      .forEach((c) => {
        allResults.push({
          id: c.id,
          title: `${c.code} - ${c.name}`,
          description: c.description,
          type: 'course',
          icon: <BookOpen className="h-4 w-4" />,
        });
      });

    // Search blogs
    blogPosts
      .filter((b) => b.title.toLowerCase().includes(searchQuery) || b.excerpt.toLowerCase().includes(searchQuery))
      .forEach((b) => {
        allResults.push({
          id: b.id,
          title: b.title,
          description: b.excerpt,
          type: 'blog',
          icon: <FileText className="h-4 w-4" />,
        });
      });

    // Search forums
    forumThreads
      .filter((f) => f.title.toLowerCase().includes(searchQuery) || f.content.toLowerCase().includes(searchQuery))
      .forEach((f) => {
        allResults.push({
          id: f.id,
          title: f.title,
          description: f.content,
          type: 'forum',
          icon: <MessageSquare className="h-4 w-4" />,
        });
      });

    // Search skills
    skills
      .filter((s) => s.name.toLowerCase().includes(searchQuery) || s.description.toLowerCase().includes(searchQuery))
      .forEach((s) => {
        allResults.push({
          id: s.id,
          title: s.name,
          description: s.description,
          type: 'skill',
          icon: <Code className="h-4 w-4" />,
        });
      });

    // Search materials
    materials
      .filter((m) => m.title.toLowerCase().includes(searchQuery))
      .forEach((m) => {
        allResults.push({
          id: m.id,
          title: m.title,
          description: `Uploaded by ${m.uploadedBy}`,
          type: 'material',
          icon: <FileText className="h-4 w-4" />,
        });
      });

    setResults(allResults.slice(0, 10));
  }, [query]);

  const getTypeBadgeColor = (type: SearchResult['type']) => {
    const colors = {
      course: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
      blog: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
      forum: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
      skill: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
      material: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
      user: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
    };
    return colors[type];
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="relative w-full sm:w-64 flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground bg-muted rounded-lg hover:bg-muted/80 transition-colors"
      >
        <Search className="h-4 w-4" />
        <span>Search...</span>
        <kbd className="hidden sm:inline-flex ml-auto pointer-events-none h-5 select-none items-center gap-1 rounded border border-border bg-background px-1.5 font-mono text-[10px] font-medium opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-2xl p-0 gap-0">
          <div className="flex items-center border-b px-3">
            <Search className="h-4 w-4 mr-2 text-muted-foreground" />
            <Input
              placeholder="Search courses, blogs, forums, skills..."
              className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
          </div>

          {query.length >= 2 && (
            <div className="max-h-96 overflow-y-auto p-2">
              {results.length === 0 ? (
                <div className="py-6 text-center text-sm text-muted-foreground">
                  No results found for "{query}"
                </div>
              ) : (
                <div className="space-y-1">
                  {results.map((result) => (
                    <button
                      key={result.id}
                      className="w-full flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors text-left"
                      onClick={() => setOpen(false)}
                    >
                      <div className="mt-1 text-muted-foreground">{result.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium text-sm truncate">{result.title}</p>
                          <Badge className={getTypeBadgeColor(result.type)} variant="outline">
                            {result.type}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-1">
                          {result.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {query.length < 2 && (
            <div className="p-6 text-center text-sm text-muted-foreground">
              Type at least 2 characters to search
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};