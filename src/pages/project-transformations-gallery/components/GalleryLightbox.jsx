import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const GalleryLightbox = ({ project, isOpen, onClose, initialImageIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialImageIndex);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialImageIndex);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialImageIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      switch (e?.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  if (!isOpen || !project) return null;

  const allImages = [
    project?.images?.main,
    ...(project?.images?.gallery || [])
  ];

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % allImages?.length);
    setIsZoomed(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + allImages?.length) % allImages?.length);
    setIsZoomed(false);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-white text-lg font-semibold">{project?.title}</h2>
            <p className="text-white/70 text-sm">
              {currentIndex + 1} of {allImages?.length} images
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              iconName={isZoomed ? "ZoomOut" : "ZoomIn"}
              onClick={toggleZoom}
              className="text-white hover:bg-white/20"
            />
            <Button
              variant="ghost"
              size="sm"
              iconName="Download"
              className="text-white hover:bg-white/20"
            />
            <Button
              variant="ghost"
              size="sm"
              iconName="X"
              onClick={onClose}
              className="text-white hover:bg-white/20"
            />
          </div>
        </div>
      </div>
      {/* Main Image */}
      <div className="relative w-full h-full flex items-center justify-center">
        <div 
          className={`relative transition-transform duration-medium ${
            isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          onClick={toggleZoom}
        >
          <Image
            src={allImages?.[currentIndex]}
            alt={`${project?.title} - Image ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Navigation Arrows */}
        {allImages?.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-fast"
              disabled={isZoomed}
            >
              <Icon name="ChevronLeft" size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-fast"
              disabled={isZoomed}
            >
              <Icon name="ChevronRight" size={24} />
            </button>
          </>
        )}
      </div>
      {/* Bottom Thumbnail Strip */}
      {allImages?.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <div className="flex justify-center">
            <div className="flex space-x-2 overflow-x-auto max-w-full">
              {allImages?.map((image, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsZoomed(false);
                  }}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-fast ${
                    index === currentIndex
                      ? 'border-white' :'border-transparent opacity-50 hover:opacity-80'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Image Info Overlay */}
      <div className="absolute bottom-20 left-6 bg-black/70 text-white p-4 rounded-lg max-w-sm">
        <h3 className="font-medium mb-1">
          {project?.imageDescriptions?.[currentIndex]?.title || `${project?.type} Detail`}
        </h3>
        <p className="text-sm text-white/80">
          {project?.imageDescriptions?.[currentIndex]?.description || 
           `High-quality craftsmanship detail from ${project?.title} project`}
        </p>
      </div>
      {/* Touch/Swipe Instructions */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="bg-black/50 text-white px-4 py-2 rounded-full text-sm opacity-50">
          Swipe or use arrow keys to navigate
        </div>
      </div>
    </div>
  );
};

export default GalleryLightbox;