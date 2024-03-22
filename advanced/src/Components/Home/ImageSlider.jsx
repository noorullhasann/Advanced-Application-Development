import React, { useState } from 'react';
import './ImageSlider.css'; // Ensure this path matches your CSS file

const ImageSlider = () => {
  // Array of candidate data (including image URL, name, and description)
  const candidates = [
    {
      imageUrl: 'https://th.bing.com/th?id=OIP.70nX8ZH7o40QL1fzXkR36AHaFR&w=296&h=210&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      name: 'John Doe',
      description: 'Experienced software engineer with expertise in React and Node.js.',
    },
    {
      imageUrl: 'https://example.com/image2.jpg',
      name: 'Jane Smith',
      description: 'Creative graphic designer with a passion for UI/UX design.',
    },
    // Add more candidate data as needed
  ];

  // State to keep track of the index of the currently displayed candidate
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState(0);

  // Function to handle clicking on the next button
  const nextSlide = () => {
    setCurrentCandidateIndex((prevIndex) =>
      prevIndex === candidates.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle clicking on the previous button
  const prevSlide = () => {
    setCurrentCandidateIndex((prevIndex) =>
      prevIndex === 0 ? candidates.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="image-slider">
      <button className="prev" onClick={prevSlide}>
        &#10094; {/* Left arrow */}
      </button>
      <div className="candidate-info">
        <img
          src={candidates[currentCandidateIndex].imageUrl}
          alt="slide"
          className="candidate-image"
        />
        <div className="candidate-details">
          <h3>{candidates[currentCandidateIndex].name}</h3>
          <p>{candidates[currentCandidateIndex].description}</p>
        </div>
      </div>
      <button className="next" onClick={nextSlide}>
        &#10095; {/* Right arrow */}
      </button>
    </div>
  );
};

export default ImageSlider;
