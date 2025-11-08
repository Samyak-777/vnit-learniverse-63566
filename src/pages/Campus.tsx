import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Bell, Bus, Home, Utensils, Award } from 'lucide-react';

const Campus = () => {
  const events = [
    {
      title: 'Technical Symposium 2024',
      date: 'Nov 20-22, 2024',
      venue: 'Main Auditorium',
      category: 'Technical',
      registrations: 450,
    },
    {
      title: 'Annual Sports Meet',
      date: 'Dec 5-10, 2024',
      venue: 'Sports Complex',
      category: 'Sports',
      registrations: 320,
    },
    {
      title: 'Cultural Fest - Aarohi',
      date: 'Jan 15-17, 2025',
      venue: 'Open Air Theatre',
      category: 'Cultural',
      registrations: 680,
    },
  ];

  const hostelNotices = [
    {
      title: 'Hostel Room Allocation for New Students',
      date: 'Nov 10, 2024',
      hostel: 'All Hostels',
      priority: 'High',
    },
    {
      title: 'Mess Menu Updated for Winter',
      date: 'Nov 8, 2024',
      hostel: 'All Hostels',
      priority: 'Medium',
    },
    {
      title: 'Water Supply Maintenance',
      date: 'Nov 12, 2024',
      hostel: 'Girls Hostel 2',
      priority: 'High',
    },
  ];

  const busSchedule = [
    { route: 'VNIT → Railway Station', departure: '7:00 AM, 5:00 PM', duration: '30 min' },
    { route: 'VNIT → Sitabuldi', departure: '8:00 AM, 6:00 PM', duration: '25 min' },
    { route: 'VNIT → Airport', departure: '9:00 AM, 3:00 PM', duration: '45 min' },
  ];

  const emergencyContacts = [
    { name: 'Campus Security', number: '0712-2801011', available: '24/7' },
    { name: 'Medical Emergency', number: '0712-2801022', available: '24/7' },
    { name: 'Hostel Warden', number: '0712-2801033', available: '9 AM - 9 PM' },
  ];

  const campusNews = [
    {
      title: 'VNIT Ranks in Top 50 Engineering Colleges',
      date: 'Nov 5, 2024',
      category: 'Achievement',
    },
    {
      title: 'New Research Lab Inaugurated',
      date: 'Nov 3, 2024',
      category: 'Infrastructure',
    },
    {
      title: 'Student Team Wins National Hackathon',
      date: 'Oct 28, 2024',
      category: 'Student Achievement',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Campus Ecosystem</h1>
        <p className="text-muted-foreground">
          Stay updated with campus events, notices, and facilities
        </p>
      </div>

      <Tabs defaultValue="events" className="w-full">
        <TabsList className="w-full overflow-x-auto flex-nowrap justify-start">
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="hostel">Hostel</TabsTrigger>
          <TabsTrigger value="transport">Transport</TabsTrigger>
          <TabsTrigger value="news">Campus News</TabsTrigger>
          <TabsTrigger value="emergency">Emergency</TabsTrigger>
        </TabsList>

        {/* Events */}
        <TabsContent value="events" className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <Badge>{event.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{event.registrations} registered</span>
                  </div>
                  <Button className="w-full">Register Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Event Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
                <p className="text-muted-foreground">Interactive Calendar View</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Hostel Notices */}
        <TabsContent value="hostel" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home className="h-5 w-5" />
                Hostel Notices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {hostelNotices.map((notice, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold">{notice.title}</h4>
                            <Badge
                              variant={notice.priority === 'High' ? 'destructive' : 'secondary'}
                            >
                              {notice.priority}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {notice.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Home className="h-3 w-3" />
                              {notice.hostel}
                            </span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Utensils className="h-5 w-5" />
                Mess Menu
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-3">Today's Menu</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Breakfast</span>
                      <span>Poha, Tea, Banana</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lunch</span>
                      <span>Rice, Dal, Roti, Sabzi</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Dinner</span>
                      <span>Roti, Paneer, Rice, Dal</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Mess Timing</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Breakfast</span>
                      <span>7:30 AM - 9:00 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lunch</span>
                      <span>12:30 PM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Dinner</span>
                      <span>7:30 PM - 9:30 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Transport */}
        <TabsContent value="transport" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bus className="h-5 w-5" />
                Bus Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {busSchedule.map((bus, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold mb-2">{bus.route}</h4>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>Departure: {bus.departure}</span>
                            <span>Duration: {bus.duration}</span>
                          </div>
                        </div>
                        <Button variant="outline">Track Bus</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Campus News */}
        <TabsContent value="news" className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {campusNews.map((news, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{news.title}</CardTitle>
                    <Badge variant="outline">{news.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{news.date}</span>
                  </div>
                  <Button variant="outline" className="w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Emergency */}
        <TabsContent value="emergency" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <Bell className="h-5 w-5" />
                Emergency Contacts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {emergencyContacts.map((contact, index) => (
                  <Card key={index} className="border-destructive/20">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold mb-1">{contact.name}</h4>
                          <p className="text-2xl font-bold text-destructive">{contact.number}</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Available: {contact.available}
                          </p>
                        </div>
                        <Button variant="destructive">Call Now</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Safety Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                📋 Campus Safety Rules
              </Button>
              <Button variant="outline" className="w-full justify-start">
                🚨 Emergency Procedures
              </Button>
              <Button variant="outline" className="w-full justify-start">
                🏥 First Aid Locations
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Campus;