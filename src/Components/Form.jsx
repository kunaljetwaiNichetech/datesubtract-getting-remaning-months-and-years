import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment, { preciseDiff } from "moment";
import "react-datepicker/dist/react-datepicker.css";
import Table from "./Table";
function Form() {
  const [formdata, setformdata] = useState({
    name: "",
    phone: "",
    address: "",
    startdate: "",
    cheackS: "",
    enddate: "",
    cheackE: "",
  });
  let [listofusers, Setlistofusers] = useState([]);
  const [error, seterror] = useState({
    sdate: "",
    edate: "",
    PNumberOnly: "",
  });
  const handelchangename = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  const handelchangePhone = (e) => {
    const { name, value } = e.target;
    let reg = /^[0-9]*$/;
    if (reg.test(value)) {
      setformdata({ ...formdata, [name]: value });
      seterror({ ...error, ["PNumberOnly"]: "" });
    } else {
      seterror({ ...error, ["PNumberOnly"]: "only number are allowed" });
    }
  };

  const handelchangeAddress = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  // const handelchangeStartdate = (e) => {
  //   const { name, value } = e.target;
  //   setformdata({ ...formdata, [name]: value });
  // };

  // const handelchangeEnddate = (e) => {
  //   const { name, value } = e.target;
  //   setformdata({ ...formdata, [name]: value });
  // };

  ////////////////////////////////////
  let [startd, setstartd] = useState();
  let [endd, setendd] = useState();

  const handelchangeStartdate = (e) => {
    console.log("this si eee", e);
    let d = moment(e).format("MM/DD/YYYY");
    if (e == endd) {
      setstartd(e.date);
      setformdata({ ...formdata, ["startdate"]: d });
      // setformdata({ ...formdata, ["cheackS"]: e });
    }
    if (e > endd) {
      seterror([{ ...error, ["sdate"]: "the date is greater then end date" }]);
    } else {
      seterror({ ...error, ["sdate"]: "" });
      setstartd(e.date);
      setformdata({ ...formdata, ["startdate"]: d });
      console.log("iiii");
      // setformdata({ ...formdata, ["cheackS"]: e });
    }
    // setstartd(d)
  };

  const handelchangeEnddate = (e) => {
    let d = moment(e).format("MM/DD/YYYY");
    if (e == startd) {
      setendd(e.date);
      setformdata({ ...formdata, ["enddate"]: d });
      console.log("hii");
      // setformdata({ ...formdata, ["cheackE"]: e });
    }
    if (e < startd) {
      seterror({
        ...error,
        ["edate"]: "the end date is lesser then start date",
      });
    } else {
      seterror({ ...error, ["edate"]: "" });
      setendd(e.date);
      setformdata({ ...formdata, ["enddate"]: d });
      // setformdata({ ...formdata, ["cheackE"]: e });
    }
  };
  ////////////////end of date change////////////////
  ///////////////
  const dateMonthsSubtract = () => {
    let Years7Date = moment().subtract(7, "years");
    let cureewntdate = moment();
    console.log(Years7Date.format("MM/DD/YYYY"));
    console.log(cureewntdate.format("MM/DD/YYYY"));
    let s = moment(formdata.startdate);
    let e = moment(formdata.enddate);
    console.log(s);
    console.log(e);
    let totalyeaarsFromStartToEnd = preciseDiff(Years7Date, cureewntdate, true); //7
    console.log(totalyeaarsFromStartToEnd);
    // debugger;
    let totalmonthsToMinus = preciseDiff(s, e, true); //2 months selected
    console.log(totalmonthsToMinus);
    let remaningMonthsandyears = moment().subtract(totalmonthsToMinus);
    // console.log(remaningMonthsandyears);
    let rrrr = preciseDiff(Years7Date, remaningMonthsandyears, true);
    console.log(rrrr);

    return rrrr;

    // let sy=moment(s).startOf('year').format("MM/DD/YYYY")
    // let ey=moment(e).endOf('year').format("MM/DD/YYYY")
    // let fy = moment().year(s).format("MM/DD/yyyy");
    // let setotaldiff=preciseDiff(s,e,true)
    // // debugger
    // let rem=preciseDiff(Years7Date._d,s,true)
    // let rems=preciseDiff(Years7Date._d,e,true)
    // console.log("remaninhgfdhgjshgjfshdyhjfsdghjds", rem);
    // console.log("remaninhgfdhgjshgjfshdyhjfsdghjds", rems);
    // // let yyyyy=preciseDiff(sy,ey,true)
    // console.log("syyyyyy",sy);
    // console.log("eyyyyyy",ey);
    // // console.log("yyyyyy",yyyyy);
    // let befm=preciseDiff(sy,s,true)
    // let aefm=preciseDiff(ey,e,true)
    // console.log(befm);
    // console.log("ssss",aefm);
    // console.log(befm.years+aefm.years);
    // console.log(befm.months+aefm.months);
    // console.log(befm.days+aefm.days);
  };

  ////////////////////////
  const handelsubmit = () => {
    console.log(cheachRange());
    if (cheachRange()==true){

    Setlistofusers([...listofusers, formdata]);
    }else{
      alert("selected date should be within last 7 years only")
    }
    console.log("this is list of users", listofusers);
    // setformdata({
    //   name: "",
    //   phone: "",
    //   address: "",
    //   startdate: "",
    //   cheackS: "",
    //   enddate: "",
    //   cheackE: "",
    // });
  };

  /////////////////cheacking dates working//////////

  let syear = moment().subtract(7, "year");
  let startyear = syear.format("MM/DD/YYYY");

  //  console.log("startYear --", moment(syear._d).format("DD/MM/YYYY"));
  let eyear = moment();
  let endyear = eyear.format("MM/DD/YYYY");
  //  console.log("endYear --", moment(eyear._d).format("DD/MM/YYYY"));

  const cheachRange = () => {
    if (formdata.startdate && formdata.enddate) {
      console.log(formdata.startdate);
      console.log(formdata.enddate);
      console.log(startyear)
      console.log(moment(formdata.startdate).isAfter(startyear));
      if (moment(formdata.startdate).isAfter(startyear)&&moment(formdata.enddate).isBefore(endyear)){
        return true
      }else{
        return false
      }
      // if (
      //   formdata.startdate >= startyear &&
      //   formdata.startdate <= endyear &&
      //   formdata.enddate >= startyear &&
      //   formdata.enddate <= endyear
      // ) {
      //   console.log("yes");
      //   return true;
      // } else {
      //   console.log("no");
      //   return false;
      // }
    
    }
  };

  // cheachRange();

  // function Last7years() {
  //   const today = new Date();

  //   let year = today.getFullYear();
  //   let monthIndex = today.getMonth();

  //   let dates = [];

  //   while (dates.length < 84) {
  //     dates.push(`${monthIndex + 1}/${year}`);

  //     // increment the month, and if we're past December,
  //     // we need to set the year forward and the month back
  //     // to January
  //     if (++monthIndex > 11) {
  //       monthIndex = 0;
  //       year--;
  //     }
  //   }

  //   return dates;
  // }
  // let last7yearr = Last7years();
  // console.log(Last7years());


  return (
    <div>
      {startd}
      {endd}
      <div>
        <label>Name:</label>
        <input
          type="text"
          onChange={handelchangename}
          value={formdata.name}
          name="name"
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          name="phone"
          type="text"
          onChange={handelchangePhone}
          value={formdata.phone}
        />
        <br></br>
        {error && <span style={{ color: "red" }}>{error.PNumberOnly}</span>}
      </div>

      <div>
        <label>Address:</label>
        <input
          name="address"
          type="text"
          onChange={handelchangeAddress}
          value={formdata.address}
        />
      </div>
      <div>
        <label>Start date</label>
        <br />
        {/* <input
                      type="text"
                      value={val.startdate}
                      onChange={(e) => handelstartdaechange(e, i)}
                      placeholder="dd/mm/yyyy"
                    /> */}
        <DatePicker
          selected={formdata.startdate}
          placeholderText="MM/DD/YYYY"
          maxDate={formdata.enddate ? formdata.enddate : new Date()}
          onChange={(e) => handelchangeStartdate(e)}
          showYearDropdown
          yearDropdownItemNumber={7}
          scrollableYearDropdown
        />
        <br />
        {error && <span style={{ color: "red" }}>{error.sdate}</span>}
      </div>
      <div>
        <label>End date</label>
        <br />
        {/* <input
                      type="text"
                      onChange={(e) => {
                        handelenddaechange(e, i);
                      }}
                      value={val.enddate}
                      placeholder="dd/mm/yyyy"
                    /> */}
        <DatePicker
          selected={formdata.enddate}
          //   onSelect={val.enddate}
          onChange={(e) => handelchangeEnddate(e)}
          placeholderText="MM/DD/YYYY"
          maxDate={formdata.enddate ? formdata.enddate : new Date()}
          // startDate={val.startdate}
          // endDate={new Date()}
          minDate={formdata.startdate}
          showYearDropdown
          yearDropdownItemNumber={7}
          scrollableYearDropdown
          showDisabledMonthNavigation
        />
        <br />
        {error && <span style={{ color: "red" }}>{error.edate}</span>}
      </div>
      <div>
        <button type="submit" onClick={handelsubmit}>
          Add
        </button>
      </div>

      <table border={2}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Startdate</th>
            <th>Enddate</th>
            <th>Remaning months/year</th>
          </tr>
        </thead>
        {listofusers &&
          listofusers.map((item, i) => (
            <tbody>
              <tr>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>{item.startdate}</td>
                <td>{item.enddate}</td>
                <td>{` ${dateMonthsSubtract().months} months ${
                  dateMonthsSubtract().years
                } years`}</td>
                {/* <td>{dateMonthsSubtract().years}</td>
              <td>{dateMonthsSubtract().months}</td> */}
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
}

export default Form;
