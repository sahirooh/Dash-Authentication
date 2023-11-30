import Navigation from "../../components/Navigation";
import Header from "../../components/Header";
import Portfolio from "./Components/Portfolio";
import PriceSection from "./Components/PriceSection";
import Transactions from "./Components/Transactions";
import InfoCard from "./Components/InfoCard";
import { fetchExample } from "../../api/query/exampleQuery";
import { useQuery } from "react-query";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Dashboard = () => {

const exampleQuery = useQuery({
  queryKey: ["example"],
  queryFn: fetchExample,
})

if (exampleQuery.isLoading) return <div>Loading...</div>


  return (
    <div className="flex">
      
        <Navigation />
      
      <div className="flex-grow">
        <Header title={"Dashboard"} />
        <div className="bg-[#EEEEF4] flex flex-col gap-6 items-center h-[calc(100vh-64px)]">
          <Portfolio />
          <div className="flex gap-6">
            <PriceSection />
            <Transactions />
          </div>
          <InfoCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
