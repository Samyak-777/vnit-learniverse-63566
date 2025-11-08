import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Award, BookOpen, Target } from "lucide-react";

interface ProgressTrackerProps {
  currentLevel: number;
  currentXP: number;
  nextLevelXP: number;
  coursesCompleted: number;
  totalCourses: number;
  quizzesPassed: number;
  totalQuizzes: number;
}

export const ProgressTracker = ({
  currentLevel,
  currentXP,
  nextLevelXP,
  coursesCompleted,
  totalCourses,
  quizzesPassed,
  totalQuizzes
}: ProgressTrackerProps) => {
  const xpProgress = (currentXP / nextLevelXP) * 100;
  const courseProgress = (coursesCompleted / totalCourses) * 100;
  const quizProgress = (quizzesPassed / totalQuizzes) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" />
              <span className="font-medium">Level {currentLevel}</span>
            </div>
            <span className="text-sm text-muted-foreground">{currentXP}/{nextLevelXP} XP</span>
          </div>
          <Progress value={xpProgress} className="h-2" />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-blue-500" />
              <span className="font-medium">Courses</span>
            </div>
            <span className="text-sm text-muted-foreground">{coursesCompleted}/{totalCourses}</span>
          </div>
          <Progress value={courseProgress} className="h-2" />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-green-500" />
              <span className="font-medium">Quizzes</span>
            </div>
            <span className="text-sm text-muted-foreground">{quizzesPassed}/{totalQuizzes}</span>
          </div>
          <Progress value={quizProgress} className="h-2" />
        </div>
      </CardContent>
    </Card>
  );
};
