import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { BookOpen, Users } from 'lucide-react';
import { Course } from '@/types';

interface CourseCardProps {
  course: Course;
  showProgress?: boolean;
}

const CourseCard = ({ course, showProgress = false }: CourseCardProps) => {
  return (
    <Card className="card-hover overflow-hidden">
      <div className="h-40 overflow-hidden">
        <img
          src={course.thumbnail || 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400'}
          alt={course.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
            {course.code}
          </span>
          <span className="text-xs text-muted-foreground">{course.semester} Sem</span>
        </div>
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{course.name}</h3>
        <p className="text-sm text-muted-foreground mb-3">{course.professor}</p>
        
        {showProgress && course.progress !== undefined && (
          <div className="mb-3">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-semibold text-primary">{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="h-2" />
          </div>
        )}
        
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            <span>{course.enrolledStudents} students</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="h-3 w-3" />
            <span>{course.department}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full" variant={showProgress ? "default" : "outline"}>
          <Link to={`/course/${course.id}`}>
            {showProgress ? 'Continue Learning' : 'View Course'}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
