import React from 'react';

const news = [
  {
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    category: 'Science',
    title: 'Goodwin must Break Clarkson hold on Flags',
    date: '18 MAY 2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    author: 'JANE TAYLOR',
  },
  {
    image: 'https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=600&q=80',
    category: 'Politics',
    title: 'Start your career right here at home',
    date: '15 MAY 2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    author: 'MARK ROSE',
  },
];

const LatestNews = () => (
  <section className="bg-[#E2F3F4] py-10">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-2 text-[#6DC7D1]">Lastest World News</h2>
      <p className="mb-8 text-gray-600">Don&apos;t miss daily news</p>
      <div className="grid md:grid-cols-2 gap-8">
        {news.map((item, idx) => (
          <div key={idx} className="flex gap-6 bg-white rounded-lg shadow p-4">
            <img src={item.image} alt={item.title} className="w-40 h-32 object-cover rounded" />
            <div>
              <span className="inline-block bg-[#6DC7D1] text-black px-2 py-1 rounded text-xs font-semibold mb-2">{item.category}</span>
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <span className="text-xs text-[#6DC7D1] font-semibold">{item.date}</span>
              <p className="mt-2 text-gray-700 text-sm">{item.description}</p>
              <span className="block mt-2 text-xs font-semibold text-gray-500">BY {item.author}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LatestNews; 