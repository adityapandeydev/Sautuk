import React from 'react';

const forecast = [
  { day: 'Monday', temp: 21, icon: '☁️' },
  { day: 'Tuesday', temp: 18, icon: '☀️' },
  { day: 'Wednesday', temp: 24, icon: '☀️' },
  { day: 'Thursday', temp: 27, icon: '☁️' },
];

const WeatherWidget = () => (
  <div className="bg-[#E2F3F4] rounded-lg shadow p-6 w-full md:w-80">
    <div className="flex items-center gap-4 mb-4">
      <span className="text-4xl">☁️</span>
      <div>
        <div className="text-3xl font-bold text-[#6DC7D1]">25°C</div>
        <div className="text-gray-600">Overcast clouds</div>
        <div className="font-semibold">New York - Today</div>
      </div>
    </div>
    <div className="mt-4">
      {forecast.map((item, idx) => (
        <div key={idx} className="flex justify-between text-sm text-gray-700 py-1">
          <span>{item.day}</span>
          <span>{item.temp}°C {item.icon}</span>
        </div>
      ))}
    </div>
  </div>
);

export default WeatherWidget; 