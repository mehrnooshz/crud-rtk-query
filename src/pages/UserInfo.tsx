import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "./UserInfo.css";
import {useContactQuery} from '../services/contactsApi'


const UserInfo = () => {
  const { id } = useParams();
  const {data,error}=useContactQuery(id!)
  useEffect(()=>{
    if(error){
      toast.error('ff')
    }
  
  },[error])
  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>User Contact Detail</p>
        </div>
        <div className="container">
          <strong>ID:{data?.id} </strong>
          <span>1</span>
          <br />
          <br />
          <strong>Name: </strong>
          <span>{data?.name}</span>
          <br />
          <br />
          <strong>Email: </strong>
          <span>test@gmail.com</span>
          <br />
          <br />
          <strong>Contact: </strong>
          <span>775675673</span>
          <br />
          <br />
          <Link to="/">
            <button className="btn btn-edit">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
