import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  IoCloudUploadOutline,
  IoDocumentTextOutline,
  IoDownloadOutline,
  IoCheckmarkCircleOutline,
  IoClose,
  IoSearch,
} from "react-icons/io5";
import { FaMinus } from "react-icons/fa6";
import { FaFileExcel, FaFileCsv, FaRegFilePdf } from "react-icons/fa";
import { LuArrowUpDown } from "react-icons/lu";
import { BiSolidPlusSquare } from "react-icons/bi";
import { AiFillCloseSquare } from "react-icons/ai";
import { MdEditSquare } from "react-icons/md";
import EditRoster from "../components/EditRoster";


const Roster = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showTripDetails, setShowTripDetails] = useState(false);
  const [editRoster, setEditRoster] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState({
    loginTime: "",
    shift: "",
    tripType: "Pickup",
    pickupDropOptions: "",
    file: null,
  });

  const handleFileUpload = () => {
    setIsUploading(true);
    // Simulate file upload process
    setTimeout(() => {
      setIsUploading(false);
      setIsUploaded(true);
    }, 2000);
    setTimeout(() => {
      setIsUploaded(false);
    }, 5000);
  };

  const handleReset = () => {
    setIsUploading(false);
    setIsUploaded(false);
    setShowDetails(false);
    setCurrentPage(0);
    setFormData({
      loginTime: "",
      shift: "",
      tripType: "Pickup",
      pickupDropOptions: "",
      file: null,
    });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleViewDetails = () => {
    setShowDetails(true);
  };

  const handleReupload = () => {
    setShowDetails(false);
    setIsUploaded(false);
  };

  const redirectUploadContent = () => {
    setIsUploaded(false);
    setShowDetails(false);
  };

  // Generate unique data for each row
  const tableData = Array.from({ length: 50 }, (_, index) => ({
    col1: `P${String(index + 1).padStart(4, "0")}`, // Generates unique values like PA1, PB1, ..., PZ1, PA2, PB2, ...
    col2: `Row ${index + 1} Data 2`,
    col3: `Row ${index + 1} Data 3`,
    col4: `Row ${index + 1} Data 4`,
    col5: `Row ${index + 1} Data 5`,
    col6: `Row ${index + 1} Data 6`,
    col7: `Row ${index + 1} Data 7`,
    col8: `Row ${index + 1} Data 8`,
  }));

  const EmployeeTripHeaders = [
    "Employee Id",
    "Employee Name",
    "Employee Phone",
    "Employee Address",
    "Employee Emergency Contact",
    "Area",
    "Shift Type",
    "Shift Time",
  ];

  const TripsHeader = [
    "Trip Id",
    "Total No. of Employees",
    "Login Time",
    "Shift",
    "Trip Type",
    "Created Date",
    "Uploaded By",
    "Actions",
  ];

  const TripsDetails = [
    {
      id: "P001",
      employees: "200",
      loginTime: "06:00am",
      shift: "Shift-1",
      tripType: "Pickup",
      createdDate: "02/06/2024 03:00am",
      uploadedBy: "Madadapu",
      action: [""],
    },
    {
      id: "D001",
      employees: "200",
      loginTime: "08:00am",
      shift: "Shift-2",
      tripType: "Drop",
      createdDate: "04/06/2024 05:00am",
      uploadedBy: "Madadapu",
      action: [""],
    },
    {
      id: "P002",
      employees: "300",
      loginTime: "08:00am",
      shift: "Shift-2",
      tripType: "Pickup",
      createdDate: "02/06/2024 05:00am",
      uploadedBy: "Madadapu",
      action: [""],
    },
    {
      id: "P003",
      employees: "250",
      loginTime: "09:00am",
      shift: "Shift-3",
      tripType: "Pickup",
      createdDate: "02/06/2024 06:00am",
      uploadedBy: "Madadapu",
      action: [""],
    },
    {
      id: "D002",
      employees: "100",
      loginTime: "09:00am",
      shift: "Shift-2",
      tripType: "Drop",
      createdDate: "02/06/2024 06:00am",
      uploadedBy: "Madadapu",
      action: [""],
    },
    {
      id: "D003",
      employees: "280",
      loginTime: "10:00am",
      shift: "Shift-3",
      tripType: "Drop",
      createdDate: "02/06/2024 03:00am",
      uploadedBy: "Madadapu",
      action: [""],
    },
    {
      id: "P001",
      employees: "200",
      loginTime: "06:00am",
      shift: "Shift-1",
      tripType: "Pickup",
      createdDate: "02/06/2024 03:00am",
      uploadedBy: "Madadapu",
      action: [""],
    },
    {
      id: "P001",
      employees: "200",
      loginTime: "06:00am",
      shift: "Shift-1",
      tripType: "Pickup",
      createdDate: "02/06/2024 03:00am",
      uploadedBy: "Madadapu",
      action: [""],
    },
  ];

  const EmployeeTripDetails = [
    {
      id: "123",
      name: "Madadapu Gaiya Geethanjali",
      phone: "9999999999",
      address:
        "H-No-8-3-231/C/203,Near Community hall,Sri Krishna Nagar, yousufguda Hyderabad 500045",
      emergencyContact: "9999999999",
      area: "Sri Krishna Nagar",
      shiftType: "Morning",
      shiftTime: "10:00 AM - 12:00 PM",
    },
    {
      id: "124",
      name: "Madadapu Gaiya Geethanjali",
      phone: "9999999999",
      address:
        "H-No-8-3-231/C/203,Near Community hall,Sri Krishna Nagar, yousufguda Hyderabad 500045",
      emergencyContact: "9999999999",
      area: "Sri Krishna Nagar",
      shiftType: "Morning",
      shiftTime: "10:00 AM - 12:00 PM",
    },
    {
      id: "125",
      name: "Madadapu Gaiya Geethanjali",
      phone: "9999999999",
      address:
        "H-No-8-3-231/C/203,Near Community hall,Sri Krishna Nagar, yousufguda Hyderabad 500045",
      emergencyContact: "9999999999",
      area: "Sri Krishna Nagar",
      shiftType: "Morning",
      shiftTime: "10:00 AM - 12:00 PM",
    },
    {
      id: "126",
      name: "Madadapu Gaiya Geethanjali",
      phone: "9999999999",
      address:
        "H-No-8-3-231/C/203,Near Community hall,Sri Krishna Nagar, yousufguda Hyderabad 500045",
      emergencyContact: "9999999999",
      area: "Sri Krishna Nagar",
      shiftType: "Morning",
      shiftTime: "10:00 AM - 12:00 PM",
    },
    {
      id: "127",
      name: "Madadapu Gaiya Geethanjali",
      phone: "9999999999",
      address:
        "H-No-8-3-231/C/203,Near Community hall,Sri Krishna Nagar, yousufguda Hyderabad 500045",
      emergencyContact: "9999999999",
      area: "Sri Krishna Nagar",
      shiftType: "Morning",
      shiftTime: "10:00 AM - 12:00 PM",
    },
    {
      id: "128",
      name: "Madadapu Gaiya Geethanjali",
      phone: "9999999999",
      address:
        "H-No-8-3-231/C/203,Near Community hall,Sri Krishna Nagar, yousufguda Hyderabad 500045",
      emergencyContact: "9999999999",
      area: "Sri Krishna Nagar",
      shiftType: "Morning",
      shiftTime: "10:00 AM - 12:00 PM",
    },
    {
      id: "129",
      name: "Madadapu Gaiya Geethanjali",
      phone: "9999999999",
      address:
        "H-No-8-3-231/C/203,Near Community hall,Sri Krishna Nagar, yousufguda Hyderabad 500045",
      emergencyContact: "9999999999",
      area: "Sri Krishna Nagar",
      shiftType: "Morning",
      shiftTime: "10:00 AM - 12:00 PM",
    },
    {
      id: "130",
      name: "Madadapu Gaiya Geethanjali",
      phone: "9999999999",
      address:
        "H-No-8-3-231/C/203,Near Community hall,Sri Krishna Nagar, yousufguda Hyderabad 500045",
      emergencyContact: "9999999999",
      area: "Sri Krishna Nagar",
      shiftType: "Morning",
      shiftTime: "10:00 AM - 12:00 PM",
    },
  ];

  const rowsPerPage = 5;
  const startIndex = currentPage * rowsPerPage;
  const currentPageData = TripsDetails.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  return (
    <div className="flex min-h-screen relative">
      <Sidebar />
      <EditRoster editRoster={editRoster} />
      {showTripDetails && (
        <div className="absolute top-[20%] left-[5%] bg-white w-[90%] h-auto px-4 py-4 popup-shadow">
          <div className="flex justify-between items-center">
            <h1>Trip Details</h1>
            <IoClose
              cursor={"pointer"}
              onClick={() => setShowTripDetails(false)}
            />
          </div>
          <div className="py-4">
            <input
              type="text"
              className="bg-gray-200 text-black w-full p-2 "
              value="P0001"
            />
          </div>
          <div className="py-4">
            <table className="min-w-full border-collapse border border-gray-200">
              <thead>
                <tr>
                  {EmployeeTripHeaders.map((item, index) => (
                    <th
                      key={index}
                      className="px-4 py-4 text-left border border-gray-300 bg-gray-100 text-[12px ]"
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
                      {employee.id}
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
                      {employee.emergencyContact}
                    </td>
                    <td className="px-4 py-4 border border-gray-300 text-[12px]">
                      {employee.area}
                    </td>
                    <td className="px-4 py-4 border border-gray-300 text-[12px]">
                      {employee.shiftType}
                    </td>
                    <td className="px-4 py-4 border border-gray-300 text-[12px]">
                      {employee.shiftTime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-[#012555] mb-8">
          Create Roster
        </h1>
        <div className="flex items-center gap-8 mb-6">
          <div className="flex items-center cursor-pointer">
            <IoDocumentTextOutline className="text-2xl mr-2" />
            <h2
              className="text-xl font-semibold"
              onClick={redirectUploadContent}
            >
              Upload Employee Details
            </h2>
          </div>
          <div className="flex items-center cursor-pointer">
            <IoDocumentTextOutline className="text-2xl mr-2" />
            <h2 className="text-xl font-semibold" onClick={handleViewDetails}>
              View Details
            </h2>
          </div>
        </div>
        {showDetails && (
          <div className="bg-white p-8 shadow-md rounded-md mt-8">
            <div className="flex-col border border-gray-300">
              <div className="flex justify-between items-center p-4 w-full h-[50px] border border-gray-300 border-t-0 border-l-0 border-r-0">
                <h1>Search</h1>
                <FaMinus />
              </div>
              <div className="flex mb-6 gap-4 py-8 px-4">
                <div className="flex-1">
                  <input
                    type="text"
                    className="border p-2 w-full"
                    placeholder={`Updated By`}
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    className="border p-2 w-full"
                    placeholder={`Login Time`}
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    className="border p-2 w-full"
                    placeholder={`Shift`}
                  />
                </div>
                <div className="flex-1">
                  <select
                    name="tripType"
                    onChange={handleChange}
                    className="border p-2 w-full"
                  >
                    <option>Trip Type</option>
                    <option>Pickup</option>
                    <option>Drop</option>
                  </select>
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    className="border p-2 w-full"
                    placeholder={`Date Range`}
                  />
                </div>
              </div>
              <div className="flex justify-center gap-4 mb-6">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  Search
                </button>
                <button className="bg-gray-500 text-white px-4 py-2 rounded">
                  Cancel
                </button>
              </div>
            </div>

            <div className="py-4">
              <div className=" flex float-right py-2">
                {!editRoster && <div className="flex-1 relative">
                  <div className="absolute top-3 px-2">
                    <IoSearch />
                  </div>
                  <input
                    type="text"
                    className="border py-2 px-8 w-full"
                    placeholder={`Search`}
                  />
                </div>}
                <div className="flex gap-4 items-center px-2">
                  <div className="p-2 border border-black rounded-full cursor-pointer">
                    <FaFileExcel />
                  </div>
                  <div className="p-2 border border-black rounded-full cursor-pointer">
                    <FaFileCsv />
                  </div>
                  <div className="p-2 border border-black rounded-full cursor-pointer">
                    <FaRegFilePdf />
                  </div>
                </div>
              </div>
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    {TripsHeader.map((trip, index) => (
                      <th key={index} className="border p-2 text-left">
                        <div className="flex gap-2 items-center">
                          <p>{trip}</p>
                          <div className="flex items-center">
                            <LuArrowUpDown className="cursor-pointer" />
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {currentPageData.map((trips, index) => (
                    <tr key={index}>
                      {Object.values(trips).map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className={`border px-2 py-12  cursor-pointer ${cellIndex===0 ? 'hover:underline' : 'hover:none'}`}
                          onClick={() => cellIndex===0 ? setShowTripDetails(true) : setShowTripDetails(false)}
                        >
                          {cellIndex === 7 ? (
                            <div className="flex items-center gap-2">
                              {" "}
                              <AiFillCloseSquare className="text-[40px]" />
                              <BiSolidPlusSquare className="text-[40px]" />
                              <MdEditSquare onClick={() => setEditRoster(true)} className="text-[40px]" />
                            </div>
                          ) : (
                            cell
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="gap-5 flex items-center justify-center mt-4">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                disabled={currentPage === 0}
              >
                Previous
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() =>
                  setCurrentPage((prev) =>
                    startIndex + rowsPerPage < tableData.length
                      ? prev + 1
                      : prev
                  )
                }
                disabled={startIndex + rowsPerPage >= tableData.length}
              >
                Next
              </button>
            </div>
          </div>
        )}
        {!showDetails && isUploaded && (
          <div className="bg-white p-8 shadow-md rounded-md mt-8 text-center">
            <h2 className="text-xl font-semibold">Reupload Excel File</h2>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded mt-4"
              onClick={handleReupload}
            >
              Upload Employee Details
            </button>
          </div>
        )}
        {!showDetails && !isUploaded && (
          <div
            className={`bg-white p-8 shadow-md rounded-md ${
              showDetails ? "hidden" : "block"
            }`}
          >
            <div className="flex items-center mb-6">
              <IoDownloadOutline className="text-2xl mr-2" />
              <p className="text-gray-700 font-bold">
                Download excel file to fill employee details
              </p>
            </div>
            <div className="flex mb-6 gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 mb-2">Login Time</label>
                <input
                  type="time"
                  name="loginTime"
                  value={formData.loginTime}
                  onChange={handleChange}
                  className="border p-2 w-full"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 mb-2">Shift</label>
                <input
                  type="text"
                  name="shift"
                  value={formData.shift}
                  onChange={handleChange}
                  className="border p-2 w-full"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 mb-2">Trip Type</label>
                <select
                  name="tripType"
                  value={formData.tripType}
                  onChange={handleChange}
                  className="border p-2 w-full"
                >
                  <option>Pickup</option>
                  <option>Drop</option>
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">
                Upload Excel File
              </label>
              <div className="flex items-center">
                <IoCloudUploadOutline className="text-2xl mr-2" />
                <input
                  type="file"
                  name="file"
                  onChange={handleChange}
                  className="border p-2 w-full"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">
                Pickup/Drop Options
              </label>
              <input
                type="text"
                name="pickupDropOptions"
                value={formData.pickupDropOptions}
                onChange={handleChange}
                className="border p-2 w-full"
              />
            </div>
            <div className="flex justify-center gap-4">
              <button
                className="border border-[#012555] text-[#012555] font-bold px-4 py-2 rounded"
                onClick={handleFileUpload}
              >
                {isUploading ? "Uploading..." : "Upload"}
              </button>
              <button
                className="border border-[#012555] text-[#012555] font-bold px-4 py-2 rounded"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </div>
        )}
        {isUploaded && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded flex items-center">
            <IoCheckmarkCircleOutline className="text-2xl mr-2" />
            <p>File uploaded successfully!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Roster;
