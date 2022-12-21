import React, { useState } from "react";
import { IUser } from "../App";
import "../components/Users.css";
import FilterUser from "./FilterUser";
import PopupUserData from "./PopupUserData";

const Users: React.FC<Props> = (props) => {
  const [ispopup, setisPopup] = useState<boolean>(false);
  const [popuplist, setPopupList] = useState<IUser[]>([]);
  const [filterTextvalue, updateFilterText] = useState("all");
  const [Searchvalue, setsearchvalue] = useState<string>("");

  const handleOpen = (id: number) => {
    let popupList = props.allUserData.filter(
      (person: IUser) => person.id === id  )
    setPopupList(popupList);
    setisPopup(true);
  }

  const fliterValueSelected = (filervalue:string) => {
    // console.log(filtervalue);
    updateFilterText(filervalue);
  }

  // option filter condtion with if condition 
  let filteredUserList = props.allUserData.filter((user: IUser) => {
    if (filterTextvalue === "male") {
      return user.gender === "male";
    } else if (filterTextvalue === "female") {
      return user.gender === "female";
    } else if (filterTextvalue === "age") {
      return user.registered.age > 10;
    } else {
      return user;
    }
  });

  return (
    <div>
      <div className="maincontainer">
        <FilterUser fliterValueSelected={fliterValueSelected} />
        <div>
          <form>
            <input
              type="text"
              placeholder=" Name OR Age"
              value={Searchvalue}
              onChange={
                (e) => setsearchvalue(e.target.value)
                // console.log(value)
              }
            />
            <button type="submit">Search</button>
            <button>Reset</button>
          </form>
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
        {props.Loading ? (
          <div style={{ fontSize: 40 }}>Loding.. </div>
        ) : (

          // filter Condition start 
          filteredUserList
            ?.filter((val) => {
              if (Searchvalue === "") {
                return val;
              } else if (
                val.name.first
                  .toLocaleLowerCase()
                  .includes(Searchvalue.toLocaleLowerCase())
              ) {
                return val;
              } else if (val.registered.age.toString().includes(Searchvalue))
               {
                return val;
              }
        
            })

            // Map function start
            .map((data: IUser, i) => {
              return (
                <div key={i} className="containerCard">
                  <div
                    className="container"
                    onClick={() => {
                      handleOpen(data.id);
                      // console.log(e)
                    }}
                  >
                    <img
                      style={{
                        height: 200,
                        width: 150,
                        border: "ridge",
                        objectFit: "contain",
                      }}
                      src={data.picture?.large}
                      alt=""
                    />

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: 20,
                        justifyContent: "center",
                      }}
                    >
                      <p>FirstName : {data.name.first}</p>
                      <p>LastName : {data.name.last}</p>
                      <p>Email Address :{data.email}</p>
                    </div>
                  </div>
                </div>
              );
            })
        )}
      </div>
      {ispopup && (
        <PopupUserData
          popupList={popuplist}
          setPopupList={setPopupList}
          setisPopup={setisPopup}
        />
      )}
    </div>
  );
};

export default Users;

interface Props {
  allUserData: IUser[];
  setUserData: React.Dispatch<React.SetStateAction<IUser[]>>;
  Loading: Boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
