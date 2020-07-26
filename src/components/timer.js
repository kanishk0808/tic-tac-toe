import React from "react";

export class Timer extends React.Component {
    state = {
        timeLeft: 5
    }
    componentDidMount() {
        this.timer = setInterval(() => this.setState({ timeLeft: this.state.timeLeft - 1 }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        if (this.state.timeLeft === 0) {
            this.props.setDefaultWinner(true);
            this.props.setViewTimer(false);
        }
        return <p>{`Timer started: ${this.state.timeLeft}`}</p>
    }
}
