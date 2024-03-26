import LandingLayout from "../../../containers/anon/layout/LandingLayout";
import Header from "../../../containers/anon/layout/Header";
import Footer from "../../../containers/anon/layout/Footer";
import CargoFilter from "../../../containers/anon/dashboard/cargo/CargoFilter";
import CargoRequests from "../../../containers/anon/dashboard/cargo/CargoRequests";
import {Route, Routes} from "react-router-dom";
import React from "react";
import TransportFilter from "../../../containers/anon/dashboard/transport/TransportFilter";
import TransportRequests from "../../../containers/anon/dashboard/transport/TransportRequests";

export default function Dashboard() {
    return (
        <div>
            <LandingLayout>
                <Header/>
                <Routes>
                    <Route path="/cargo"
                           element={
                               <>
                                   <CargoFilter/>
                                   <CargoRequests/>
                               </>
                           }/>
                    <Route path="/transport" element={
                        <>
                            <TransportFilter/>
                            <TransportRequests/>
                        </>
                    }/>
                </Routes>
                <Footer/>
            </LandingLayout>
        </div>
    )
}