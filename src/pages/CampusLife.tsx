import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Calendar, Bell, MapPin, Users, Megaphone, Building2 } from 'lucide-react';

const CampusLife = () => {
  const events = [
    {
      id: '1',
      title: 'Tech Fest 2025',
      date: '2025-12-01',
      location: 'Main Auditorium',
      type: 'Festival',
      registrations: 450,
      maxCapacity: 500,
    },
    {
      id: '2',
      title: 'Guest Lecture: AI in Healthcare',
      date: '2025-11-18',
      location: 'Lecture Hall 3',
      type: 'Academic',
      registrations: 120,
      maxCapacity: 150,
    },
    {
      id: '3',
      title: 'Sports Day',
      date: '2025-11-25',
      location: 'Sports Complex',
      type: 'Sports',
      registrations: 280,
      maxCapacity: 400,
    },
  ];

  const announcements = [
    {
      id: '1',
      title: 'Hostel Maintenance Schedule',
      category: 'Hostel',
      priority: 'high',
      date: '2025-11-10',
      content: 'Hostel Block A will undergo maintenance from Nov 15-17. Water supply will be affected.',
    },
    {
      id: '2',
      title: 'Bus Schedule Update',
      category: 'Transportation',
      priority: 'normal',
      date: '2025-11-08',
      content: 'New bus timings effective from Nov 12. Check the updated schedule on the portal.',
    },
    {
      id: '3',
      title: 'Library Hours Extended',
      category: 'Academic',
      priority: 'normal',
      date: '2025-11-07',
      content: 'Central library will remain open till 11 PM during exam season.',
    },
  ];

  const facilities = [
    { name: 'Library', icon: Building2, status: 'Open', timings: '8:00 AM - 10:00 PM' },
    { name: 'Sports Complex', icon: Users, status: 'Open', timings: '6:00 AM - 9:00 PM' },
    { name: 'Cafeteria', icon: Building2, status: 'Open', timings: '7:00 AM - 11:00 PM' },
    { name: 'Medical Center', icon: Building2, status: '24/7', timings: 'Always Open' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Campus Life</h1>
        <p className="text-muted-foreground">Stay updated with campus events, notices, and facilities</p>
      </div>

      <Tabs defaultValue="events" className="w-full">
        <TabsList className="w-full overflow-x-auto flex-nowrap justify-start">
          <TabsTrigger value="events">Events & Activities</TabsTrigger>
          <TabsTrigger value="announcements">Campus Notices</TabsTrigger>
          <TabsTrigger value="facilities">Facilities</TabsTrigger>
          <TabsTrigger value="clubs">Clubs & Societies</TabsTrigger>
        </TabsList>

        {/* Events Tab */}
        <TabsContent value="events" className="mt-6">
          <div className="mb-6 flex gap-4">
            <Input placeholder="Search events..." className="max-w-md" />
            <Button variant="outline">Filter by Type</Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {events.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-1">{event.title}</CardTitle>
                        <Badge>{event.type}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Registrations</span>
                        <span className="font-semibold">{event.registrations}/{event.maxCapacity}</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-primary/60" 
                          style={{ width: `${(event.registrations / event.maxCapacity) * 100}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1">Register Now</Button>
                      <Button variant="outline">View Details</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Announcements Tab */}
        <TabsContent value="announcements" className="mt-6">
          <div className="mb-6">
            <Input placeholder="Search announcements..." className="max-w-md" />
          </div>

          <div className="space-y-4">
            {announcements.map((announcement) => (
              <Card key={announcement.id} className={announcement.priority === 'high' ? 'border-destructive' : ''}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${announcement.priority === 'high' ? 'bg-destructive/10' : 'bg-primary/10'}`}>
                      <Megaphone className={`h-6 w-6 ${announcement.priority === 'high' ? 'text-destructive' : 'text-primary'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{announcement.title}</h3>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{announcement.category}</Badge>
                            {announcement.priority === 'high' && (
                              <Badge variant="destructive">Urgent</Badge>
                            )}
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">{announcement.date}</span>
                      </div>
                      <p className="text-muted-foreground mt-3">{announcement.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Facilities Tab */}
        <TabsContent value="facilities" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility) => (
              <Card key={facility.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 rounded-full bg-primary/10 mb-4">
                      <facility.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{facility.name}</h3>
                    <Badge className="mb-3 bg-green-500">{facility.status}</Badge>
                    <p className="text-sm text-muted-foreground">{facility.timings}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Clubs Tab */}
        <TabsContent value="clubs" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Clubs & Societies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Users className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Join Campus Clubs</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Explore various clubs and societies to enhance your college experience
                </p>
                <Button>View All Clubs</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CampusLife;