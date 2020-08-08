import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>About me</h1>
    <p>
      The thing I love about software engineering is that it allows me to be
      creative, solve puzzles, articulate vision, and build reality's.
    </p>

    <p>
      There is a thrill in seeing things 'become' and a reward for pushing
      through discomfort to gain understanding. I work with people to help their
      vision become a reality and I am constantly learning and pushing myself to
      grow.
    </p>
    <h2>Keep Growing! Keep Learning!</h2>
    <br />

    <Link to="/">&larr; back home </Link>
  </Layout>
);
