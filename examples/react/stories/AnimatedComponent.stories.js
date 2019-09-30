import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import './AnimatedComponent.css';

export default {
  title: 'Animation',
};

const withAlternatingState = (WrappedComponent, interval = 1000) =>
  class AlternatingStateComponent extends Component {
    constructor(props) {
      super(props);
      this.state = { on: false };
    }

    componentDidMount() {
      const toggle = () =>
        this.setState(state => ({
          on: !state.on,
        }));
      setTimeout(toggle, 1);
      this.interval = setInterval(toggle, interval);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render = () => <WrappedComponent on={this.state.on} />;
  };

const CSSTransition = withAlternatingState(({ on }) => (
  <div
    className={`AnimatedComponent CSSTransition ${
      on ? 'CSSTransition-on' : ''
    }`}
  />
));

const CSSTransitionWillChange = withAlternatingState(({ on }) => (
  <div
    className={`AnimatedComponent CSSTransition CSSTransitionWillChange ${
      on ? 'CSSTransition-on' : ''
    }`}
  />
));

const ReactMotion = withAlternatingState(({ on }) => (
  <Motion defaultStyle={{ rotate: 45 }} style={{ rotate: spring(on ? 0 : 45) }}>
    {value => (
      <div
        className="AnimatedComponent"
        style={{ transform: `rotate(${value.rotate}deg)` }}
      />
    )}
  </Motion>
));

export const CSSTransitionStory = () => <CSSTransition />;
CSSTransitionStory.story = {
  name: 'with CSS transition',
};

export const CSSTransitionWillChangeStory = () => <CSSTransitionWillChange />;
CSSTransitionWillChangeStory.story = {
  name: 'with CSS transition with will-change property',
};

export const CSSAnimation = () => (
  <div className="AnimatedComponent CSSAnimation" />
);
CSSAnimation.story = {
  name: 'with CSS animation',
};

export const CSSAnimationPseudoElement = () => (
  <div className="AnimatedComponent AnimatedPseudoElement" />
);
CSSAnimationPseudoElement.story = {
  name: 'with CSS animation on pseudo element',
};

export const ReactMotionStory = () => <ReactMotion />;
ReactMotionStory.story = {
  name: 'with react-motion',
};
