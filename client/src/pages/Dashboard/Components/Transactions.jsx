import { PiCurrencyDollarSimpleFill, PiCurrencyBtcFill } from "react-icons/pi";

const Transactions = () => {
  const transactions = [
    {
      id: "1",
      icon: (
        <PiCurrencyDollarSimpleFill className="text-4xl p-1 rounded-full bg-[#EEEEF4]" />
      ),
      title: "INR Deposit",
      date: "2022-06-09 7:06 PM",
      amount: "+ ₹81,123.10",
    },
    {
      id: "2",
      icon: (
        <PiCurrencyBtcFill className="text-4xl p-1 rounded-full bg-[#EEEEF4]" />
      ),
      title: "BTC Sell",
      date: "2022-05-27 12:32 PM",
      amount: "- 12.48513391 BTC",
    },
    {
      id: "3",
      icon: (
        <PiCurrencyDollarSimpleFill className="text-4xl p-1 rounded-full bg-[#EEEEF4]" />
      ),
      title: "INR Deposit",
      date: "2022-06-09 7:06 PM",
      amount: "+ ₹81,123.10",
    },
  ];

  return (
    <div className="w-[468px] h-[310px] bg-white rounded-xl">
      <h1 className="flex font-medium text-sm text-[#535D66] mx-6 mt-5">
        Recent Transactions
      </h1>

      <div>
        {transactions.map((transaction) => (
          <div className="flex items-center gap-3 mt-5 mx-6">
            {transaction.icon}
            <div className="flex w-full items-center justify-between">
              <div>
                <h1>{transaction.title}</h1>
                <p className="text-[#797E82]">{transaction.date}</p>
              </div>
              <h1 className="font-medium">{transaction.amount}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full ">
        <button className="bg-[#EEEEF4] flex-grow py-2 mt-4 rounded-lg mx-6 font-medium">
          View All
        </button>
      </div>

      <button></button>
    </div>
  );
};

export default Transactions;
