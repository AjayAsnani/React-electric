import React from "react";
import { FaPlus } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";



const EditRoster = ({ editRoster }) => {

  const EmployeeTripHeaders = [
    "",
    "Login Time",
    "Trip Id",
    "Employee Id",
    "Employee Name",
    "Employee Phone Number",
    "Employee Address",
    "Employee Emergency Contact",
    "Area",
    "Shift Type",
    "Escort Vehicle",
    "Asign Vehicle",
    "Vehicle Type",
    "Action"
  ];

  const EmployeeTripDetails = [
    {
      selected: true,
      login_time:"06:00am",
      trip_id:"P001",
      employee_id: "123",
      name: "Madadapu Gaiya Geethanjali",
      phone: "9999999999",
      address:
        "H-No-8-3-231/C/203,Near Community hall,Sri Krishna Nagar, yousufguda Hyderabad 500045",
      emergency_contact: "9999999999",
      area: "Sri Krishna Nagar",
      shift_type: "Morning",
      escort_vehicle: ["No", "Yes"],
      asign_vehicle:["TS7TV1234","TS9V2345"],
      vehicle_type:"SUV Vehicle",
      action:""
    },
    {
      selected: true,
      login_time:"06:00am",
      trip_id:"P001",
      employee_id: "123",
      name: "Madadapu Gaiya Geethanjali",
      phone: "9999999999",
      address:
        "H-No-8-3-231/C/203,Near Community hall,Sri Krishna Nagar, yousufguda Hyderabad 500045",
      emergency_contact: "9999999999",
      area: "Sri Krishna Nagar",
      shift_type: "Morning",
      escort_vehicle: ["No", "Yes"],
      asign_vehicle:["TS7TV1234","TS9V2345"],
      vehicle_type:"SUV Vehicle",
      action:""
    },
     {
      selected: false,
      login_time:"06:00am",
      trip_id:"P001",
      employee_id: "123",
      name: "Madadapu Gaiya Geethanjali",
      phone: "9999999999",
      address:
        "H-No-8-3-231/C/203,Near Community hall,Sri Krishna Nagar, yousufguda Hyderabad 500045",
      emergency_contact: "9999999999",
      area: "Sri Krishna Nagar",
      shift_type: "Morning",
      escort_vehicle: ["No", "Yes"],
      asign_vehicle:["TS7TV1234","TS9V2345"],
      vehicle_type:"SUV Vehicle",
      action:""
    },
    {
      selected: false,
      login_time:"06:00am",
      trip_id:"P001",
      employee_id: "123",
      name: "Madadapu Gaiya Geethanjali",
      phone: "9999999999",
      address:
        "H-No-8-3-231/C/203,Near Community hall,Sri Krishna Nagar, yousufguda Hyderabad 500045",
      emergency_contact: "9999999999",
      area: "Sri Krishna Nagar",
      shift_type: "Morning",
      escort_vehicle: ["No", "Yes"],
      asign_vehicle:["TS7TV1234","TS9V2345"],
      vehicle_type:"SUV Vehicle",
      action:""
    },
    {
      selected: false,
      login_time:"06:00am",
      trip_id:"P001",
      employee_id: "123",
      name: "Madadapu Gaiya Geethanjali",
      phone: "9999999999",
      address:
        "H-No-8-3-231/C/203,Near Community hall,Sri Krishna Nagar, yousufguda Hyderabad 500045",
      emergency_contact: "9999999999",
      area: "Sri Krishna Nagar",
      shift_type: "Morning",
      escort_vehicle: ["No", "Yes"],
      asign_vehicle:["TS7TV1234","TS9V2345"],
      vehicle_type:"SUV Vehicle",
      action:""
    },
    {
      selected: false,
      login_time:"06:00am",
      trip_id:"P001",
      employee_id: "123",
      name: "Madadapu Gaiya Geethanjali",
      phone: "9999999999",
      address:
        "H-No-8-3-231/C/203,Near Community hall,Sri Krishna Nagar, yousufguda Hyderabad 500045",
      emergency_contact: "9999999999",
      area: "Sri Krishna Nagar",
      shift_type: "Morning",
      escort_vehicle: ["No", "Yes"],
      asign_vehicle:["TS7TV1234","TS9V2345"],
      vehicle_type:"SUV Vehicle",
      action:""
    },
    {
      selected: false,
      login_time:"06:00am",
      trip_id:"P001",
      employee_id: "123",
      name: "Madadapu Gaiya Geethanjali",
      phone: "9999999999",
      address:
        "H-No-8-3-231/C/203,Near Community hall,Sri Krishna Nagar, yousufguda Hyderabad 500045",
      emergency_contact: "9999999999",
      area: "Sri Krishna Nagar",
      shift_type: "Morning",
      escort_vehicle: ["No", "Yes"],
      asign_vehicle:["TS7TV1234","TS9V2345"],
      vehicle_type:"",
      action:""
    }
    
  ];

  return (
    <div>
      {editRoster && (
        <div className="absolute w-[86%] h-full bg-white">
          <div className="px-16 py-8 border-b-4 border-[#012555]">
            <h1 className="text-3xl font-bold text-[#012555] mt-8">
              Create Roster
            </h1>
          </div>
          <div className="px-4 py-4 flex items-center justify-between">
          <input
              type="text"
              className="bg-gray-200 text-black w-full p-2 relative"
              value="P0001"
            />
            <div className="absolute right-8 cursor-pointer">
            <FaPlus />

            </div>
            
          </div>
          <div className="py-4">
            <table className="min-w-full border-collapse border border-gray-200">
              <thead>
                <tr>
                  {EmployeeTripHeaders.map((item, index) => (
                    <th
                      key={index}
                      className="px-4 py-4 font-normal text-left border border-gray-300 bg-gray-100 text-[10px ]"
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {EmployeeTripDetails.map((employee) => (
                  <tr key={employee.id}>
                    <td className="px-4 py-4 border border-gray-300 text-[12px]">
                      <input className="text-[30px] h-6 w-6" type="checkbox" checked={employee.selected} />
                    </td>
                    <td className="px-4 py-4 border border-gray-300 text-[12px]">
                      {employee.login_time}
                    </td>
                    <td className="px-4 py-4 border border-gray-300 text-[12px]">
                      {employee.trip_id}
                    </td>
                    <td className="px-4 py-4 border border-gray-300 text-[12px]">
                      {employee.employee_id}
                    </td>
                    <td className="px-4 py-4 border border-gray-300 text-[12px]">
                      {employee.name}
                    </td>
                    <td className="px-4 py-4 border border-gray-300 text-[12px]">
                      {employee.phone}
                    </td>
                    <td className="px-4 py-4 border border-gray-300 text-[12px]">
                      {employee.address}
                    </td>
                    <td className="px-4 py-4 border border-gray-300 text-[12px]">
                      {employee.emergency_contact}
                    </td>
                    <td className="px-4 py-4 border border-gray-300 text-[12px]">
                      {employee.area}
                    </td>
                    <td className="px-4 py-4 border border-gray-300 text-[12px]">
                      {employee.shift_type}
                    </td>
                    <td className="px-4 py-4 border border-gray-300 text-[12px]">
                    <select className="py-2 px-2 bg-white border border-gray-300">
                        {employee.escort_vehicle.map((escort) => (
                          <option value={escort}>{escort}</option>
                        ))}
                      </select>
                    </td>
                    <td className="px-4 py-4 border border-gray-300 text-[12px]">
                      <select className="py-2 px-2 bg-white border border-gray-300">
                        {employee.asign_vehicle.map((vehicle) => (
                          <option value={vehicle}>{vehicle}</option>
                        ))}
                      </select>
                    </td>
                    <td className="px-4 py-4 border border-gray-300 text-[12px]">
                      {employee.vehicle_type}
                    </td>
                    <td className="px-4 py-4 border border-gray-300 text-[12px]">
                      <div>
                        <CiCirclePlus className="text-[25px] cursor-pointer" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditRoster;
