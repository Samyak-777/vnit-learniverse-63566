import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, ThumbsUp, CheckCircle, Eye } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface ForumThreadProps {
  id: string;
  title: string;
  content: string;
  author: { name: string; avatar?: string };
  category: string;
  views: number;
  upvotes: number;
  replyCount: number;
  isResolved: boolean;
  createdAt: string;
  onClick: () => void;
}

export const ForumThread = ({
  title,
  content,
  author,
  category,
  views,
  upvotes,
  replyCount,
  isResolved,
  createdAt,
  onClick
}: ForumThreadProps) => {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      doubt: "bg-red-500/10 text-red-500",
      discussion: "bg-blue-500/10 text-blue-500",
      resource: "bg-green-500/10 text-green-500",
      announcement: "bg-purple-500/10 text-purple-500"
    };
    return colors[category] || "bg-muted";
  };

  return (
    <Card className="cursor-pointer hover:border-primary transition-colors" onClick={onClick}>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge className={getCategoryColor(category)}>{category}</Badge>
              {isResolved && (
                <Badge variant="outline" className="text-green-500">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Resolved
                </Badge>
              )}
            </div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="mt-2">
              By {author.name} • {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground line-clamp-2 mb-4">{content}</p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            <span>{views}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageSquare className="h-4 w-4" />
            <span>{replyCount}</span>
          </div>
          <div className="flex items-center gap-1">
            <ThumbsUp className="h-4 w-4" />
            <span>{upvotes}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
