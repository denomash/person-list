import React from "react";
import ReactDOM from "react-dom";
import './index.css'

const Person = ({ img, name, job, children }) => {
  return (
    <article className='person'>
      <img
        src={`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`}
        alt=""
      />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section className='person-list'>
      <Person img="35" name="John" job="developer" />
      <Person img="24" name="Bob" job="designer">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
      </Person>
      <Person img="60" name="David " job="the boss" />
    </section>
  );
};

ReactDOM.render(<PersonList />, document.getElementById("root"));
