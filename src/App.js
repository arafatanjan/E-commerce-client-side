import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Notfound from './components/Notfound/Notfound';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Loggedin from './components/Loggedin/Loggedin';
import Booking from './components/Booking/Booking';
import UserOrder from './components/AllOrders/UserOrder';
import Authprovider from './Context/Authprovider';
// import Privateroute from './Components/PrivateRoute/Privateroute';
import RequiredAuth from './components/PrivateRoute/RequiredAuth';
import AddUser from "./components/AddUser/AddUser";
import Home from "./components/Home/Home";
import UpdateUser from "./components/UpdateUser/UpdateUser";
import Users from "./components/AllOrders/Users";
import Header from './components/Header/Header';
import Review from './components/Review/Review';
import initializeAuthentication from "./Firebase/firebase.initialize";
import ManageProduct from "./components/Admin/ManageProduct";
import ManageServices from "./components/ManageServices/ManageServices";

import app from './Firebase/firebase.config'
import auth from './Firebase/firebase.config';
import AddService from "./components/AddService/AddService";
// import ManageServices from "./components/ManageServices/ManageServices";
import AllOrder from "./components/AllOrders/AllOrder";
import MakeAdmin from "./components/Admin/MakeAdmin";
import DashboardContainer from "./components/Dashboard/DashboardContainer";
import Explore from "./components/Services/Explore";
import Payment from "./components/Dashboard/Payment";
import AdminRoute from "./components/PrivateRoute/AdminRoute";


function App() {
  return (
    <div className="App">
      <Authprovider>
        <Router>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home></Home>}>

            </Route>
            <Route path='home' element={<Home></Home>}>
            </Route>
            <Route path='services' element={<Services></Services>}>
            </Route>
            <Route path="users/add" element={<AddUser></AddUser>}>
            </Route>
            <Route path="addservice" element={<AddService></AddService>}>
            </Route>
            <Route path="manageproduct" element={<ManageProduct></ManageProduct>}>
            </Route>
            {/* <Route path="manageservices" element={<ManageServices></ManageServices>}>
            </Route> */}

            <Route path="/dashboard/makeAdmin" element={<MakeAdmin></MakeAdmin>}>
            </Route>
            <Route path="/explore" element={<Explore></Explore>}>
            </Route>

            <Route exact path="orders/update/:id" element={<Users></Users>}>
            </Route>
            {/* <Route path="users" element={<RequiredAuth><UserOrder></UserOrder></RequiredAuth>}>
            </Route> */}
            <Route path="/dashboard" element={<RequiredAuth><DashboardContainer></DashboardContainer></RequiredAuth>}>
              <Route index element={<UserOrder></UserOrder>}>
              </Route>
              <Route exact path='dashboard/reviews' element={<Review></Review>}>
              </Route>
              <Route exact path='dashboard/payment' element={<Payment></Payment>}>
              </Route>
            </Route>
            {/* <Route path="/users/add" element={<AddUser></AddUser>}></Route> */}
            <Route path='loggedin' element={<Loggedin></Loggedin>}></Route>
            {/* <Route path='manageServices' element={<ManageServices></ManageServices>}></Route> */}
            <Route path='allorder' element={<AllOrder></AllOrder>}></Route>

            {/* <Route path='/booking/:serviceId' element={<RequiredAuth><AddUser></AddUser></RequiredAuth>}></Route> */}
            <Route path='booking/:serviceId' element={<RequiredAuth><Booking></Booking></RequiredAuth>}></Route>

            <Route path='*' element={<Notfound></Notfound>}>

            </Route>

          </Routes>

        </Router>
      </Authprovider>

    </div >
  );
  // 
  // <div className="App">
  //   <Router>
  //     <div>
  //       <Header></Header>
  //       <Switch>
  //         <Route exact path="/">
  //           <Home></Home>
  //         </Route>
  //         <Route exact path="/users">
  //           <Users></Users>
  //         </Route>
  //         <Route path="/users/add">
  //           <AddUser></AddUser>
  //         </Route>

  //         <Route path="/users/update/:id">
  //           <UpdateUser></UpdateUser>
  //         </Route>

  //       </Switch>
  //     </div>
  //   </Router>
  // </div>

}

export default App;
