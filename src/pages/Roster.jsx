import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  IoCloudUploadOutline,
  IoDocumentTextOutline,
  IoDownloadOutline,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";

const Roster = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
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

  const tableData = Array.from({ length: 50 }, (_, index) => ({
    col1: `Row ${index + 1} Data 1`,
    col2: `Row ${index + 1} Data 2`,
    col3: `Row ${index + 1} Data 3`,
    col4: `Row ${index + 1} Data 4`,
    col5: `Row ${index + 1} Data 5`,
    col6: `Row ${index + 1} Data 6`,
    col7: `Row ${index + 1} Data 7`,
    col8: `Row ${index + 1} Data 8`,
  }));

  const rowsPerPage = 5;
  const startIndex = currentPage * rowsPerPage;
  const currentPageData = tableData.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-[#012555 mb-8">Create Roster</h1>
        <div className="flex items-center gap-8 mb-6">
          <div className="flex items-center">
            <IoDocumentTextOutline className="text-2xl mr-2" />
            <h2 className="text-xl font-semibold">Upload Employee Details</h2>
          </div>
          <div className="flex items-center">
            <IoDocumentTextOutline className="text-2xl mr-2" />
            <h2
              className="text-xl font-semibold pointer"
              onClick={handleViewDetails}
            >
              View Details
            </h2>
          </div>
        </div>
        {showDetails && (
          <div className="bg-white p-8 shadow-md rounded-md mt-8">
            <div className="flex mb-6 gap-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex-1">
                  <input
                    type="text"
                    className="border p-2 w-full"
                    placeholder={`Textbox ${index + 1}`}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-4 mb-6">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Search
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded">
                Cancel
              </button>
            </div>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  {Array.from({ length: 8 }).map((_, index) => (
                    <th key={index} className="border p-2 text-left">
                      Column {index + 1}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentPageData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {Object.values(row).map((cell, cellIndex) => (
                      <td key={cellIndex} className="border p-2">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
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
                className="border border-[#012555] text-[#012555] font-bold bg-white px-4 py-2 rounded-full"
                style={{ borderRadius: "20%" }}
                onClick={handleFileUpload}
                disabled={isUploading}
              >
                {isUploading ? (
                  "Uploading..."
                ) : isUploaded ? (
                  <IoCheckmarkCircleOutline className="inline text-2xl" />
                ) : (
                  "Upload"
                )}
              </button>
              <button
                className="bg-white font-bold text-red-500 border border-red-500 px-4 py-2 rounded-full"
                style={{ borderRadius: "20%" }}
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </div>
        )}
        {(isUploading || isUploaded) && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            {isUploading ? (
              <div className="text-white text-2xl">Uploading...</div>
            ) : (
              <IoCheckmarkCircleOutline className="text-6xl text-green-500" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Roster;
