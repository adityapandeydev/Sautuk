import React from 'react';

const stories = [
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    category: 'Science',
    title: 'How to start Home renovation.',
    date: '05 APRIL 2022',
  },
  {
    image: 'https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=600&q=80',
    category: 'Sports',
    title: 'Warriors face season defining clash',
    date: '11 MARCH 2022',
  },
];

const TopStories = () => (
  <section className="py-10">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-2 text-[#6DC7D1]">Top Stories</h2>
      <p className="mb-8 text-gray-600">Don&apos;t miss daily news</p>
      <div className="grid md:grid-cols-2 gap-8">
        {stories.map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <span className="inline-block bg-[#6DC7D1] text-black px-2 py-1 rounded text-xs font-semibold mb-2">{item.category}</span>
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <span className="text-xs text-[#6DC7D1] font-semibold">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TopStories; 