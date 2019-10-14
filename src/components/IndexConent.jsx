import React from 'react';
import styles from '../static/css/indexcontent.module.css';
import CardContent from './CardContent';
import story from '../static/images/story.svg';
import career from '../static/images/career.svg';
import skill from '../static/images/skill.svg';
import chebii from '../static/images/chebii.jpg';
import kate from '../static/images/kate.jpg';
import dorina from '../static/images/dorina.png';
import terer from '../static/images/terer.png';
import elliot from '../static/images/elliot.png';
import cynthia from '../static/images/cynthia.jpg';
import caren from '../static/images/caren.png';
import maria from '../static/images/maria.jpg';

function IndexConent() {
  return (
    <main>
      <div className={styles.content_heading}>
        <div className={`${styles.centered} ${styles.content_head}`}>
          Our Vision
        </div>
        <section className={styles.centered}>
          To create sustainable, economically, and socially empowered society
          that brings up healthy generations
        </section>
      </div>
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
            icon={cynthia}
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
      </section>
      <section>
        <h2>Mentors</h2>
        <div className={styles.mentor_container}>
          <CardContent
            icon={kate}
            just="left"
            round
            name="Kate Kiama"
            description="Kate is a born feminist who is passionate
          about law and addressing social injustices
          that affect women and adolescent girls
          globally. She holds a bachelor of law from
          university of London and is an advocate for
          the high court of Kenya. She previously
          worked as a lawyer and program associate
          at Aids Law project and undertook her
          articles at Tripleoklaw Advocates LLP."
          />
          <CardContent
            icon={dorina}
            just="left"
            round
            name="Dorina Akwanyi Libuli"
            description="Dorina is a gospel minister and pastor. She
          is a professional councilor from Eldoret, a
          part time Lecturer at KMTC and a
          radiographer doing sonography at Moi
          Teaching and Referral hospital in Eldoret.
          She manages diverse groups of people
          from different backgrounds, genders, age
          groups and loves visiting the sick"
          />
          <CardContent
            icon={caren}
            just="left"
            round
            name="Caren Odhiambo"
            description="Caren is a graduate from Moi University
            with a degree in counselling Psychology.
            She has worked in a prison as a
            counselling psychologist and is very
            passionate about helping individuals
            discover their true self"
          />
          <CardContent
            icon={maria}
            just="left"
            round
            name="Maria Omulubi"
            description="Maria is an international relations and
            development enthusiast who lives in Kenya
            with her family. She is passionate about
            engaging youth in agriculture and building
            greater diversity and inclusion in social
            enterprises. She currently works with
            One Acre Fund as a lead for the People
            Division"
          />
          <CardContent
            icon={terer}
            just="left"
            round
            name="Emmanuel Terer"
            description="Emmanuel is a journalist and motivational
          speaker who despite his challenging
          background has defied the odds to
          become successful. He is passionately
          curious about media, youths and currently
          works for Citizen TV as a news reporter."
          />
          <CardContent
            icon={elliot}
            just="left"
            round
            name="Elliot Berry"
            description="Elliot Berry is the founder of the Noah
            Initiative, an organization that has
            dedicate its work in youth development,
            community activism and community
            empowerment. He is originally from West
            England but now resides in Kenya. He is
            passionate about youth and gender
            equality."
          />
        </div>
      </section>
      <aside>
        <h2>Gallery</h2>
      </aside>
    </main>
  );
}

export default IndexConent;
