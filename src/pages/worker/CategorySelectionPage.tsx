import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { PageTransition } from '../../layouts/PageTransition';

const categories = [
  { id: 'c1', title: 'Construction Worker', desc: 'Building, masonry, carpentry, site labor work.', emoji: '👷' },
  { id: 'c2', title: 'Gardener', desc: 'Planting, landscaping, and garden maintenance.', emoji: '🧑‍🌾' },
  { id: 'c3', title: 'Welder', desc: 'Welding, metal fabrication and repair work.', emoji: '👨‍🏭' },
  { id: 'c4', title: 'Electrician', desc: 'Wiring, electrical repair and installation.', emoji: '⚡' },
  { id: 'c5', title: 'Plumber', desc: 'Piping, water supply, and drainage systems.', emoji: '🔧' },
];

export default function CategorySelectionPage() {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const filteredCategories = categories.filter(c => c.title.toLowerCase().includes(search.toLowerCase()));

  const handleContinue = () => {
    if (selectedId) {
      navigate('/worker/skill-check');
    }
  };

  return (
    <PageTransition className="flex flex-col h-full bg-white px-6">
      <div className="pt-4 pb-2 flex items-center">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-900 rounded-full hover:bg-gray-100 transition-colors">
          <ArrowLeft size={24} />
        </button>
      </div>

      <div className="flex-1 flex flex-col">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Choose your work category</h1>
        <p className="text-gray-500 mb-6 font-medium text-sm">Select the option that best matches your work.</p>

        <div className="mb-4">
          <Input 
            placeholder="Search categories..." 
            icon={<Search size={18} />}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar space-y-3 pb-4 -mx-1 px-1">
          {filteredCategories.map(cat => (
            <Card 
              key={cat.id}
              variant="outline"
              selected={selectedId === cat.id}
              onClick={() => setSelectedId(cat.id)}
              className="relative flex items-center p-4"
            >
              {selectedId === cat.id && (
                <div className="absolute top-4 right-4 text-primary">
                  <CheckCircle2 className="w-5 h-5 fill-primary text-white" />
                </div>
              )}
              <div className="text-4xl mr-4 flex-shrink-0">
                {cat.emoji}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base">{cat.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{cat.desc}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="pt-4 pb-6 bg-white">
          <Button 
            fullWidth 
            onClick={handleContinue}
            disabled={!selectedId}
          >
            Continue
          </Button>
        </div>
      </div>
    </PageTransition>
  );
}
