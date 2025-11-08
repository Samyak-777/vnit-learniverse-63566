import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Plus, Trash2, Clock, Shuffle, Trophy } from 'lucide-react';
import { courses } from '@/data/mockData';

type Question = {
  id: string;
  type: 'mcq' | 'true-false' | 'coding' | 'file-upload';
  question: string;
  options?: string[];
  correctAnswer?: string;
  points: number;
};

const QuizCreator = () => {
  const [questions, setQuestions] = useState<Question[]>([
    { id: '1', type: 'mcq', question: '', options: ['', '', '', ''], points: 10 },
  ]);
  const [quizSettings, setQuizSettings] = useState({
    timer: 60,
    randomize: false,
    showResults: true,
  });

  const addQuestion = (type: Question['type']) => {
    const newQuestion: Question = {
      id: Date.now().toString(),
      type,
      question: '',
      options: type === 'mcq' ? ['', '', '', ''] : undefined,
      points: 10,
    };
    setQuestions([...questions, newQuestion]);
  };

  const removeQuestion = (id: string) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Create Quiz</h1>
        <p className="text-muted-foreground">Design quizzes with multiple question types</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quiz Details */}
          <Card>
            <CardHeader>
              <CardTitle>Quiz Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="quiz-title">Quiz Title</Label>
                  <Input id="quiz-title" placeholder="e.g., Mid-term Quiz 1" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="course">Course</Label>
                  <Select>
                    <SelectTrigger id="course">
                      <SelectValue placeholder="Select course" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover">
                      {courses.map((course) => (
                        <SelectItem key={course.id} value={course.id}>
                          {course.code} - {course.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Brief description of the quiz..."
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="due-date">Due Date</Label>
                  <Input id="due-date" type="datetime-local" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (minutes)</Label>
                  <Input
                    id="duration"
                    type="number"
                    value={quizSettings.timer}
                    onChange={(e) =>
                      setQuizSettings({ ...quizSettings, timer: parseInt(e.target.value) })
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Questions */}
          {questions.map((question, index) => (
            <Card key={question.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">
                    Question {index + 1}
                    <Badge className="ml-2" variant="outline">
                      {question.type.toUpperCase()}
                    </Badge>
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeQuestion(question.id)}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Question</Label>
                  <Textarea placeholder="Enter your question..." rows={3} />
                </div>

                {question.type === 'mcq' && (
                  <div className="space-y-3">
                    <Label>Options</Label>
                    {question.options?.map((_, optIndex) => (
                      <div key={optIndex} className="flex gap-2">
                        <Input placeholder={`Option ${optIndex + 1}`} />
                        <Button variant="outline" size="sm">
                          Correct
                        </Button>
                      </div>
                    ))}
                  </div>
                )}

                {question.type === 'true-false' && (
                  <div className="space-y-2">
                    <Label>Correct Answer</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select correct answer" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover">
                        <SelectItem value="true">True</SelectItem>
                        <SelectItem value="false">False</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {question.type === 'coding' && (
                  <div className="space-y-2">
                    <Label>Expected Output/Test Cases</Label>
                    <Textarea placeholder="Describe expected output or test cases..." rows={4} />
                  </div>
                )}

                {question.type === 'file-upload' && (
                  <div className="p-4 border-2 border-dashed rounded-lg text-center text-muted-foreground">
                    Students will upload their answer as a file
                  </div>
                )}

                <div className="space-y-2">
                  <Label>Points</Label>
                  <Input type="number" value={question.points} className="w-32" />
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Add Question Buttons */}
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => addQuestion('mcq')}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  MCQ
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => addQuestion('true-false')}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  True/False
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => addQuestion('coding')}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Coding
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => addQuestion('file-upload')}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  File Upload
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quiz Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quiz Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <Label htmlFor="timer">Time Limit</Label>
                </div>
                <Switch
                  id="timer"
                  checked={quizSettings.timer > 0}
                  onCheckedChange={(checked) =>
                    setQuizSettings({ ...quizSettings, timer: checked ? 60 : 0 })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shuffle className="h-4 w-4 text-muted-foreground" />
                  <Label htmlFor="randomize">Randomize Questions</Label>
                </div>
                <Switch
                  id="randomize"
                  checked={quizSettings.randomize}
                  onCheckedChange={(checked) =>
                    setQuizSettings({ ...quizSettings, randomize: checked })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-muted-foreground" />
                  <Label htmlFor="show-results">Show Results After</Label>
                </div>
                <Switch
                  id="show-results"
                  checked={quizSettings.showResults}
                  onCheckedChange={(checked) =>
                    setQuizSettings({ ...quizSettings, showResults: checked })
                  }
                />
              </div>
            </CardContent>
          </Card>

          {/* Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quiz Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Questions</span>
                <span className="font-bold">{questions.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Points</span>
                <span className="font-bold">
                  {questions.reduce((sum, q) => sum + q.points, 0)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Duration</span>
                <span className="font-bold">{quizSettings.timer} min</span>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="space-y-2">
            <Button className="w-full" size="lg">
              Publish Quiz
            </Button>
            <Button variant="outline" className="w-full">
              Save as Draft
            </Button>
            <Button variant="ghost" className="w-full">
              Preview Quiz
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCreator;