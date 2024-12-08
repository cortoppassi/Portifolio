import React, { useState, useEffect } from 'react';
import Image from 'next/image';


export default function MultiActionAreaCard() {
  const imageUrls = [
    "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    "https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_wordmark_logo_icon_146375.png",
    "https://cdn.icon-icons.com/icons2/2415/PNG/512/nodejs_original_wordmark_logo_icon_146412.png",
    "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
    "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png",
    "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_css_icon_130661.png",
    "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_git_icon_130581.png",
    "https://cdn.icon-icons.com/icons2/2415/PNG/512/mysql_original_wordmark_logo_icon_146417.png",
    "https://cdn.icon-icons.com/icons2/2415/PNG/512/docker_original_wordmark_logo_icon_146557.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Altere o valor para ajustar a velocidade da animação

    return () => clearInterval(timer);
  }, [imageUrls.length]);

  return (
    <div style={{ display: 'flex', overflow: 'hidden' }}>
      <div
        style={{
          display: 'flex',
          transform: `translateX(-${currentIndex * 60}px)`, // 60 é a largura das imagens
          transition: 'transform 1s',
        }}
      >
        {imageUrls.map((imageUrl, index) => (
          <Image
            key={index}
            src={imageUrl}
            width={50}
            height={50}
            alt=""
            style={{ marginRight: '10px' }} // Espaço entre as imagens
          />
        ))}
      </div>
    </div>
  );
}
