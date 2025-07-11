import { useState, useEffect, useRef } from 'react';

const certificates = [
  {
    image: './images/certificates/ecoo-certificate.png',
    title: 'Web Development Certificate',
    description: 'Completed a full-stack web development bootcamp.',
  },
  {
    image: './images/certificates/iec-certificate.png',
    title: 'Python Fundamentals',
    description: 'Certified for completing Python basics and scripting.',
  },
  {
    image: './images/certificates/ecoo-certificate.png',
    title: 'ReactJS Workshop',
    description: 'Participated in a ReactJS hands-on seminar.',
  },
  // Add more as needed
];

export default function AboutCertificates({ onClose }) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const touchStartX = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      diff > 0 ? prevSlide() : nextSlide();
    }
    touchStartX.current = null;
  };

  return (
    <div className="modal-overlay">
      <div className="modal-wrapper">
        <div className="modal carousel-modal">
          <h2>MY CERTIFICATES</h2>

          <div
            className="carousel-container"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button onClick={prevSlide} className="carousel-arrow left">‹</button>

            <div className="carousel-slide">
              <img
                src={certificates[current].image}
                alt={certificates[current].title}
                className="carousel-image"
              />
              <h3>{certificates[current].title}</h3>
              <p>{certificates[current].description}</p>
            </div>

            <button onClick={nextSlide} className="carousel-arrow right">›</button>
          </div>
        </div>
        <button onClick={onClose} className="modal-close-btn outside">Close</button>
      </div>
    </div>
  );
}
