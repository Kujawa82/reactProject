const Mem = (props) => (
  <li>
    {props.title}
    <button onClick={() => props.changeUpvotes(props.id)}>Łapka w górę</button>
    {props.upvotes}
    <button onClick={() => props.changeDownvotes(props.id)}>Łapka w dół</button>
    {props.downvotes}
    SUMA {props.upvotes - props.downvotes}
  </li>
);
