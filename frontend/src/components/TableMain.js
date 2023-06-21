import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "./TableMain.css";
import Button from "react-bootstrap/Button";
function TableMain() {
  const [allStudent, setAllstudent] = useState([]);
  const [searchkey, setsearchkey] = useState("");

  const fetchData = async () => {
    const result = await axios.get("http://localhost:8000/getStudent");
    setAllstudent(result.data.Students);
  };

  useEffect(() => {
    fetchData();
    sorting("Name");
  }, []);

  // Sorting
  const [order, setorder] = useState("ASC");

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...allStudent].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setAllstudent(sorted);
      setorder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...allStudent].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setAllstudent(sorted);
      setorder("ASC");
    }
  };

  return (
    <div>
      <div className="Search-main">
        <input
          type="text"
          onChange={(e) => setsearchkey(e.target.value)}
          placeholder="Search Name"
        />
        <Button
          onClick={() => sorting("Name")}
          style={{ width: "8rem", height: "3rem" }}
        >
          <i class="fa-solid fa-sort"></i>
          Asc&Dsc
        </Button>
      </div>

      <Table
        style={{ marginTop: "2rem" }}
        className=""
        striped
        bordered
        hover
        variant="dark"
      >
        <thead>
          <tr>
            <th>Sl.No.</th>

            <th>Name</th>

            <th>Date of Birth</th>

            <th>Class</th>

            <th>Division</th>

            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {allStudent.filter((val) => {
              if (searchkey == "") {
                return val;
              } else if (
                val.Name.toLowerCase().includes(searchkey.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item, index) => (
              <tr>
                <td>{index + 1}</td>

                <td>{item.Name}</td>

                <td>{item.Dob.slice(0, 10)}</td>

                <td>{item.selects}</td>

                <td>{item.Division}</td>
                <td>{item.gender}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TableMain;
