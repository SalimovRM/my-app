import logo from "./logo.svg";
import "./App.css";

import ProfileCard from "./ProfileCard";
import Users from "./components/Users";
import Profile from "./components/Profile";
import load from "./Apu";
import { useEffect, useState } from "react";
import Paging from "./components/Paging";

function App() {
  // const url = "https://reqres.in/img/faces/7-image.jpg";
  // const name = "Micheal Lawson";
  // const email = "michael.lawson@reares.in";
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // useEffect(() => {
  //   // load().then((data)=> console.log(data))
  //   load().then((data) => setUsers(data));
  // },[]);

  useEffect(() => {
    load(currentPage).then((result) => {
      setUsers(result.data);
      setCurrentPage(result.page);
      setTotalPages(result.total_pages);
    });
  }, [currentPage]);

  //  const data = users.map((user) => {
  //   return  <Users users={user}/>
  // });
  return (
    <div>
      {/* {data} */}
      {/* <ProfileCard user={user} /> */}
      {/* <Users  user={user[1]}/> */}
      {/* <Users  user={user[0]}/> */}
      <Profile users={users} />
      <Paging
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default App;
