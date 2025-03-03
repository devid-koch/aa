import dayjs from "dayjs";
import useDashboardData from "../../hooks/useDashboardData";
import Loader from "../loader/loader";
import Topbar from "./Topbar";
import { Link } from "react-router-dom";
import { ListData } from "../../types/types";
import Footer from "./Footer";
import Filters from "./Filters";
import { useEffect, useRef, useState } from "react";

const ListDetails = () => {

    const storedDepartments = JSON.parse(localStorage.getItem("departmentList"));
    const storedSchemes = JSON.parse(localStorage.getItem("schemeList"));

    const schemeNamesArray = storedSchemes?.map(item => item?.schemeName);
    const departmentNamesArray = storedDepartments.map(item => item?.departmentName);

    const [filters, setFilters] = useState({
        data_type: [],
        card: [],
        departmentId: departmentNamesArray ?? [],
        integrationType: [],
        schemeId: schemeNamesArray ?? []
    });


    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    const integrationTypeMapping = {
        "Manual Upload": 1,
        "Bulk Upload (xlsx)": 2,
        "API Integration": 3
    };


    // const payload = filters ? {
    //     integrationType: filters.integrationType?.map(type => integrationTypeMapping[type]) || [],
    //     departmentId: filters.departmentId,
    //     schemeName: Array.isArray(filters.schemeId) ? filters.schemeId.flat() : [],
    //     year: filters.year
    // } : null;


    const payload = filters ? {
        data_type: "",
        card: "candidate",
        departmentId: filters.departmentId.length ? filters.departmentId : departmentNamesArray,
        integrationType: filters.integrationType?.map(type => integrationTypeMapping[type]).length ? filters.integrationType?.map(type => integrationTypeMapping[type]) : [1, 2, 3],
        schemeName: Array.isArray(filters.schemeId) ? filters.schemeId.flat() : schemeNamesArray,
        take: 10,
        skip: 0
    } : null

    const { data, refetch, isLoading } = useDashboardData<ListData>("card-wise-data", payload);

    useEffect(() => {
        refetch();
    }, [filters])

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* {/* Topbar */ }
            <Topbar />

            {/* Breadcrumb */ }
            <div className="">
                <div className="max-w-7xl mx-auto py-2">
                    <div className="flex items-center gap-2">
                        <Link to="/" className="text-gray-500 text-xs hover:underline">Dashboard</Link> <i className="bi bi-chevron-right text-gray-600 text-xs"></i> <p className="text-xs">Department-wise Training Program Analysis – Batch Summary</p>
                    </div>
                </div>
            </div>

            {/* Content */ }
            <section className="flex-grow">
                {/* Search & Filter */ }

                <Filters onFilterChange={ handleFilterChange } departmentList={ storedDepartments } schemesList={ storedSchemes } />


                {/* Extra Filters */ }
                <div className="border-b">
                    <div className="max-w-7xl mx-auto py-2 flex gap-4 items-center justify-between">
                        {/* Filters */ }
                        <div className="flex gap-2 flex-wrap">

                            {/* Unique/Duplicate */ }
                            <button className="relative">
                                <div className="border rounded-md p-1.5 flex gap-2 text-xs" id="filterEntryType">
                                    <p className="text-gray-600">Entry Type</p>
                                    <input type="text" className="w-16 truncate text-orange-600 font-medium text-left bg-transparent text-xs border-0 p-0 pointer-events-none" id="selectedEntryType" value="1 selected" readOnly />
                                    <i className="bi bi-chevron-down text-[.6rem]"></i>
                                </div>
                                <div className="absolute border rounded-md p-2 text-xs mt-1 top-full left-0 text-left w-full z-10 bg-white shadow-md hidden max-h-96 overflow-y-auto" id="dropEntryType">
                                    <ul>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="entry-checkbox" value="5th Pass" checked /> Unique
                                        </li>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="entry-checkbox" value="6th Pass" checked /> Duplicate
                                        </li>
                                    </ul>
                                </div>
                            </button>


                            {/* Qualification */ }
                            <button className="relative">
                                <div className="border rounded-md p-1.5 flex gap-2 text-xs" id="filterQualification">
                                    <p className="text-gray-600">Qualification</p>
                                    <input type="text" className="w-16 truncate text-orange-600 font-medium text-left bg-transparent text-xs border-0 p-0 pointer-events-none" id="selectedQualification" value="1 selected" readOnly />
                                    <i className="bi bi-chevron-down text-[.6rem]"></i>
                                </div>
                                <div className="absolute border rounded-md p-2 text-xs mt-1 top-full left-0 text-left w-full z-10 bg-white shadow-md hidden max-h-96 overflow-y-auto" id="dropQualification">
                                    <ul>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="qual-checkbox" value="5th Pass" checked /> 5th Pass
                                        </li>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="qual-checkbox" value="6th Pass" checked /> 6th Pass
                                        </li>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="qual-checkbox" value="8th Pass" checked /> 8th Pass
                                        </li>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="qual-checkbox" value="10th Pass" checked /> 10th Pass
                                        </li>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="qual-checkbox" value="12th Pass" checked /> 12th Pass
                                        </li>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="qual-checkbox" value="Under Graduate" checked /> Under Graduate
                                        </li>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="qual-checkbox" value="Graduate" checked /> Graduate
                                        </li>
                                    </ul>
                                </div>
                            </button>

                            {/* Gender */ }
                            <button className="relative">
                                <div className="border rounded-md p-1.5 flex gap-2 text-xs" id="filterGender">
                                    <p className="text-gray-600">Gender</p>
                                    <input type="text" className="w-16 truncate text-orange-600 font-medium text-left bg-transparent text-xs border-0 p-0 pointer-events-none" id="selectedGender" value="1 selected" readOnly />
                                    <i className="bi bi-chevron-down text-[.6rem]"></i>
                                </div>
                                <div className="absolute border rounded-md p-2 text-xs mt-1 top-full left-0 text-left w-full z-10 bg-white shadow-md hidden max-h-96 overflow-y-auto" id="dropGender">
                                    <ul>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="gender-checkbox" value="Male" checked /> Male
                                        </li>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="gender-checkbox" value="Female" /> Female
                                        </li>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="gender-checkbox" value="Transgender" /> Transgender
                                        </li>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="gender-checkbox" value="Others" /> Others
                                        </li>
                                    </ul>
                                </div>
                            </button>

                            {/* Batch */ }
                            <button className="relative">
                                <div className="border rounded-md p-1.5 flex gap-2 text-xs" id="filterBatch">
                                    <p className="text-gray-600">Batch</p>
                                    <input type="text" className="w-16 truncate text-orange-600 font-medium text-left bg-transparent text-xs border-0 p-0 pointer-events-none" id="selectedBatch" value="1 selected" readOnly />
                                    <i className="bi bi-chevron-down text-[.6rem]"></i>
                                </div>
                                <div className="absolute border rounded-md p-2 text-xs mt-1 top-full left-0 text-left w-full z-10 bg-white shadow-md hidden max-h-96 overflow-y-auto" id="dropBatch">
                                    <ul>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="batch-checkbox" value="Batch A" checked /> Batch A
                                        </li>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="batch-checkbox" value="Batch B" /> Batch B
                                        </li>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="batch-checkbox" value="Batch C" /> Batch C
                                        </li>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="batch-checkbox" value="Batch D" /> Batch D
                                        </li>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="batch-checkbox" value="Batch E" /> Batch E
                                        </li>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="batch-checkbox" value="Batch F" /> Batch F
                                        </li>
                                    </ul>
                                </div>
                            </button>
                        </div>
                        {/* Download */ }
                        <div className="">
                            <button type="button" className="focus:outline-none text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-xs px-5 py-1.5 flex gap-1 items-center"><i className="bi bi-download"></i> Download Report</button>
                        </div>
                    </div>
                </div>


                {/* Data */ }
                <div className="py-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid gap-6">
                            {/* Table */ }
                            <div className="overflow-hidden">
                                {/* <div className="flex items-center gap-4 justify-between">
                                    <p className="font-semibold mb-6">Department-wise Training Program Analysis – Batch Summary</p>
                                </div> */}
                                <div className="relative overflow-x-auto rounded-md border">
                                    <table className="w-full text-xs text-left rtl:text-right text-gray-500">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-100 align-top">
                                            <tr>
                                                <th scope="col" className="px-4 py-3 text-center w-20">#</th>
                                                <th scope="col" className="px-4 py-3 text-center w-1/12">Unique Key</th>
                                                <th scope="col" className="px-4 py-3">Candidate Name</th>
                                                <th scope="col" className="px-4 py-3 text-center w-1/12">DOB</th>
                                                <th scope="col" className="px-4 py-3 text-center w-1/12">Caste</th>
                                                <th scope="col" className="px-4 py-3 text-center w-1/12">Gender</th>
                                                <th scope="col" className="px-4 py-3 text-center w-1/12">Mobile</th>
                                                <th scope="col" className="px-4 py-3 text-center w-1/12">Department</th>
                                                <th scope="col" className="px-4 py-3 text-center w-1/12">Action</th>
                                            </tr>
                                        </thead>
                                        { isLoading ?
                                            <tbody>
                                                <tr>
                                                    <td colSpan={ 9 } className="px-4 py-3 text-center text-gray-500">Loading...</td>
                                                </tr>
                                            </tbody>
                                            :
                                            <tbody>
                                                { Array.isArray(data?.list) && data?.list?.length > 0 ?
                                                    (data?.list?.map((item, index) => (
                                                        <tr className="bg-white border-b hover:bg-gray-50">
                                                            <td className="px-4 py-3 text-center">{ index + 1 }</td>
                                                            <td className="px-4 py-3 text-center">{ item?.candidateId ?? "N/A" }</td>
                                                            <td className="px-4 py-3">{ item?.vsCandidateName ?? "N/A" }</td>
                                                            <td className="px-4 py-3 text-center">{ dayjs(item?.vsDOB).format("YYYY-MM-DD") ?? "N/A" }</td>
                                                            <td className="px-4 py-3 text-center">{ item?.caste ?? "N/A" }</td>
                                                            <td className="px-4 py-3 text-center">{ item?.vsGender ?? "N/A" }</td>
                                                            <td className="px-4 py-3 text-center">{ item?.vsMobile ?? "N/A" }</td>
                                                            <td className="px-4 py-3 text-center">{ item?.departmentName ?? "N/A" }</td>
                                                            <td className="px-4 py-3 text-center">
                                                                <a href="" className="text-blue-600 hover:underline">View</a>
                                                            </td>
                                                        </tr>
                                                    ))
                                                    ) : (
                                                        <tr>
                                                            <td colSpan={ 9 } className="px-4 py-3 text-center text-gray-500">No Data Found</td>
                                                        </tr>
                                                    ) }
                                            </tbody>
                                        }

                                    </table>
                                </div>
                                {/* Table pagination */ }
                                <div className="flex items-center justify-between gap-4 mt-2">
                                    <div className="">
                                        <p className="text-xs text-gray-500">Showing 1-12 of { data?.total } records</p>
                                    </div>
                                    <div className="border rounded-md divide-x flex text-xs">
                                        <a href="" className="py-1.5 px-3 block pointer-events-none cursor-not-allowed bg-gray-200"><i className="bi bi-chevron-left text-xs"></i></a>
                                        <a href="" className="py-1.5 px-3 block bg-sky-100 text-sky-600 font-bold">1</a>
                                        <a href="" className="py-1.5 px-3 block">2</a>
                                        <a href="" className="py-1.5 px-3 block pointer-events-none">...</a>
                                        <a href="" className="py-1.5 px-3 block">15</a>
                                        <a href="" className="py-1.5 px-3 block"><i className="bi bi-chevron-right text-xs"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */ }
            <Footer />

        </div>
    )
}
export default ListDetails