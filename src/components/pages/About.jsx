import profileImg from '../../assets/image.png'

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img className="developer-photo"src={profileImg} alt="developer-photo"></img>
      <p className="col-md-9 p-3">
      Raised in Washington State and now residing in Utah, I am an aspiring software developer currently enrolled in a Full Stack Development course. I’m mastering a wide range of programming languages and technologies, including HTML, CSS, JavaScript, Node.js, SQL, MongoDB, and React among others. My background includes extensive professional experience in sales operations, customer service, and office management. In addition to my technical training, I hold an Associate of Business degree, which has provided me with strong organizational and problem-solving skills that I bring into every project. I'm passionate about merging my business expertise with my growing technical skills to create innovative solutions and efficient systems.
      </p>
    </div>
  );
}
