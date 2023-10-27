import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import Error from "../pages/Error/Error";
import DonationCatagory from "../pages/DonationCatagory/DonationCatagory";

const myCreatedRoute = createBrowserRouter([
{
path : "/",
element : <MainLayout></MainLayout>,
errorElement: <Error></Error>,
children : [
    {
        path : "/",
        element : <Home></Home>,
        loader : () => fetch('/public/donation.json')
    },
    {
        path : "/donation",
        element : <Donation></Donation>
    },
    {
        path : "/statistics",
        element : <Statistics></Statistics>
    },
    {
        path: "/donations/:id",
        element : <DonationCatagory></DonationCatagory>,
        loader : ()=> fetch('/public/donation.json')
    }
]
}
]) 


export default myCreatedRoute;