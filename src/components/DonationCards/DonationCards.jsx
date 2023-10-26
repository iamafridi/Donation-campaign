import DonationCard from "./DonationCard";

const DonationCards = ({donations}) => {
    console.log(donations);
    return (
        <div className="py-10">
            <h2 className="text-2xl text-center">Donations Here</h2>

<div className=" grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 ">
    {
        donations ?.map(donation=><DonationCard key={donation.color} donation={donation}></DonationCard>)
    }
</div>
           
        </div>
    );
};

export default DonationCards;