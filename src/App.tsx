import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Users from "./components/Users";


const App: React.FC = () => {
  const ApiLink = "https://randomuser.me/api/?results=100";
  const [allUserData, setUserData] = useState<IUser[]>([]);
  const [Loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    fetchApi();
  }, []);
  const fetchApi = async () => {
    try {
      const response = await axios.get(ApiLink);
      console.log(response.data.results);
      setUserData(response.data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // const handleSearch = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // debugger
  //   console.log(value);

  //   try {
  //     const respones = await axios.get(
  //       `https://randomuser.me/api/?results=100?q=${value}`
  //     );
  //     setUserData(respones.data.results);
  //     console.log(respones);
  //   } catch (err) {
  //     console.log(err);
  //   }

  //   // console.log(allUserData);
  // };



  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 10,
          fontSize: 30,
          fontFamily: "monospace",
          backgroundColor: "antiquewhite",
        }}
      >
        User Details
      </div>

      <Users
        allUserData={allUserData}
        setUserData={setUserData}
        Loading={Loading}
        setLoading={setLoading}
      />
    </div>
  );
};

export default App;

export interface IUser {
  gender: string
  name: {
    first: string
    last: string
 }
  location: Location
  email: string;
  dob: string;
  phone: string;
  cell: string;
  id: number;
  picture: {
    large: string;
  }
  nat: string;
  registered: {
    age: number;
  }
  date: Date;
}

