import React, { useState, useRef, useEffect } from 'react';

interface LazyYouTubeProps {
  videoId: string;
  title: string;
  className?: string;
  autoplay?: boolean;
  mute?: boolean;
  loop?: boolean;
  si?: string;
}

const LazyYouTube: React.FC<LazyYouTubeProps> = ({ 
  videoId, 
  title, 
  className = '', 
  autoplay = false,
  mute = true,
  loop = false,
  si,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate thumbnail URL
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  
  // Generate embed URL with parameters
  const embedUrl = `https://www.youtube.com/embed/${videoId}?` +
    `${si ? `si=${si}&` : ''}` +
    `autoplay=${autoplay ? '1' : '0'}&` +
    `mute=${mute ? '1' : '0'}&` +
    `loop=${loop ? '1' : '0'}&` +
    `playlist=${videoId}&` +
    `controls=0&` +
    `rel=0&` +
    `modestbranding=1&` +
    `showinfo=0&` +
    `playsinline=1`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isInView]);

  const handleClick = () => {
    setIsLoaded(true);
  };

  // For autoplay (background video), skip all lazy/click gates and render immediately
  if (autoplay) {
    return (
      <div className={className}>
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  if (!isInView) {
    // Show placeholder with thumbnail while not in viewport
    return (
      <div 
        ref={containerRef}
        className={`relative bg-gray-200 ${className}`}
        style={{ aspectRatio: '16/9' }}
      >
        <div className="absolute inset-0 bg-gray-300 animate-pulse" />
      </div>
    );
  }

  if (!isLoaded) {
    // Show clickable thumbnail with play button
    return (
      <div 
        ref={containerRef}
        className={`relative cursor-pointer group ${className}`}
        onClick={handleClick}
        style={{ aspectRatio: '16/9' }}
      >
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-200" />
        
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors duration-200 shadow-2xl">
            <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-2" />
          </div>
        </div>
        
        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <p className="text-white text-sm font-medium">{title}</p>
        </div>
      </div>
    );
  }

  // Load actual YouTube embed
  return (
    <div className={className} style={{ aspectRatio: '16/9' }}>
      <iframe
        src={embedUrl}
        title={title}
        className="w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export default LazyYouTube;
