import React, { useEffect } from "react";
import {useDriverStore} from '../stores/useDriverStore.js'
import LoadingSpinner from "../components/LoadingSpinner.jsx";

const Drivers = () => {
  const { getDrivers, drivers } = useDriverStore();

  useEffect(() => {
    getDrivers();
  }, [getDrivers]);

  const getTeamColor = (team) => {
    const colors = {
      "Red Bull Racing": "border-l-blue-600",
      Mercedes: "border-l-cyan-400",
      Ferrari: "border-l-red-600",
      McLaren: "border-l-orange-500",
      "Aston Martin": "border-l-emerald-500",
    };
    return colors[team] || "border-l-gray-500";
  };

  if (!drivers || drivers.length === 0) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gray-900 text-white py-6 px-4">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Formula 1 Drivers 2024
        </h1>
        <p className="text-gray-400">Current Championship Standings</p>
      </header>

      {/* Drivers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {drivers.map((driver) => (
          <div
            key={driver.driver_number}
            className={`bg-gray-800 rounded-xl p-4 border-l-4 ${getTeamColor(
              driver.team_name
            )} flex flex-col items-center hover:scale-105 transition-transform duration-300`}
          >
            <img
              src={driver.headshot_url}
              alt={driver.full_name}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-lg font-bold text-center">{driver.full_name}</h3>
            <p className="text-gray-300 text-sm text-center">{driver.team_name}</p>
            <p className="text-gray-400 text-xs">{driver.country_code}</p>

            <div className="flex justify-between mt-3 w-full gap-2">
              <div className="flex-1 bg-gray-700/50 rounded-lg p-2 text-center">
                <div className="text-lg font-bold">{driver.meeting_key}</div>
                <div className="text-xs text-gray-400">Meeting Key</div>
              </div>
              <div className="flex-1 bg-gray-700/50 rounded-lg p-2 text-center">
                <div className="text-lg font-bold">{driver.driver_number}</div>
                <div className="text-xs text-gray-400">Number</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 mt-8 border-t border-gray-800">
        Formula 1® Drivers Championship 2024
      </footer>
    </div>
  );
};

export default Drivers;
