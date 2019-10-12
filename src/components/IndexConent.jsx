import React from 'react';
import styles from '../static/css/indexcontent.module.css';
import CardContent from './CardContent';
import story from '../static/images/story.svg';
import career from '../static/images/career.svg';
import skill from '../static/images/skill.svg';
import chebii from '../static/images/chebii.jpg';

function IndexConent() {
  return (
    <main>
      <div className={`${styles.centered} ${styles.content_head}`}>
        Our Vision
      </div>
      <section className={styles.centered}>
        To create sustainable, economically, and socially empowered society that
        brings up healthy generations
      </section>
      <section>
        <h2>Our Work</h2>
        <div className={styles.card_container}>
          <CardContent
            icon={story}
            just="left"
            title="Storytelling"
            description="An experiential program that 
            hopes to build the confidence, tenacity
          and self-esteem of women and girls who join 
          our organization. Our
          organization believes in the power of stories 
          and as such we help our
          girls discover who they are by connecting to 
          their experiences."
          />
          <CardContent
            icon={career}
            just="right"
            title="Career Development"
            description="This is an intensive career development program that targets our high
            school changemakers. With the help of our mentors, the program
            curates special opportunities for girls to learn and explore different
            career paths. We are keen to provide the girls with all the information
            they need to successfully venture into their dream career."
          />
          <CardContent
            icon={skill}
            just="left"
            title="Skill Development"
            description="How do we empower girls to be economically independent? This
            program tackles complex questions like this and equips girls with both
            hard and soft skills they need to survive. In this program we explore
            entrepreneurship, human rights, sexual reproductive health and other
            relevant skills like goal-setting and financial management."
          />
        </div>
      </section>
      <section>
        <h2>Team</h2>
        <div className={styles.team_container}>
          <CardContent
            icon={chebii}
            just="left"
            round
            name="Cynthia Muhonja"
            title="Founder & Executive Director"
            description="shapes and approves the
            organization’s strategies, reviews
            results, and sets the overall
            direction of the organization."
          />
          <CardContent
            icon={chebii}
            just="left"
            round
            name="Jeptanui Chebii"
            title="Programs Director"
            description="shapes and approves the
            organization’s strategies, reviews
            results, and sets the overall
            direction of the organization."
          />
        </div>
        <CardContent />
      </section>
      <section>
        <h2>Our Team</h2>
        <CardContent />
      </section>
      <section>
        <h2>Mentors</h2>
        <CardContent />
      </section>
      <aside>
        <h2>Gallery</h2>
        <CardContent />
      </aside>
    </main>
  );
}

export default IndexConent;
