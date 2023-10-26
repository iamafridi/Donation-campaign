import DonationCard from "./DonationCard";

const DonationCards = ({donations}) => {
    console.log(donations);
    return (
        <div className="py-10">
            <h2 className="text-2xl text-center">Donations Here</h2>

<div>
    {
        donations ?.map(donation=><DonationCard key={donation.color}></DonationCard>)
    }
</div>
           
        </div>
    );
};

export default DonationCards;