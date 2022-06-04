// Import React and Hooks
import React, { useState, useEffect } from "react";
// Import Link for Routing
import Link from "next/link";
// Import Axios for Fetching API
import axios from "axios";
// Import Stled Component
import styled from "styled-components";

// We Create The Stuff Component that will be called in stufList Fucntion Component
// We set the parameter to props, so we can get the props
const Stuff = (props) => (
  // The props.stuff return an object
  <tr>
    {/* So We must access it through the name of the object */}
    <td>{props.stuff.username}</td>
    <td>{props.stuff.price}</td>
    <td>{props.stuff.duration.substring(0, 10)}</td>
    <td>{props.stuff.date.substring(0, 10)}</td>
    <td>
      {/* The link that we acces */}
      <Link className="edit" href={`/edit-stuff/${props.stuff._id}`}>
        edit
      </Link>
      |{" "}
      <a
        href="#"
        className="delete"
        onClick={() => {
          const result = window.confirm("Hapus barang dari daftar?");
          if (result) {
            props.deleteStuff(props.stuff._id);
          }
        }}
      >
        hapus
      </a>
    </td>
  </tr>
);

export default function Home(props) {
  const [stuffs, setStuffs] = useState([]);

  // When the page render, this section will fetching API use GET Method for getting the data
  useEffect(() => {
    axios
      // Fetchin API Process Start
      .get("https://toko-nightlogin-be.herokuapp.com/stuff/")
      // the action inside then is running When The process is success
      .then((response) => {
        setStuffs(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // the action inside catch is running When The process is unsucces
  }, []);

  // This function is used for delete stuff in database depend on the id
  const deleteStuff = (id) => {
    axios
      // Fetchin API Process Start
      // the action inside then is running When The process is success
      .delete("https://toko-nightlogin-be.herokuapp.com/stuff/" + id)
      .then((response) => {
        console.log(response.data);
      })
      // the action inside catch is running When The process is success
      .catch((error) => {
        alert("delete failed");
        console.log(error);
      });
    // Change the stuff state with hook, in this code below we filter the array item who has the id that has been deleted is not included anymore
    setStuffs(stuffs.filter((el) => el._id !== id));
  };

  // This function contain map method which is mapping Stuff Component which has declared before depend on stuff array
  const stuffList = () => {
    // the currentStaff parameter is the array item per index
    return stuffs.map((currentstuff) => {
      return (
        <Stuff
          stuff={currentstuff}
          deleteStuff={deleteStuff}
          key={currentstuff._id}
        />
      );
    });
  };

  return (
    // Call ListContainer as parent which Contains Styled Component for styling the children
    <ListToko>
      <div className="list-content">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Nama Barang</th>
              <th>Harga</th>
              <th>Kadaluarsa</th>
              <th>Tanggal Masuk</th>
              <th>Aksi</th>
            </tr>
          </thead>
          {/* We Call StufList that contain list of stuff */}
          <tbody>{stuffList()}</tbody>
        </table>
      </div>
    </ListToko>
  );
}

// Declare style Component Variable which has css inside it
const ListToko = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 8rem 0 3rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  .list-content {
    width: 80%;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .list-content > h3 {
    font-size: 2rem;
    margin: 0;
  }

  .list-content > p {
    font-size: 1rem;
  }

  .list-content > table {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  table > thead {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  tbody {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  thead > tr {
    width: 100%;

    border: 1px solid #213936;
    padding: 1.5rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

  th,
  td {
    width: 15%;
    text-align: center;

    .edit {
      &:hover {
        color: green;
      }
    }

    .delete {
      &:hover {
        color: red;
      }
    }
  }
  tbody > tr {
    width: 100%;
    height: 5rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: 1px solid var(--black);
  }

  .add-stuf {
    width: 80%;
    display: flex;
    justify-content: flex-end;
    margin-top: 5vh;
  }
  a {
    text-decoration: none;
  }

  .button-add {
    text-decoration: none;
    color: black;
    border: 1px solid black;
    padding: 2vh 1vh;

    &:hover {
      background-color: black;
      color: white;
    }
  }
`;
