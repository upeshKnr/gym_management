import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <header>
        <h1>
          <b>About Us</b>
        </h1>
      </header>

      <main>
        <section>
          <h2>Our Mission</h2>
          <p>
            Welcome to <strong>Your Gym Name</strong>, your premier fitness
            destination dedicated to helping you achieve your fitness goals and
            lead a healthier lifestyle. With state-of-the-art facilities, expert
            trainers, and a supportive community, we're committed to guiding you
            on your fitness journey every step of the way.
          </p>
        </section>

        <section>
          <h2>Why Choose Us?</h2>
          <h3>Expert Trainers</h3>
          <p>
            Our certified trainers are passionate about helping you succeed.
            With a wealth of knowledge and experience, they will design
            personalized workout plans tailored to your goals and fitness level.
          </p>
        </section>

        <section>
          <h2>Our Commitment</h2>
          <p>
            At <strong>Your Gym Name</strong>, we're committed to creating an
            environment that promotes health, happiness, and personal growth.
            Our team is here to help you break barriers, push boundaries, and
            achieve your fitness dreams.
          </p>
        </section>

        <section>
          <h2>Our Programs</h2>
          <p>
            Discover an array of fitness programs designed to cater to various
            interests and fitness levels. Whether you're a beginner or an
            experienced athlete, we offer classes that range from cardio and
            strength training to yoga and meditation.
          </p>
        </section>

        <section>
          <h2>Community Events</h2>
          <p>
            Join our active community not only in the gym but also beyond. We
            organize regular events, workshops, and challenges that encourage
            camaraderie, learning, and growth.
          </p>
        </section>

        <section>
          <h2>Membership Benefits</h2>
          <p>
            Becoming a member of <strong>Your Gym Name</strong> comes with a
            range of benefits, including access to all facilities, personalized
            training, nutrition guidance, and exclusive member-only offers.
          </p>
        </section>

        <section>
          <p>
            Ready to get started on your fitness journey? Visit us today and
            experience the <strong>Your Gym Name</strong> difference.
          </p>

          <p>
            <a href="/contact">Contact Us</a> |{" "}
            <a href="/membership">Membership Options</a>
          </p>
        </section>
      </main>
      {/* footer */}
      <p className="footer"> @copyright by The Vengeance pvt.ltd. </p>
    </div>
  );
};

export default AboutUs;
