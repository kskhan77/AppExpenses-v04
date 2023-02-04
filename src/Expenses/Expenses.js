import ExpItems from "./ExpItems";

const Expenses = (props) => {
  return (
    <div>
      <ExpItems
        title={props.items[0].title}
        date={props.items[0].date}
        amount={props.items[0].amount}
      />
      <ExpItems
        title={props.items[1].title}
        date={props.items[1].date}
        amount={props.items[1].amount}
      />
      <ExpItems
        title={props.items[2].title}
        date={props.items[2].date}
        amount={props.items[2].amount}
      />
    </div>
  );
};

export default Expenses;
