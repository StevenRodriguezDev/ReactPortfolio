/* eslint-disable react/no-unescaped-entities */
import '/src/App.css';
import profileImg from '/src/assets/images/aboutprofile.jpg'

export default function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <img
        src={profileImg}
        alt="profile picture"
        className="profile"
      />
      <div className="ptag">
        <p>
          I'm an aspiring web designer who has become very passionate about the
          web. I've been a construction worker for many years and I also enjoy
          Audio Engineering. I am a life-long learner who's always intersted in
          expanding my skills and knowlege.
        </p>
      </div>
    </div>
  );
}
