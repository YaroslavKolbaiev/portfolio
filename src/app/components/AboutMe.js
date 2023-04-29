import Image from "next/image";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div class="columns">
      <div class="column is-one-third">
        <div className="image is-square">
          <Image
            style={{ objectFit: "cover" }}
            className="is-rounded"
            src="/assets/ava.jpg"
            alt="Picture of admin"
            width={720}
            height={720}
          />
        </div>
      </div>
      <div class="column">
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }} class="box">
          <h1 className="is-size-4 is-size-2-tablet has-text-white">
            About Me
          </h1>
          <p className="has-text-grey-light is-size-6 is-size-5-tablet">
            First and foremost, I love, and I enjoy writing code. Ever since my
            first time learning JavaScript, I fell in love with the feeling
            every time the compile ran successfully. Since then, it is always
            not enough with coding. For me, coding is technically a
            problem-solving skill that I have to get through the problems, solve
            it, and make it run. That's why I love it. When I had an exciting
            coding project, I can code for hours and hours without checking the
            time or checking on my social media until I finished the project.
          </p>
        </div>
        <div className="columns is-mobile">
          <div className="column">
            <h2 className="has-text-weight-semibold is-size-3-tablet is-size-4 mb-3">
              Contacts
            </h2>
            <p className="is-size-5-tablet is-size-6">+380999139994</p>
            <p className="is-size-5-tablet is-size-6">
              yaroslavkolbaiev@gmail.com
            </p>
            <a
              href="https://t.me/Rick_Kolbaiev"
              className="is-size-5-tablet is-size-6 is-underlined"
            >
              Telegram
            </a>
            <br />
            <a
              href="https://github.com/YaroslavKolbaiev"
              className="is-size-5-tablet is-size-6 is-underlined"
            >
              GitHub
            </a>
            <br />
            <a
              href="https://www.linkedin.com/in/rick-kolbaiev-616727233/"
              className="is-size-5-tablet is-size-6 is-underlined"
            >
              <strong>LinkedIn:</strong> Yaroslav Kolbaiev
            </a>
          </div>
          <div className="column">
            <a
              className="button is-responsive is-dark"
              href="/assets/cv.pdf"
              download
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
