class App extends React.Component {
  state = {
    mems: [
      {
        id: 1,
        title: "Mem 1",
        upvotes: 0,
        downvotes: 0,
      },
      {
        id: 2,
        title: "Mem 2",
        upvotes: 0,
        downvotes: 0,
      },
      {
        id: 3,
        title: "Mem 3",
        upvotes: 0,
        downvotes: 0,
      },
      {
        id: 4,
        title: "Mem 4",
        upvotes: 0,
        downvotes: 0,
      },
      {
        id: 5,
        title: "Mem 5",
        upvotes: 0,
        downvotes: 0,
      },
    ],
  };

  handleChangeUpvotes = (id) => {
    const mems = this.state.mems.map((mem) => {
      if (id === mem.id) {
        mem.upvotes = mem.upvotes + 1;
      }
      return mem;
    });
    this.setState({
      mems,
    });
  };

  handleChangeDownvotes = (id) => {
    const mems = this.state.mems.map((mem) => {
      if (id === mem.id) {
        mem.downvotes = mem.downvotes + 1;
      }
      return mem;
    });
    this.setState({
      mems,
    });
  };

  render() {
    return (
      <React.Fragment>
        <ListMems
          mems={this.state.mems}
          changeUpvotes={this.handleChangeUpvotes}
          changeDownvotes={this.handleChangeDownvotes}
        />
      </React.Fragment>
    );
  }
}
