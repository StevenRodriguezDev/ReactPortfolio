/* eslint-disable react/no-unescaped-entities */
import MenuMatch from '/src/assets/images/MenuMatchDesktop1.png';
import CalcApp from '/src/assets/images/Calc.png';
import Work from '/src/assets/images/Workday.png';
import PasswordGen from '/src/assets/images/Password.png';
import MovieDB from '/src/assets/images/MovieDB.png';
import Employee from '/src/assets/images/directory.png';
import Project from '/src/components/Project';

export default function Portfolio() {
  return (
    <main>
      <h1 id="portfolio">Portfolio</h1>

      <Project
        title="React Calculator"
        description="This is a React Calculator, enter in the numbers you want, and press the big = button and get the results."
        imageUrl={CalcApp}
        projectLink="https://stevenrodriguezdev.github.io/calc-app/"
        repoLink="https://github.com/StevenRodriguezDev/Quiz-App"
      />

      <Project
        title="Menu Match"
        description="Menu Match is a project that is designed to streamline the process of finding a recipe, shopping for ingredients, and preparing a great meal."
        imageUrl={MenuMatch}
        projectLink="https://jkellogg01.github.io/menu-match/"
        repoLink="https://github.com/jkellogg01/menu-match"
      />

      <Project
        title="WorkDay Scheduler"
        description="A simple calendar application that allows a user to save events for each hour of a typical working day (9am–5pm). This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery."
        imageUrl={Work}
        projectLink="https://stevenrodriguezdev.github.io/WorkDay-Scheduler/"
        repoLink="https://github.com/StevenRodriguezDev/WorkDay-Scheduler"
      />

      <Project
        title="Password Generator"
        description="This Password Generator is an application that an employee can use to generate a random password based on criteria they've selected."
        imageUrl={PasswordGen}
        projectLink="https://stevenrodriguezdev.github.io/password-generator/"
        repoLink="https://github.com/StevenRodriguezDev/password-generator"
      />

      <Project
        title="Movie Database"
        description="Little Site of Horrors was created to delight observers of Spooky Season, young and old. By providing users with a database of scary, and not-so-scary, movies to watch in October (or anytime the need arises), we're hoping every day can be a little bit spookier!"
        imageUrl={MovieDB}
        projectLink="https://little-site-of-horrors-1-f45120ac21d1.herokuapp.com"
        repoLink="https://github.com/ljkahn/littleSiteOfHorrors"
      />

      <Project
        title="Employee Directory"
        description="Employee Directory is a third-party API app to see your employees."
        imageUrl={Employee}
        projectLink="https://stevenrodriguezdev.github.io/EmployeeDirectory/"
        repoLink="https://github.com/StevenRodriguezDev/EmployeeDirectory"
      />
    </main>
  );
}
