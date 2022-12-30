import React from 'react';
import './Home.css';

export const Home = () => {
  return (
    <div className="main-content">
      <h2>
        Welcome
      </h2>
      <p>
        My name's Cole.
      </p>
      <p>
        I'm a political campaign strategist turned elementary teacher turned software engineer.
      </p>
      <p>
        Please browse this site to learn more about me, my skills, and my work history. If you have any 
        questions, feel free to email me at <i>coleaniblett@gmail.com</i> or call me at <i>408-603-6257</i>.
      </p>
      <h2>
        My biography
      </h2>
      <img className="headshot" alt="headshot" src="https://cdn.glitch.me/c4c67da8-3df9-4a26-8adc-ee8973edaa41%2F1633501655894.jpg?v=1638766361717"/>
      <p>
        I was born and raised in San Jose, CA, and after graduating high school went on to attend San Jose 
        State University, where I studied political science. During my college years I became active in 
        student governance as well as an involved member of several local political campaigns, and 
        in my junior year I was named the inaugural recipient of the <i>Peter Szego</i> scholarship.
      </p>
      <p>
        After working several campaign cycles, I became a teacher at a San Jose K-8 school, teaching 
        subjects including math, logic, literature, history, science, and grammar. Helping my students to 
        grow and expand their knowledge was an incredible joy, but it also made me realize my own desire 
        to grow and develop new skills, so I began taking courses in programming and computer science at 
        De Anza College in my spare time. It was through these courses that I discovered my love for the 
        experience of problem-solving and invention inherent to coding.
      </p>
      <p>
        Today, when I'm not studying programming, I enjoy cycling, lifting weights, and exploring ideas 
        related to philosophy, spirituality, and futurism.
      </p>
      <h2>
        My professional values
      </h2>
      <p>
        <i>Teamwork</i> - I learned the value of leveraging diverse professional teams firsthand in 
        my work on local political campaigns, and as a teacher by partnering with parents to ensure 
        student success.
      </p>
      <p>
        <i>Communication</i> - Whether advocating for a candidate to the public or explaining high-
        level concepts to students, I've learned the critical steps to both express ideas and listen 
        effectively to others.
      </p>
      <p>
        <i>Commitment</i> - I've always found enormous fulfillment in my work and my ability to create 
        tangible outcomes; helping my past clients achieve victory at the ballot box and contributing 
        to my campus being named a Blue Ribbon School in the midst of a pandemic are accomplishments 
        that I look back on with pride.
      </p>      
    </div>  
  );
}