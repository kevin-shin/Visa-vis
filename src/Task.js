class Task extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null,
      };
    }
  
    render() {
      return (
        <div>
            <input type="date"></input>
            <input type="checkbox"
                    onclick='changeCompleted(this);'>
            </input>
            <div className = "taskDescription">
                {this.props.description_tab}
            </div>
        </div>
      );
    }
  }