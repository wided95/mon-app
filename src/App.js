import "./App.css";
import Address from "./component/profile/Address";
import FullName from "./component/profile/FullName";
import ProfilePhoto from "./component/profile/ProfilePhoto";
function App() {
  return (
    <>
    <ProfilePhoto />
      <FullName />
      <Address></Address>
    </>
  );
}

export default App;
