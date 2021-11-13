import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllProducts from './Pages/AllProducts/AllProducts/AllProducts';
import AuthProvider from './ContextApi/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import AddProduct from './Pages/DashBoard/AddProduct/AddProduct';
import AddReview from './Pages/DashBoard/AddReview/AddReview';
import Order from './Pages/Order/Order/Order';
import MyOrders from './Pages/DashBoard/MyOrders/MyOrders';
import ManageOrders from './Pages/DashBoard/ManageOrders/ManageOrders';
import ManageProducts from './Pages/DashBoard/ManageProducts/ManageProducts';
import Review from './Pages/Home/Review/Review';
import MakeAdmin from './Pages/DashBoard/MakeAdmin/MakeAdmin';
import PageNotFound from './PageNotFound/PageNotFound';



function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Switch>

            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/home'>
              <Home></Home>
            </Route>

            <Route path='/login'>
              <Login></Login>
            </Route>

            {/* <Route path='/review'>
              <Review></Review>
            </Route> */}

            {/* <Route path='/makeAdmin'>
              <MakeAdmin></MakeAdmin>
            </Route>

            <PrivateRoute path='/addProduct'>
              <AddProduct></AddProduct>
            </PrivateRoute> */}



{/* 
            <PrivateRoute path='/myOrders'>
              <MyOrders></MyOrders>
            </PrivateRoute>

            <PrivateRoute path='/addReview'>
              <AddReview></AddReview>
            </PrivateRoute>

            <PrivateRoute path='/manageOrders'>
              <ManageOrders></ManageOrders>
            </PrivateRoute>

            <PrivateRoute path='/manageProducts'>
              <ManageProducts></ManageProducts>
            </PrivateRoute> */}


            <Route path='/products'>
              <AllProducts></AllProducts>
            </Route>

            <PrivateRoute path='/order/:productId'>
              <Order></Order>
            </PrivateRoute>

            <PrivateRoute path='/dashBoard'>
              <DashBoard></DashBoard>
            </PrivateRoute>

            <Route path='/registration'>
              <Registration></Registration>
            </Route>

            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>

          </Switch>
        </Router>
      </AuthProvider>

    </div >
  );
}

export default App;
