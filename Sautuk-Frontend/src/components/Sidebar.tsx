import React from 'react';

const popularNews = [
  {
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    title: 'How to start Home education.',
    date: '25 MAY 2022',
    comments: 12,
    views: 654,
  },
  {
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    title: 'The secret to moving this screening.',
    date: '13 APRIL 2021',
    comments: 6,
    views: 1227,
  },
];

const Sidebar = () => (
  <aside className="bg-white rounded-lg shadow p-4 w-full md:w-80">
    <h3 className="text-xl font-bold mb-4 text-[#6DC7D1]">Popular News</h3>
    <ul className="space-y-4">
      {popularNews.map((item, idx) => (
        <li key={idx} className="flex gap-4 items-center">
          <img src={item.image} alt={item.title} className="w-16 h-12 object-cover rounded" />
          <div>
            <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
            <div className="text-xs text-gray-500 flex gap-2">
              <span>{item.date}</span>
              <span>• {item.comments} comments</span>
              <span>• {item.views} views</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </aside>
);

export default Sidebar; 