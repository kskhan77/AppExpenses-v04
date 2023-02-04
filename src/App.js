import "bootstrap/dist/css/bootstrap.css";
import Expenses from "./Expenses/Expenses";
const App = () => {
  const expenses = [
    {
      title: "insurance Expense",
      amount: 564,
      date: new Date(2022, 4, 3)
    },
    {
      title: "Medical bills ",
      amount: 43,
      date: new Date(2022, 5, 23)
    },
    {
      title: "school Fee and boosk",
      amount: 4355,
      date: new Date(2022, 9, 13)
    }
  ];

  return (
    <div>
      <div className="navbar navbar-dark bg-primary h1 m-2 p-2 rounded-2 shadow ">
        let Get Started!
      </div>
      <div>
        <Expenses items={expenses} />
      </div>
    </div>
  );
};

export default App;
