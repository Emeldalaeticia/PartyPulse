import React, { useEffect, useState } from 'react';

const UnsplashImage = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const accessKey = 'qaEnEBL7AtTALCPjwpKC4XfqXZ_SuuhJJkbF9SASR_A';
    const apiUrl = `https://api.unsplash.com/photos/random?orientation=landscape&query=party&client_id=${accessKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const fetchedImageUrl = data.urls.regular;
        setImageUrl(fetchedImageUrl);
      })
      .catch(error => {
        console.error('Error fetching image from Unsplash:', error);
      });
  }, []);

  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="Unsplash Image" className='rounded-xl'/>}
    </div>
  );
};

export default UnsplashImage;
