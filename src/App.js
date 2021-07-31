import ReactMarkdown from "react-markdown";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input:
        "# Welcome to my React Markdown Previewer! \n## This is a sub-heading...",
      isOpen: true,
      isOpen2: true,
      heighteditor: 200 + "px",
      heightpreviewer: 600 + "px",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  render() {
    const gfm = require("remark-gfm");
    let isOpen = this.state.isOpen;
    let isOpen2 = this.state.isOpen2;
    return (
      <div>
        {isOpen && (
          <div className="container">
            <span className="spaneditor">
              <h4 className="titleeditor">Editor</h4>

              <button
                className="buttontextarea"
                onClick={() =>
                  this.setState({
                    isOpen2: !isOpen2,
                    heighteditor: isOpen2 ? "800px" : "200px",
                  })
                }
              >
                {isOpen ? "Resize" : "Resize"}
              </button>
            </span>
            <textarea
              value={this.state.input}
              onChange={this.handleChange}
              className="editorarea"
              type="text"
              style={{ height: this.state.heighteditor }}
            ></textarea>
          </div>
        )}
        {isOpen2 && (
          <div>
            <span className="spanpreviewer">
              <h4 className="titlepreviewer">Previewer</h4>
              <button
                className="buttontextarea"
                onClick={() =>
                  this.setState({
                    isOpen: !isOpen,
                    heightpreviewer: isOpen ? "800px" : "600px",
                  })
                }
              >
                {isOpen2 ? "Resize" : "Resize"}
              </button>
            </span>
            <div
              className="testing"
              style={{ height: this.state.heightpreviewer }}
            >
              <ReactMarkdown
                remarkPlugins={[gfm]}
                children={this.state.input}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
