import React from "react";
import { FaPlus } from "react-icons/fa6";


const EditRoster = ({ editRoster }) => {
  return (
    <div>
      {editRoster && (
        <div className="absolute w-full h-full bg-white">
          <div className="px-16 py-8 border-b-4 border-[#012555]">
            <h1 className="text-3xl font-bold text-[#012555] mt-8">
              Create Roster
            </h1>
          </div>
          <div className="px-4 py-4 flex items-center justify-between">
          <input
              type="text"
              className="bg-gray-200 text-black w-[86%] p-2 "
              value="P0001"
            />
            <FaPlus />
          </div>
        </div>
      )}
    </div>
  );
};

export default EditRoster;
