import React from "react";

const Table = () => {
    const tableData = [
        { id: 1, department: "Agriculture", scheme: "ASDM", enrolled: 150, certified: 120, placed: 100 },
        // Add more rows here
    ];

    return (
        <div className="shadow-md sm:rounded-lg bg-white rounded-md overflow-hidden p-6">
            <p className="font-semibold mb-6">Department-wise Training Program Analysis – Batch Summary</p>
            <div className="relative overflow-x-auto rounded-md border">
                <table className="w-full text-xs text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                        <th scope="col" className="px-4 py-3 text-center w-20">#</th>
                        <th scope="col" className="px-4 py-3">Department</th>
                        <th scope="col" className="px-4 py-3">Scheme</th>
                        <th scope="col" className="px-4 py-3 text-center w-1/12">Target</th>
                        <th scope="col" className="px-4 py-3 text-center w-1/12">Candidates</th>
                        <th scope="col" className="px-4 py-3 text-center w-1/12">Training Partners</th>
                        <th scope="col" className="px-4 py-3 text-center w-1/12">Training Centers</th>
                        <th scope="col" className="px-4 py-3 text-center w-1/12">Trainers</th>
                        </tr>
                    </thead>
                    <tbody>
                  <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-4 py-3 text-center">1</td>
                    <td className="px-4 py-3">Health</td>
                    <td className="px-4 py-3">Medical Training</td>
                    <td className="px-4 py-3 text-center">150</td>
                    <td className="px-4 py-3 text-center">150</td>
                    <td className="px-4 py-3 text-center">120</td>
                    <td className="px-4 py-3 text-center">100</td>
                    <td className="px-4 py-3 text-center">300</td>
                  </tr>
                  <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-4 py-3 text-center">2</td>
                    <td className="px-4 py-3">Education</td>
                    <td className="px-4 py-3">Teacher Training</td>
                    <td className="px-4 py-3 text-center">200</td>
                    <td className="px-4 py-3 text-center">200</td>
                    <td className="px-4 py-3 text-center">180</td>
                    <td className="px-4 py-3 text-center">100</td>
                    <td className="px-4 py-3 text-center">560</td>
                  </tr>
                  <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-4 py-3 text-center">3</td>
                    <td className="px-4 py-3">Agriculture</td>
                    <td className="px-4 py-3">Farming Skills</td>
                    <td className="px-4 py-3 text-center">120</td>
                    <td className="px-4 py-3 text-center">120</td>
                    <td className="px-4 py-3 text-center">90</td>
                    <td className="px-4 py-3 text-center">85</td>
                    <td className="px-4 py-3 text-center">170</td>
                  </tr>
                  <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-4 py-3 text-center">4</td>
                    <td className="px-4 py-3">IT</td>
                    <td className="px-4 py-3">Software Development</td>
                    <td className="px-4 py-3 text-center">300</td>
                    <td className="px-4 py-3 text-center">300</td>
                    <td className="px-4 py-3 text-center">250</td>
                    <td className="px-4 py-3 text-center">200</td>
                    <td className="px-4 py-3 text-center">1540</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="px-4 py-3 text-center">5</td>
                    <td className="px-4 py-3">Manufacturing</td>
                    <td className="px-4 py-3">Industrial Training</td>
                    <td className="px-4 py-3 text-center">180</td>
                    <td className="px-4 py-3 text-center">180</td>
                    <td className="px-4 py-3 text-center">140</td>
                    <td className="px-4 py-3 text-center">130</td>
                    <td className="px-4 py-3 text-center">352</td>
                  </tr>
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;