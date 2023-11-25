import React from "react";
import Navigation from "../../components/Navigation";
import Header from "../../components/Header";
import Portfolio from "./Components/Portfolio";
import PriceSection from "./Components/PriceSection";
import Transactions from "./Components/Transactions";
import InfoCard from "./Components/InfoCard";

const Dashboard = () => {
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
