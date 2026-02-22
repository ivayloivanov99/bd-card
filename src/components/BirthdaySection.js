import React, { useState } from 'react';
import './BirthdaySection.css';
import birthday from '../assets/images/birthday.jpg';
import birthday1 from '../assets/images/birthday1.jpg';
import birthday2 from '../assets/images/birthday2.jpg';
import birthday3 from '../assets/images/birthday3.jpg';
import birthday4 from '../assets/images/birthday4.jpg';
import birthday5 from '../assets/images/birthday5.jpg';
import birthday6 from '../assets/images/birthday6.jpg';
import birthday7 from '../assets/images/birthday7.jpg';
import birthday8 from '../assets/images/birthday8.jpg';
import birthday9 from '../assets/images/birthday9.jpg';
import birthday10 from '../assets/images/birthday10.jpg';

// Arrays for images, main text, and button text
const images = [
  birthday, birthday1, birthday2, birthday3, birthday4, birthday5,
  birthday6, birthday7, birthday8, birthday9, birthday10
];

const mainTexts = [
  "🎉 Честит четвърт век, Дени!!! 🎉",
  "Всички картофи на земята да са твои! 🍟",
  "Bad Bunny да ти пее на ушенце! ❤️",
  "Taylor да ти е НДП! (след Милви) 🖤",
  "Да обиколиш целия свят! 🌍",
  "Да изгледаш всички турски сериали! 🇹🇷",
  "Баклава от Истанбул, когато си поискаш! 😋",
  "И все пак с тяло на топ модел! 🤩",
  "Всичките пари да са твои! 💸",
  "Винаги усмихната с вино в ръка! 🍷",
  "🎂 Честит рожден ден! 🎂",
  "🥳 от Милви и Иво 🥳",
];

const buttonTexts = [
  "Пожелаваме ти 🎁",
  "Но никога да не ми се лепят! 🏃‍♀️",
  "Или аз на него 🥵",
  "Естествено след Милви! 🥰",
  "Нямам търпение! ✨",
  "Повечето съм ги гледала! 😅",
  "Искам от Кърджали 🍽️",
  "Аз вече съм! 🔥",
  "Уау! 🤑",
  "Любимото ми! 😍",
  "Мерсиии 💝"
];

function BirthdaySection() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleButtonClick = () => {
    // Advance normally until the last image
    if (currentStep < images.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  // The video appears only AFTER the last image
  const showVideo = currentStep === images.length;

  return (
    <div className="birthday-section">
      <h1>{mainTexts[Math.min(currentStep, mainTexts.length - 1)]}</h1>

      {!showVideo ? (
        <>
          <img
            src={images[currentStep]}
            alt={`Birthday Surprise ${currentStep + 1}`}
          />
          <button onClick={handleButtonClick}>
            {buttonTexts[Math.min(currentStep, buttonTexts.length - 1)]}
          </button>
        </>
      ) : (
        <div className="youtube-container">
          <iframe
            width="100%"
            height="70vh"
            src="https://www.youtube.com/embed/ko70cExuzZM?autoplay=1&loop=1&playlist=ko70cExuzZM"
            title="Birthday Surprise Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default BirthdaySection;