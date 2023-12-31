import React, { useEffect, useState } from "react";

class CountDown extends React.Component {
  state = {
    count: 60,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count && this.state.count <= 0) {
      if (this.timer) {
        clearInterval(this.timer);
        this.props.onTimesup();
      }
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count - 1,
      });
    }, 1000);
  }
  render() {
    return (
      <>
        <div>{this.state.count} - Class</div>
      </>
    );
  }
}

const NewCountDown = (props) => {
  const [count, setCount] = useState(60);
  useEffect(() => {
    if (count === 0) {
      props.onTimesup();
      return;
    }
    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);
  return (
    <>
      <div>{count} - Hooks</div>
    </>
  );
};

export { CountDown, NewCountDown };
