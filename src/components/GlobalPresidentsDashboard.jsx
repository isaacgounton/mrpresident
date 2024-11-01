import React, { useState } from 'react';
import { Search, Globe, TrendingUp, Clock, Map, Bot, News, Send, Filter } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const GlobalPresidentsDashboard = () => {
  const [activeRegion, setActiveRegion] = useState('all');
  const [chatOpen, setChatOpen] = useState(false);

  const regions = [
    { id: 'all', name: 'All Regions' },
    { id: 'americas', name: 'Americas' },
    { id: 'europe', name: 'Europe' },
    { id: 'asia', name: 'Asia' },
    { id: 'africa', name: 'Africa' },
    { id: 'oceania', name: 'Oceania' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-900 text-white p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">MrPresident</h1>
              <p className="text-blue-200">Global Presidential News & Information Hub</p>
            </div>
            <div className="flex items-center gap-4">
              <Clock size={20} />
              <span>Live Updates</span>
            </div>
          </div>
          
          <div className="mt-6 relative">
            <input
              type="text"
              placeholder="Search any president or country..."
              className="w-full p-3 pl-12 rounded-lg bg-white text-gray-900"
            />
            <Search className="absolute left-4 top-3.5 text-gray-500" size={20} />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        {/* Region Filter */}
        <div className="flex space-x-4 mb-6 overflow-x-auto">
          {regions.map(region => (
            <button
              key={region.id}
              onClick={() => setActiveRegion(region.id)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeRegion === region.id
                  ? 'bg-blue-100 text-blue-900'
                  : 'hover:bg-gray-100 text-gray-600'
              }`}
            >
              {region.name}
            </button>
          ))}
        </div>

        {/* Live Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Breaking News */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <News size={20} className="text-red-500" />
                Breaking Updates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <NewsUpdate
                  country="Brazil"
                  title="President's New Economic Policy Announcement"
                  time="10 minutes ago"
                  type="breaking"
                />
                <NewsUpdate
                  country="France"
                  title="Presidential Address on Climate Initiative"
                  time="1 hour ago"
                  type="update"
                />
              </div>
            </CardContent>
          </Card>

          {/* Active Presidents Map */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Map size={20} />
                Current Presidents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <PresidentItem
                  name="Emmanuel Macron"
                  country="France"
                  since="2017"
                  status="active"
                />
                <PresidentItem
                  name="Luiz Inácio Lula da Silva"
                  country="Brazil"
                  since="2023"
                  status="active"
                />
              </div>
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card>
            <CardHeader>
              <CardTitle>Latest Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <Timeline />
            </CardContent>
          </Card>

          {/* Press Releases */}
          <Card>
            <CardHeader>
              <CardTitle>Official Statements</CardTitle>
            </CardHeader>
            <CardContent>
              <PressReleases />
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <UpcomingEvents />
            </CardContent>
          </Card>
        </div>
      </main>

      {/* AI Assistant */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => setChatOpen(true)}
          className="bg-blue-900 text-white p-4 rounded-full shadow-lg hover:bg-blue-800"
        >
          <Bot size={24} />
        </button>
      </div>
    </div>
  );
};

// Helper Components
const NewsUpdate = ({ country, title, time, type }) => (
  <div className="border-l-4 border-blue-500 pl-4">
    <div className="flex items-center gap-2 mb-1">
      <span className="font-bold">{country}</span>
      {type === 'breaking' && (
        <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">BREAKING</span>
      )}
    </div>
    <h4 className="font-medium mb-1">{title}</h4>
    <p className="text-sm text-gray-600">{time}</p>
  </div>
);

const PresidentItem = ({ name, country, since, status }) => (
  <div className="flex items-center gap-4">
    <img
      src="/api/placeholder/40/40"
      alt={name}
      className="rounded-full"
    />
    <div>
      <h4 className="font-bold">{name}</h4>
      <p className="text-sm text-gray-600">{country} (Since {since})</p>
    </div>
  </div>
);

const Timeline = () => (
  <div className="space-y-4">
    <div className="text-sm">
      <div className="text-gray-500">2 hours ago</div>
      <div>German President meets with EU delegates</div>
    </div>
    <div className="text-sm">
      <div className="text-gray-500">5 hours ago</div>
      <div>South Korean President announces tech initiative</div>
    </div>
  </div>
);

const PressReleases = () => (
  <div className="space-y-4">
    <div className="text-sm">
      <div className="font-bold">Office of the President - Argentina</div>
      <div className="text-gray-600">Economic cooperation agreement signed</div>
    </div>
  </div>
);

const UpcomingEvents = () => (
  <div className="space-y-4">
    <div className="text-sm">
      <div className="font-bold">Oct 30, 2024</div>
      <div>G20 Summit - Presidential Meeting</div>
    </div>
  </div>
);

export default GlobalPresidentsDashboard;