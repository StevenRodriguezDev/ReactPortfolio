/* eslint-disable react/no-unescaped-entities */
import MenuMatch from '/src/assets/images/MenuMatchDesktop1.png'
import CalcApp from '/src/assets/images/Calc.png'
import Work from '/src/assets/images/Workday.png'
import PasswordGen from '/src/assets/images/Password.png'
import MovieDB from '/src/assets/images/MovieDB.png'
import Employee from '/src/assets/images/directory.png'


export default function Portfolio() {
  return (
    <main>
      {/* <!-- <section id="portfolio"> --> */}
      <h1 id="portfolio">Portfolio</h1>

      <section>
      <h2>React Calculator</h2>
        <p>
          This is a 
          <a href="https://stevenrodriguezdev.github.io/calc-app/" target="_blank"rel="noreferrer"> React Calculator</a> ,
          enter in the numbers you want, and press the big =
          button and get the results.
          <a href="https://github.com/StevenRodriguezDev/Quiz-App" target="_blank"rel="noreferrer"> GitHub Repo </a>
        </p>
        <a href="https://stevenrodriguezdev.github.io/calc-app/" target="_blank"rel="noreferrer" >
        <img
          src={CalcApp}
          alt="calcApp"
          className="img"
        />
        </a>
        {/* <!-- <div class="middle">
          <div class="text">Deploy</div>
        </div> --> */}
       
      </section>

      <section>
      <h2>Menu Match</h2>
        <p>
          <a href="https://jkellogg01.github.io/menu-match/" target="_blank" rel="noreferrer">
              Menu Match
          </a>
          is a project that is designed to streamline the process of finding a
          recipe, shopping for ingredients, and preparing a great meal.
          <a href="https://github.com/jkellogg01/menu-match" target="_blank"rel="noreferrer"> GitHub Repo </a>
        </p>
        <a href="https://jkellogg01.github.io/menu-match/" target="_blank"rel="noreferrer" >
        <img
          src={MenuMatch}
          alt="menuPage"
          className="img"
        />
        </a>
      </section>

      <section>
      <h2>WorkDay Scheduler</h2>
        <p>
        A simple 
        <a
        href="https://stevenrodriguezdev.github.io/WorkDay-Scheduler/" target="_blank" rel="noreferrer">
        calendar application </a>
        that allows a user to save events for each hour of a typical working day (9am–5pm) This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
        <a href="https://github.com/StevenRodriguezDev/WorkDay-Scheduler" target="_blank"rel="noreferrer"> GitHub Repo </a>
        </p>
        <a href="https://stevenrodriguezdev.github.io/WorkDay-Scheduler/" target="_blank" rel="noreferrer">
        <img
           src={Work}
          alt="Workday"
          className="img"
        />
        </a>
      </section>

      <section>
      <h2>Password Generator</h2>
        <p>
        This 
        <a
          href="https://stevenrodriguezdev.github.io/password-generator/" target="_blank" rel="noreferrer" >
          Password Generator 
        </a>
        is an application that an employee can use to generate a random password based on criteria they've selected.
        <a href="https://github.com/StevenRodriguezDev/password-generator" target="_blank"rel="noreferrer"> GitHub Repo </a>
        </p>
        <a    href="https://stevenrodriguezdev.github.io/password-generator/" target="_blank" rel="noreferrer" >
        <img 
        src={PasswordGen}
        alt="Password" 
        className="img" />
        </a>
      </section>

      <section>
      <h2>Movie Database</h2>
        <p>
          <a  
          href="https://little-site-of-horrors-1-f45120ac21d1.herokuapp.com" target="_blank" rel="noreferrer">
        
        Little Site of Horrors
        </a> 
        was created to delight observers of Spooky Season, young and old. 💀 By providing users with a database of scary, and not so-scary, movies to watch in October (or anytime the need arises) we're hoping everyday can be a little bit spookier!
        <a href="https://github.com/ljkahn/littleSiteOfHorrors" target="_blank"rel="noreferrer"> GitHub Repo </a>
        </p>
        <a href="https://little-site-of-horrors-1-f45120ac21d1.herokuapp.com" target="_blank" rel="noreferrer">
        
        <img
           src={MovieDB}
          alt="database of movies"
          className="img"
        />
        </a>
      </section>

      <section>
      <h2>Empoyee Directory</h2>
        <p>
          <a
          href="https://stevenrodriguezdev.github.io/EmployeeDirectory/" target="_blank" rel="noreferrer">
          
          Employee Directory
         </a>
         is an third-party API App to see your Employees
         <a href="https://github.com/StevenRodriguezDev/EmployeeDirectory" target="_blank"rel="noreferrer"> GitHub Repo </a>
        </p>
        <a  href="https://stevenrodriguezdev.github.io/EmployeeDirectory/" target="_blank" rel="noreferrer">
        <img
           src={Employee}
          alt="calc-page"
          className="img"
        />
        </a>
      </section>
      {/* <!-- </section> --> */}
    </main>
  );
}
