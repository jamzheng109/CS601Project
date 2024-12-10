import React from 'react';
import '../styles/Gallery.css';

const Gallery: React.FC = () => {
  const galleryItems = [
    {
        src: '/images/southkorea.jpg',
        title: 'South Korea',
        description: "I love South Korea and its' culture. From the food to the fashion to the people, it is truly a beautiful place. I do not even have to mention everyone" +
            "with their glass skin.",
    },
    {
        src: '/images/japan.jpg',
        title: 'Japan',
        description: "Definitely a culture shock and a busy city. You can find almost anything and everything in Japan. The food quality is one of the" +
            "best I have ever experienced. ",
    },
    {
        src: '/images/china.jpg',
        title: 'China',
        description: "It is my parents home country and it is nice to experience and embrace my culture even being a toddler. The technology now is so advanced" +
            "but it still did not lose its natural beauty as a country",
    },
    {
        src: '/images/vietnam.jpg',
        title: 'Vietnam',
        description: "The country is more beautiful and eventful than one may think. From outside Vietnam but not seem much but their food, they know what they are doing. " +
            "I highly recommend country side than the city, where you can truly embrace nature at its finest.",
    },
    {
        src: '/images/singapore.jpg',
        title: 'Singapore',
        description: "People say it is one of the cleanest countries and I believe. Singapore is small but trust me you will find and create your own adventure from the stories architecture" +
            "and culture. ",
    },
  ];

return (
    <section id="gallery" className="gallery-section">
      <h2>Gallery</h2>
        <p>Places I have visited during my time in Asia</p>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div key={index} className="gallery-item">
            <img src={item.src} alt={item.title} className="gallery-image" />
            <h3 className="gallery-title">{item.title}</h3>
            <p className="gallery-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;