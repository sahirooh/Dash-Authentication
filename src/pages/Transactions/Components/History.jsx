import { IoSearchOutline } from "react-icons/io5";

const History = () => {
  const filters = [
    {
      title: "All",
      value: "349",
    },
    {
      title: "Deposit",
      value: "114",
    },
    {
      title: "Withdraw",
      value: "213",
    },
    {
      title: "Trade",
      value: "22",
    },
  ];

  const heading = ["ID", "Date & Time", "Type", "Amount", "Status"];

  const tableData = [
    {
      id: "HD82NA2H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
      amount: "+₹81,123",
      status: "Pending",
    },
    {
      id: "HD82NA4H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "INR Widthdraw",
        tag: "Wire Transfer",
      },
      amount: "-₹55,123",
      status: "Processing",
    },
    {
      id: "HD82NA5H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Buy",
        tag: "BTC",
      },
      amount: "12.0554484 BTC",
      status: "Cancelled",
    },
    {
      id: "HD82NA6H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Sell",
        tag: "BTC",
      },
      amount: "-2.0554484 BTC",
      status: "Completed",
    },
    {
      id: "HD82NA7H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "BTC Deposit",
      },
      amount: "+15.5000000",
      status: "Pending",
    },
    {
      id: "HD82NA8H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "BTC Widthdraw",
      },
      amount: "-5.05555544",
      status: "Completed",
    },
  ];

  const statusColor = {
    Pending: "bg-gray-400",
    Completed: "bg-green-500",
    Cancelled: "bg-red-500",
    Processing: "bg-yellow-500",
  };

  return (
    <div className="bg-white w-[1050px] rounded-2xl h-[508px]">
      <div className="flex mt-4 border-b justify-between">
        <div className="flex mx-4 gap-4">
          {filters.map((item) => (
            <div className="flex h-full px-6 py-4 hover:border-b hover:border-b-purple-500 text-sm gap-2">
              <h1 className="text-gray-400 font-medium">{item.title}</h1>
              <p className="bg-[#EEEEF4] font-medium text-gray-400 rounded-full px-[6px]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
        <div className="flex mx-4 py-4 text-gray-400 gap-1 items-center">
          <IoSearchOutline />
          <input
            className="w-[200px] px-1 outline-none mb-[1px] text-sm"
            type="text"
            placeholder="Search by ID or Destination"
          />
        </div>
      </div>

      <div className="flex pl-6 pr-[110px] border-b justify-between">
        {heading.map((item) => (
          <div className="flex px-4 py-4 font-medium text-sm text-gray-400">
            <h1>{item}</h1>
          </div>
        ))}
      </div>

      <div className=" flex-col font-medium flex text-sm h-[360px] mt-2 justify-between">
        {tableData.map((item) => (
          <div className="flex items-center">
            <h1 className="ml-9">{item.id}</h1>
            <div className="flex flex-col ml-[110px]">
              <h1>{item.date}</h1>
              <p className="text-gray-400">{item.time}</p>
            </div>
            <div className="ml-[160px] w-[11%] ">
              <h1>{item.type.name}</h1>
              <p className="text-gray-400">{item.type.tag}</p>
            </div>
            <h1 className="ml-[90px] w-[14%]">{item.amount}</h1>
            <h1 className={`ml-[80px] rounded-full ${statusColor[item.status]} px-[6px] py-[2px] `}>
              {item.status}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
