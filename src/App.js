import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/Form";
import Table from "./Components/Table";
import moment, { months } from "moment";
import "moment-precise-range-plugin";

function App() {
  let startDate = moment("2024-04-01");
  let endDate = moment("2024-06-01")
  // let diff=moment.preciseDiff(startDate,endDate,true)
  // console.log("the diff",diff)
  // let dates = [];
  // endDate.subtract(1, "month"); //Substract one month to exclude endDate itself

  // let month = moment(startDate); //clone the startDate
  // while (month < endDate) {
  //   month.add(1, "month");
  //   dates.push(month.format("YYYY-MM-DD"));
  // }

  // console.log(dates);
  // const difffmonth =endDate.diff(startDate,"month")
  // console.log(difffmonth);
  // const startyear=startDate.year()
  
  // const remmonths=12-startDate.month()+difffmonth
  // console.log("ffffffffff",remmonths);
  // function deltaDate(input, days, months, years) {
  //   return new Date(
  //     input.getFullYear() + years,
  //     input.getMonth() + months,
  //     Math.min(
  //       input.getDate() + days,
  //       new Date(
  //         input.getFullYear() + years,
  //         input.getMonth() + months + 1,
  //         0
  //       ).getDate()
  //     )
  //   );
  // }
  // console.log(deltaDate(new Date(), 0, -1, 0));

  // const now = moment();

  // now.subtract(7, "seconds"); // 7 seconds ago
  // now.subtract(7, "days"); // 7 days and 7 seconds ago
  // now.subtract(7, "months"); // 7 months, 7 days and 7 seconds ago
  // now.subtract(7, "years"); // 7 years, 7 months, 7 days and 7 seconds ago
  // // because `now` has been mutated, it no longer represents the current time
  // console.log(now);

  return (
    <div className="App">
      <Form />
      {/* <Table/> */}
    </div>
  );
}

export default App;
