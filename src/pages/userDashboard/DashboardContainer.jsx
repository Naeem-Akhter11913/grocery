// import React, { Suspense } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import SideBar from "./SideBar";
// import Dashboard from './dashboard';
// import MyAddress from './myAddress';
// import Orders from './orders';
// import TrackOrders from './orderTracks';
// import AccountDetails from './accountDetails';
// import Waitlisted from './waitListed'

// const DashboardContainer = () => {
//     return (
//         <Router>
//             <div style={{ display: 'flex', gap:"20px" }}>
//                 <SideBar />
//                 <Suspense fallback={<div>Loading...</div>}>
//                     <Routes>
//                         <Route path="/dashboard" element={<Dashboard />} />
//                         <Route path="/orders" element={<Orders/>} />
//                         <Route path="/track-order" element={<TrackOrders/>} />
//                         <Route path="/address" element={<MyAddress />} />
//                         <Route path="/account" element={<AccountDetails/>} />
//                         <Route path="/waitlisted" element={<Waitlisted/>} />
//                         <Route path="/logout" element={<div>Logout Page</div>} />
//                     </Routes>
//                 </Suspense>
//             </div>
//          </Router>
//     )
// }

// export default DashboardContainer;


import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import SideBar from "./SideBar";
import Dashboard from './dashboard';
import MyAddress from './myAddress';
import Orders from './orders';
import TrackOrders from './orderTracks';
import AccountDetails from './accountDetails';
import Waitlisted from './waitListed';
import Navbar from '../../components/Navebar/NaveBar';

const DashboardContainer = () => {
    return (
        <>
            <Navbar />
            <div style={{ display: 'flex', gap: "20px", marginTop: "10px" }}>
                <SideBar />
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} /> {/* Set the default route for the dashboard */}
                        <Route path="orders" element={<Orders />} />
                        <Route path="track-order" element={<TrackOrders />} />
                        <Route path="address" element={<MyAddress />} />
                        <Route path="account" element={<AccountDetails />} />
                        <Route path="waitlisted" element={<Waitlisted />} />
                        <Route path="logout" element={<div>Logout Page</div>} />
                    </Routes>
                </Suspense>
            </div>
        </>
    );
}

export default DashboardContainer;
