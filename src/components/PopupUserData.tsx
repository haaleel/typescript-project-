import React from "react";
import "./PopupUserData.css";
import { IUser } from "../App";

const PopupUserData: React.FC<Props> = (props) => {
  console.log(props.popupList);
  return (
    <div className="pop">
      <div className="card">
        {props.popupList.map((data: IUser,id:number) => {
          return (
            <div>
              <div key={id} style={{ display: "flex", justifyContent: "center" }}>
                <img className="image" src={data.picture.large} alt="loading" />
              </div>

              <div className="userdetails">
              <ul>
              <p>First_Name :{data.name.first}</p>
                <p>Last_Name :{data.name.last}</p>
                <p>Email_Adress : {data.email}</p>
                <p>Age :{data.registered.age}</p>

                {/* <p>Date Of Birth: {data.}</p> */}
                <p>Unversity : {}</p>
                <p>Phone : {data.phone}</p>
                </ul> 
              
              </div>
            </div>
          );
        })}
        <div style={{display:"flex",justifyContent:"flex-end"}}>
          <button
            className="button"
            onClick={() => {
              props.setisPopup(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupUserData;

interface Props {
  popupList: any;
  setPopupList: React.Dispatch<React.SetStateAction<IUser[]>>;
  // popup: boolean;
  setisPopup: React.Dispatch<React.SetStateAction<boolean>>;
}
