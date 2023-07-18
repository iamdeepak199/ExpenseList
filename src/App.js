import ExpenseItem from "./ExpenseItem.js";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Shoping",
      amount: 2504.2,
      date: new Date(2018, 8, 16)
    },
    {
      id: "e2",
      title: "Bike Oil",
      amount: 2500.1,
      date: new Date(2020, 5, 16)
    },
    {
      id: "e3",
      title: "News Paper",
      amount: 2500.2,
      date: new Date(2022, 10, 7)
    },
    {
      id: "e4",
      title: "Travel Expenses",
      amount: 250.01,
      date: new Date(2020, 4, 27)
    },
    {
      id: "e5",
      title: "Car Insurense",
      amount: 2846.3,
      date: new Date(2019, 2, 26)
    },
    {
      id: "e6",
      title: "Washing Machine",
      amount: 7500.5,
      date: new Date(2023, 5, 1)
    }
  ];
  return (
    <div>
      <h1>Expense List</h1>
      <h2>Last 3 years!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[4].title}
        amount={expenses[4].amount}
        date={expenses[4].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[5].title}
        amount={expenses[5].amount}
        date={expenses[5].date}
      ></ExpenseItem>
    </div>
  );
}
export default App;
