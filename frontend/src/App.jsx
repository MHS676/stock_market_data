import React, { useState, useEffect } from "react";
import { fetchTrades } from "./api";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedTrade, setSelectedTrade] = useState("All");
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const itemsPerPage = 10;

  useEffect(() => {
    fetchTrades(currentPage, itemsPerPage, search).then((res) => {
      setData(res.trades);
      setFilteredData(res.trades);
      setTotal(res.total);
    });
  }, [currentPage, search]);

  const handleTradeChange = (event) => {
    const tradeCode = event.target.value;
    setSelectedTrade(tradeCode);
    if (tradeCode === "All") {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((trade) => trade.trade_code === tradeCode));
    }
  };

  const totalPages = Math.ceil(total / itemsPerPage);

  return (
    <div className="p-6">
      <h1 className="text-4xl text-center my-4">Stock Market Dashboard</h1>

      {/* Search and Filter */}
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search by Trade Code..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded w-1/3"
        />

        <div>
          <label className="mr-2">Select Trade Code:</label>
          <select className="border p-2" value={selectedTrade} onChange={handleTradeChange}>
            <option value="All">All</option>
            {[...new Set(data.map((trade) => trade.trade_code))].map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Multi-axis Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis yAxisId="left" label={{ value: "Close Price", angle: -90, position: "insideLeft" }} />
          <YAxis yAxisId="right" orientation="right" label={{ value: "Volume", angle: -90, position: "insideRight" }} />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="close" stroke="#8884d8" strokeWidth={2} />
          <Bar yAxisId="right" dataKey="volume" fill="#82ca9d" />
        </ComposedChart>
      </ResponsiveContainer>

      {/* Table */}
      <div className="overflow-x-auto mt-6 border rounded p-4">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">No.</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Trade Code</th>
              <th className="border p-2">High</th>
              <th className="border p-2">Low</th>
              <th className="border p-2">Open</th>
              <th className="border p-2">Close</th>
              <th className="border p-2">Volume</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((trade, index) => (
              <tr key={trade.id} className="hover:bg-gray-100">
                <td className="border p-2">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                <td className="border p-2">{trade.date}</td>
                <td className="border p-2">{trade.trade_code}</td>
                <td className="border p-2">{trade.high}</td>
                <td className="border p-2">{trade.low}</td>
                <td className="border p-2">{trade.open}</td>
                <td className="border p-2">{trade.close}</td>
                <td className="border p-2">{trade.volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 my-4">
        <button
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span className="text-lg font-bold">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
