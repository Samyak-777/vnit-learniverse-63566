import { useState, useEffect } from 'react';
import { Search, X, FileText, BookOpen, MessageSquare, Users } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';

interface SearchResult {
  id: string;
  title: string;
  type: 'material' | 'course' | 'blog' | 'forum' | 'user';
  subtitle?: string;
  url: string;
}

export const GlobalSearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (query.trim()) {
      // Simulate search - replace with actual search implementation
      const mockResults: SearchResult[] = [
        {
          id: '1',
          title: 'Data Structures Lecture Notes',
          type: 'material',
          subtitle: 'CS301 - Computer Science',
          url: '/academics',
        },
        {
          id: '2',
          title: 'Introduction to Machine Learning',
          type: 'course',
          subtitle: 'Prof. Rajesh Kumar',
          url: '/academics',
        },
        {
          id: '3',
          title: 'Getting Started with React',
          type: 'blog',
          subtitle: 'Posted by John Doe',
          url: '/blogs',
        },
      ];
      setResults(mockResults.filter(r => 
        r.title.toLowerCase().includes(query.toLowerCase())
      ));
    } else {
      setResults([]);
    }
  }, [query]);

  const getIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'material':
        return <FileText className="h-4 w-4" />;
      case 'course':
        return <BookOpen className="h-4 w-4" />;
      case 'blog':
        return <FileText className="h-4 w-4" />;
      case 'forum':
        return <MessageSquare className="h-4 w-4" />;
      case 'user':
        return <Users className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: SearchResult['type']) => {
    switch (type) {
      case 'material':
        return 'bg-blue-500';
      case 'course':
        return 'bg-green-500';
      case 'blog':
        return 'bg-purple-500';
      case 'forum':
        return 'bg-orange-500';
      case 'user':
        return 'bg-pink-500';
    }
  };

  if (!isOpen) {
    return (
      <Button 
        variant="outline" 
        className="hidden md:flex items-center gap-2 text-muted-foreground"
        onClick={() => setIsOpen(true)}
      >
        <Search className="h-4 w-4" />
        <span>Search...</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground ml-2">
          <span className="text-xs">Ctrl</span>K
        </kbd>
      </Button>
    );
  }

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Search Modal */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4">
        <Card className="p-4 shadow-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Search className="h-5 w-5 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search materials, courses, blogs, forums..."
              className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              autoFocus
            />
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {results.length > 0 ? (
            <div className="max-h-96 overflow-y-auto space-y-2">
              {results.map((result) => (
                <a
                  key={result.id}
                  href={result.url}
                  className="block p-3 rounded-lg hover:bg-muted transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${getTypeColor(result.type)}/10`}>
                      {getIcon(result.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold truncate">{result.title}</p>
                        <Badge variant="outline" className="capitalize">
                          {result.type}
                        </Badge>
                      </div>
                      {result.subtitle && (
                        <p className="text-sm text-muted-foreground truncate">
                          {result.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : query.trim() ? (
            <div className="text-center py-12 text-muted-foreground">
              No results found for "{query}"
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <p className="mb-2">Start typing to search</p>
              <p className="text-sm">Search across materials, courses, blogs, and more</p>
            </div>
          )}
        </Card>
      </div>
    </>
  );
};
