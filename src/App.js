import NavButton from './components/NavButton.js';
import profile from './imgs/me.png';
import PathSection from './components/PathSection.js';
import Project from './components/Project.js';
import Art from './components/Art.js';

// Dandelion animation
window.onload = function() {
  const animationzone = document.getElementById("animation_zone");

  const zoneHeight = animationzone.offsetHeight;
  const zoneWidth = animationzone.offsetWidth;

  function createCircle() {
    const ball = document.createElement("div")
    ball.className="dande";
    // Generate a random alpha value between 0.7 and 0.1
    const randomAlpha = Math.random() * (0.7 - 0.1) + 0.1;
    const randomPos = Math.random() * zoneHeight;
    const randomSize = Math.random() * (40 - 20) + 20;
    const randomSpeed = Math.random() * (20 - 10) + 10;
    
    ball.style.position = "absolute";
    ball.style.width = `${randomSize}px`;
    ball.style.borderRadius = "50%";
    ball.style.height = `${randomSize}px`;
    ball.style.backgroundColor = `rgba(255, 255, 255, ${randomAlpha})`;
    ball.style.top = `${randomPos}px`;
    document.getElementById("animation_zone").appendChild(ball);

    let startTime = null;

    function animate(time) {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;

      // Calculate the new position using a sine wave
      const x = elapsed / randomSpeed;
      const y = Math.sin(x / 50) * 100 + randomPos; // Adjust amplitude and frequency

      ball.style.left = `${x}px`;
      ball.style.top = `${y}px`;

      // Stop the animation when the ball moves out of the animation zone
      if (x < zoneWidth + ball.offsetWidth) {
        requestAnimationFrame(animate);
      } else {
        animationzone.removeChild(ball);
        createCircle();
      }
    }

    requestAnimationFrame(animate);
    
  }

  for (let i = 0; i < 3; i++) {
    const delay = Math.random() * (2000 - 100) + 100;
    setTimeout(createCircle, delay);
  }
}

function App() {
  return (
    // HEADER/HERO CONTENT
    <div id="MAIN" className="min-h-80 flex flex-col">
      <section id="home">
        <div id="animation_zone"></div>
        <div id="header" className="flex justify-center bg-center bg-cover bg-local">
          

          <div id="profileContainer" className="absolute top-10 right-40">
            <img id="pfp" src={profile} alt="pfp" className="relative" />
          </div>
          <div id="profile_description_container">
            <div id="profile_description_text" className="profile_description_text">
              <p>An artist and a developer, learning everywhere he goes. He strives to utilize his skills to bring smiles to people’s faces every day :)</p>
            </div>
          </div>

          
        </div>
      </section>
      <section id="path">
        <PathSection />
      </section>
      <section id="projects" className="hidden bg-white pl-90">
        <Project />
      </section>
      <section id="gallery" className="hidden bg-white pl-90">
        <Art />
      </section>

    </div>
  );
}

export default App;
