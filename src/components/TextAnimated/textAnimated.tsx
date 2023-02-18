import { useRef } from 'react';

const TextAnimated = () => {
  const textArray = ['divertido', 'desafiador', 'uma jornada', 'VIDA!'];
  const typingDelay = 200;
  const erasingDelay = 100;
  const newTextDelay = 2000; // Delay between current and next text
  let textArrayIndex = 0;
  let charIndex = 0;

  const typedTextSpan = useRef(null);
  const cursorSpan = useRef(null);

  const changeText = () => {
    if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains('typing'))
      cursorSpan.classList.add('typing');
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    setTimeout(erase, newTextDelay);
  }
}
  }

  return (
    <div className="text-container">
      <h1>
        Codar é <span ref={typedTextSpan} className="typed-text"></span>
        <span ref={cursorSpan} className="cursor">
          &nbsp;
        </span>
      </h1>
    </div>
  );
};

export default TextAnimated;

// function type() {
//   if (charIndex < textArray[textArrayIndex].length) {
//     if (!cursorSpan.classList.contains('typing'))
//       cursorSpan.classList.add('typing');
//     typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
//     charIndex++;
//     setTimeout(type, typingDelay);
//   } else {
//     cursorSpan.classList.remove('typing');
//     setTimeout(erase, newTextDelay);
//   }
// }

// function erase() {
//   if (charIndex > 0) {
//     if (!cursorSpan.classList.contains('typing'))
//       cursorSpan.classList.add('typing');
//     typedTextSpan.textContent = textArray[textArrayIndex].substring(
//       0,
//       charIndex - 1,
//     );
//     charIndex--;
//     setTimeout(erase, erasingDelay);
//   } else {
//     cursorSpan.classList.remove('typing');
//     textArrayIndex++;
//     if (textArrayIndex >= textArray.length) textArrayIndex = 0;
//     setTimeout(type, typingDelay + 1100);
//   }
// }

// document.addEventListener('DOMContentLoaded', function () {
//   // On DOM Load initiate the effect
//   if (textArray.length) setTimeout(type, newTextDelay + 250);
// });
