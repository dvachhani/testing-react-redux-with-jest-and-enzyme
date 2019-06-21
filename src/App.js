import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/index';

import Header from './components/header/Header';
import Headline from './components/headline/Headline';
import Button from './components/button/Button';
import ListItem from './components/listItem/ListItem';

import './app.scss';

const tempArr = [
  {
    fName: 'John',
    lName: 'Doe',
    email: 'johndoe@gmail.com',
    age: 24,
    onlineStatus: true
  }
];

class App extends Component {
  fetch = () => {
    this.props.fetchPosts();
  };

  render() {
    const { posts } = this.props;

    const configButton = {
      buttonText: 'Get Posts',
      emitEvent: this.fetch
    };

    return (
      <div>
        <Header />
        <section className="main">
          <Headline
            headline="Posts"
            desc="Click the button to render posts!"
            tempArr={tempArr}
          />
          <Button {...configButton} />
          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  description: body
                };
                return <ListItem key={index} {...configListItem} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.postsReducer
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(App);
