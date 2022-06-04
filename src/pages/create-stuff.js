// Import React Hook
import React, { useState } from "react";
// Import Axios for Fetching
import axios from "axios";
// Import Date Pciker fot choose the date
import DatePicker from "react-datepicker";
// Import the css of Date Picker
import "react-datepicker/dist/react-datepicker.css";
// Import Styled Component
import styled from "styled-components";
// Import Router
import Router from "next/router";

// Declare Function Component
export default function Form() {
  // Declare Variable use useState Hook
  const [username, setUsername] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState(new Date());
  const [date, setDate] = useState(new Date());

  // Declare Function For Submit
  const onSubmit = (e) => {
    // Prevent Default is for stay on the page
    e.preventDefault();
    // We create object that contain value from useState to send via api
    const stuff = {
      username: username,
      price: price,
      duration: duration,
      date: date,
    };
    console.log(stuff);
    axios
      // Send the stuff data with GET method
      .post("https://toko-nightlogin-be.herokuapp.com/stuff/add", stuff)
      // the action inside then is running When The process is success
      // Router push is used for change the route
      .then(Router.push("/"))
      // the action inside catch is running When The process is unsucces
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AddStuff>
      <div className="add-content">
        <h3>Tambah Barang</h3>
        {/* We Have Handle Event onChane to track the change of our input and assign it to useState */}
        <form>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="messafeSender_input"
            placeholder={`Nama Barang`}
          ></input>

          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="messafeSender_input"
            placeholder={`Harga`}
          ></input>
          <div className="date-section">
            <div className="date-container">
              <h6>Tanggal Kadaluarsa:</h6>
              <DatePicker
                selected={duration}
                onChange={(date) => setDuration(date)}
              />
            </div>
            <div className="date-container">
              <h6>Tanggal Masuk:</h6>
              <DatePicker selected={date} onChange={(date) => setDate(date)} />
            </div>
          </div>
          {/* Handle onSubmit to submit */}
          <button onClick={onSubmit} type="submit">
            submit
          </button>
        </form>
      </div>
    </AddStuff>
  );
}

const AddStuff = styled.div`
  min-height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  .add-content {
    background-color: white;
    width: 40%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: black solid 1px;
    box-shadow: 3px 0px 25px 10px rgba(0, 0, 0, 0.025);
    overflow: hidden;
    padding: 2rem 2rem;

    form {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    form > input {
      width: 100%;
      margin-bottom: 1rem;
      padding: 1rem;
      border-bottom: solid var(--light-gray) 1px;
    }

    .date-section {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin: 1rem 0;
      padding: 0 1rem 1rem 1rem;
    }

    .date-container {
      display: flex;
      justify-content: center;
      align-items: center;
      input {
        cursor: pointer;
      }
    }
    form > button {
      width: 95%;
      height: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: black;
      border: black solid 1px;
      cursor: pointer;
      color: white;
      &:hover {
        color: white;
        background-color: var(--dark-green);
      }
    }
  }
`;
