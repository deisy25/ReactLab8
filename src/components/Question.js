import React from "react";
import axios from "axios";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        category: null,
        question: null,
        answer: null,
        revealed: false
    };
  }

  componentDidMount() {
    axios({
      url: "https://opentdb.com/api.php?amount=1&type=boolean",
      method: "GET"
    }).then((res) => {
      this.setState({
        category: res.data.results[0].category,
        question: res.data.results[0].question,
        answer: res.data.results[0].correct_answer
      });
    });
  }

  handleClick(){
    this.setState({revealed:true});
  }

  render() {
    const question = this.state;

    return (
      <div className="container">
        <div>
          {question.category}
        </div>

        <h3>
          {question.question}
        </h3>

        <div className="answer" style={{display: this.state.revealed ? 'block' : 'none' }}>
          {question.answer}
        </div>

        <button type="button" onClick={() => this.handleClick()}> Reveal Answer </button>
      </div>
    )    
  }
}
export default Question;