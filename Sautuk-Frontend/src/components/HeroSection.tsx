import React from 'react';

const HeroSection = () => (
  <section className="relative h-[60vh] flex items-end bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80)'}}>
    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
    <div className="relative z-10 p-8 max-w-2xl text-white">
      <span className="inline-block bg-[#6DC7D1] text-black px-3 py-1 rounded mb-4 font-semibold">Politics</span>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">How Maps Reshape American Politics In World</h1>
      <p className="mb-6 text-lg">Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue.</p>
      <div className="flex items-center gap-4">
        <span className="font-semibold">By MARK ROSE</span>
        <span className="text-[#6DC7D1]">22 MARCH 2022</span>
      </div>
    </div>
  </section>
);

export default HeroSection; 