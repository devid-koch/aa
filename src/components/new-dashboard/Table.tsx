import React from "react";

const Table = () => {
    const tableData = [
        { id: 1, department: "Agriculture", scheme: "ASDM", enrolled: 150, certified: 120, placed: 100 },
        // Add more rows here
    ];

    return (
        <div className="shadow-md sm:rounded-lg bg-white rounded-md overflow-hidden p-6">
            <p className="font-semibold mb-6">Department scheme wise MIS candidates batch analysis</p>
            <div className="relative overflow-x-auto rounded-md border">
                <table className="w-full text-xs text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th scope="col" className="px-4 py-3 text-center w-1/12">S/NO</th>
                            <th scope="col" className="px-4 py-3">Department</th>
                            <th scope="col" className="px-4 py-3">Scheme</th>
                            <th scope="col" className="px-4 py-3 text-center">Enrolled</th>
                            <th scope="col" className="px-4 py-3 text-center">Certified</th>
                            <th scope="col" className="px-4 py-3 text-center">Placed</th>
                        </tr>
                    </thead>
                    <tbody>
                        { tableData.map((row) => (
                            <tr key={ row.id } className="bg-white border-b hover:bg-gray-50">
                                <td className="px-4 py-3 text-center">{ row.id }</td>
                                <td className="px-4 py-3">{ row.department }</td>
                                <td className="px-4 py-3">{ row.scheme }</td>
                                <td className="px-4 py-3 text-center">{ row.enrolled }</td>
                                <td className="px-4 py-3 text-center">{ row.certified }</td>
                                <td className="px-4 py-3 text-center">{ row.placed }</td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;