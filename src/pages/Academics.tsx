import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { departments, courses, materials } from '@/data/mockData';
import { Search, Filter, Download, Eye, FileText, Video, FileCode, File } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Badge } from '@/components/ui/badge';

const Academics = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText className="h-5 w-5 text-red-500" />;
      case 'video':
        return <Video className="h-5 w-5 text-purple-500" />;
      case 'code':
        return <FileCode className="h-5 w-5 text-green-500" />;
      default:
        return <File className="h-5 w-5 text-blue-500" />;
    }
  };

  const resetFilters = () => {
    setSelectedDepartment(null);
    setSelectedSemester(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Academic Resources</h1>
        <p className="text-muted-foreground">
          Access study materials, lectures, and resources organized by department and semester
        </p>
      </div>

      {/* Breadcrumb */}
      {(selectedDepartment || selectedSemester) && (
        <div className="mb-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink onClick={resetFilters} className="cursor-pointer">
                  Academics
                </BreadcrumbLink>
              </BreadcrumbItem>
              {selectedDepartment && (
                <>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{selectedDepartment}</BreadcrumbPage>
                  </BreadcrumbItem>
                </>
              )}
              {selectedSemester && (
                <>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Semester {selectedSemester}</BreadcrumbPage>
                  </BreadcrumbItem>
                </>
              )}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      )}

      {/* Search and Filter */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search courses, materials, professors..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" className="sm:w-auto">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Department Selection */}
      {!selectedDepartment && (
        <div>
          <h2 className="text-2xl font-semibold mb-6">Select Department</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {departments.map((dept) => (
              <Card
                key={dept.id}
                className="card-hover cursor-pointer"
                onClick={() => setSelectedDepartment(dept.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{dept.icon}</div>
                  <h3 className="font-semibold mb-2">{dept.name}</h3>
                  <p className="text-sm text-muted-foreground">{dept.courses} courses</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Semester Selection */}
      {selectedDepartment && !selectedSemester && (
        <div>
          <h2 className="text-2xl font-semibold mb-6">Select Semester</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
            {semesters.map((sem) => (
              <Card
                key={sem}
                className="card-hover cursor-pointer"
                onClick={() => setSelectedSemester(sem)}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{sem}</div>
                  <p className="text-sm text-muted-foreground">Semester</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Courses and Materials */}
      {selectedDepartment && selectedSemester && (
        <div>
          <h2 className="text-2xl font-semibold mb-6">Courses</h2>
          
          <Tabs defaultValue={courses[0]?.id} className="w-full">
            <TabsList className="w-full overflow-x-auto flex-nowrap justify-start">
              {courses.map((course) => (
                <TabsTrigger key={course.id} value={course.id} className="whitespace-nowrap">
                  {course.code}
                </TabsTrigger>
              ))}
            </TabsList>

            {courses.map((course) => (
              <TabsContent key={course.id} value={course.id} className="mt-6">
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{course.name}</h3>
                        <p className="text-muted-foreground mb-2">{course.description}</p>
                        <div className="flex flex-wrap gap-2">
                          <Badge>{course.code}</Badge>
                          <Badge variant="outline">{course.professor}</Badge>
                          <Badge variant="outline">{course.enrolledStudents} students</Badge>
                        </div>
                      </div>
                      <Button>Enroll Now</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Materials List */}
                <h3 className="text-xl font-semibold mb-4">Course Materials</h3>
                <div className="grid gap-4">
                  {materials
                    .filter((m) => m.courseId === course.id)
                    .map((material) => (
                      <Card key={material.id} className="card-hover">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-4">
                            <div className="p-3 bg-muted rounded-lg">
                              {getFileIcon(material.type)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold mb-1">{material.title}</h4>
                              <p className="text-sm text-muted-foreground mb-2">
                                Uploaded by {material.uploadedBy} • {material.uploadDate}
                              </p>
                              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Eye className="h-3 w-3" />
                                  <span>{material.views} views</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Download className="h-3 w-3" />
                                  <span>{material.downloads} downloads</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <Eye className="h-4 w-4 mr-1" />
                                View
                              </Button>
                              <Button size="sm">
                                <Download className="h-4 w-4 mr-1" />
                                Download
                              </Button>
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
      )}
    </div>
  );
};

export default Academics;
