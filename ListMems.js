const ListMems = (props) => {
  const mems = props.mems.map((mem) => (
    <Mem
      key={mem.id}
      id={mem.id}
      title={mem.title}
      upvotes={mem.upvotes}
      downvotes={mem.downvotes}
      changeUpvotes={props.changeUpvotes}
      changeDownvotes={props.changeDownvotes}
    />
  ));
  return (
    <div className="list">
      <h1>Lista memów</h1>
      <ul>{mems}</ul>
    </div>
  );
};
