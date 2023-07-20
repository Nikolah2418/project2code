import React, { useState, useEffect } from 'react';
import aboutwall from '../assets/aboutwall.jpg';

const AboutComp = () => {
  const [translated, setTranslated] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [utterance, setUtterance] = useState(null);

  const handleTranslate = () => {
    setTranslated(!translated);
    if (isReading) {
      speechSynthesis.cancel();
      handleReadAbout();
    }
  };

  const handleReadAbout = () => {
    if (isReading) {
      speechSynthesis.cancel();
      setIsReading(false);
    } else {
      const aboutText = translated
        ? "Nucleo est un site Web d'évaluation populaire et largement reconnu dédié au monde du divertissement. Servant de source complète de critiques et de fonctionnalités, Nucleo propose une vaste gamme de contenus couvrant les jeux vidéo, les films, les émissions de télévision et les jeux de société. En tant que plate-forme communautaire, nous nous efforçons de fournir une couverture à jour et perspicace, offrant aux lecteurs et aux écrivains un endroit où ils peuvent se sentir chez eux. Que vous soyez un passionné de jeux, un cinéphile ou simplement à la recherche des dernières nouvelles sur le divertissement, Nucleo est la destination incontournable, répondant aux intérêts et aux curiosités des amateurs de divertissement du monde entier."
        : "Nucleo is a popular and widely recognized review-based website dedicated to the world of entertainment. Serving as a comprehensive source of reviews and features, Nucleo offers a vast array of content covering video games, movies, TV shows, and board games. As a community-driven platform, we strive to deliver up-to-date and insightful coverage, providing readers and writers with a place they can call home. Whether you are a gaming enthusiast, a movie buff, or simply seeking the latest great entertainment news, Nucleo serves as the go-to destination, catering to the interests and curiosities of entertainment enthusiasts worldwide.";

      const newUtterance = new SpeechSynthesisUtterance(aboutText);
      newUtterance.lang = translated ? 'fr-FR' : 'en-US';
      setUtterance(newUtterance);
      speechSynthesis.speak(newUtterance);
      setIsReading(true);
    }
  };

  useEffect(() => {
    if (utterance) {
      utterance.onend = () => {
        setIsReading(false);
      };
    }
  }, [utterance]);

  return (
    <div className='about '>
      <div className='image-container '>
        <img src={aboutwall} alt='About Wall' className='image' />
      </div>
      <div className='description'>
        <p>
          {translated ? (
            <span>Nucleo est un site Web d'évaluation populaire et largement reconnu dédié au monde du divertissement. Servant de source complète de critiques et de fonctionnalités, Nucleo propose une vaste gamme de contenus couvrant les jeux vidéo, les films, les émissions de télévision et les jeux de société. En tant que plate-forme communautaire, nous nous efforçons de fournir une couverture à jour et perspicace, offrant aux lecteurs et aux écrivains un endroit où ils peuvent se sentir chez eux. Que vous soyez un passionné de jeux, un cinéphile ou simplement à la recherche des dernières nouvelles sur le divertissement, Nucleo est la destination incontournable, répondant aux intérêts et aux curiosités des amateurs de divertissement du monde entier.</span>
          ) : (
            <span>
              Nucleo is a popular and widely recognized review-based website dedicated to the world of entertainment. Serving as a comprehensive source of reviews and features, Nucleo offers a vast array of content covering video games, movies, TV shows, and board games.
              As a community-driven platform, we strive to deliver up-to-date and insightful coverage, providing readers and writers with a place they can call home. Whether you are a gaming enthusiast, a movie buff, or simply seeking the latest great entertainment news, Nucleo serves as the go-to destination, catering to the interests and curiosities of entertainment enthusiasts worldwide.
            </span>
          )}
        </p>
      </div>
      <div className='trans-button'>
        <button onClick={handleTranslate}>
          {translated ? 'Translate to English' : 'Traduire en français'}
        </button>
        <button onClick={handleReadAbout} aria-label="Read about section">
          {isReading ? 'Stop Reading' : translated ? 'Lire la section à propos' : 'Read about section'}
        </button>
      </div>
    </div>
  );
};

export default AboutComp;
