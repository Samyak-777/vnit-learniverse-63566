import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, FileQuestion, Award } from "lucide-react";

interface QuizCardProps {
  id: string;
  title: string;
  description: string;
  courseName: string;
  duration: number;
  totalPoints: number;
  questionCount: number;
  attemptScore?: number;
  onStart: () => void;
}

export const QuizCard = ({
  title,
  description,
  courseName,
  duration,
  totalPoints,
  questionCount,
  attemptScore,
  onStart
}: QuizCardProps) => {
  return (
    <Card className="hover:border-primary transition-colors">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <Badge variant="secondary" className="mb-2">{courseName}</Badge>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="mt-2">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration} min</span>
          </div>
          <div className="flex items-center gap-1">
            <FileQuestion className="h-4 w-4" />
            <span>{questionCount} questions</span>
          </div>
          <div className="flex items-center gap-1">
            <Award className="h-4 w-4" />
            <span>{totalPoints} pts</span>
          </div>
        </div>
        {attemptScore !== undefined && (
          <div className="mt-4 p-3 bg-muted rounded-md">
            <p className="text-sm font-medium">Your Score: {attemptScore}/{totalPoints}</p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={onStart} className="w-full">
          {attemptScore !== undefined ? 'Retake Quiz' : 'Start Quiz'}
        </Button>
      </CardFooter>
    </Card>
  );
};
