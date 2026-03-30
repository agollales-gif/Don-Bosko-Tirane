import React from 'react';
import LazyYouTube from './LazyYouTube';

const HeroDebug: React.FC = () => {
  console.log('HeroDebug: Component mounting');
  
  return (
    <section className="relative overflow-hidden w-full">
      <div className="relative w-full h-[100svh] min-h-[600px] overflow-hidden bg-gray-900">
        <div className="text-center py-8">
          <h1 className="text-4xl text-white mb-4">Debug Hero Component</h1>
          <p className="text-white mb-4">Testing basic rendering without video</p>
          
          {/* Test LazyYouTube component directly */}
          <div className="relative w-full h-96 bg-gray-800">
            <LazyYouTube
              videoId="TFB5PTNF3rw"
              title="Test Video"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroDebug;
