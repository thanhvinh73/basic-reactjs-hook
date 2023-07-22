import React, { useEffect, useState } from "react";

class CountDown extends React.Component {
  state = {
    count: 5,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count && this.state.count <= 0) {
      if (this.timer) {
        clearInterval(this.timer);
        this.props.onTimesup();
      }
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
        {console.log("render from class")}
        <div>{this.state.count} - Class</div>
      </>
    );
  }
}

const NewCountDown = (props) => {
  const [count, setCount] = useState(5);
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
      {console.log("render from hooks")}
      <div>{count} - Hooks</div>
    </>
  );
};

export { CountDown, NewCountDown };
