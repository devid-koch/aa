const ListDetails = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* {/* Topbar */ }
            <section className="">
                <div className="max-w-7xl mx-auto flex gap-4 items-center justify-between">
                    {/* {/* Logo & Name */ }
                    <div className="flex gap-2 items-center py-2">
                        <img src="https://convergence.skillmissionassam.org/assets/ASDM_logo-eefc391c.png" alt="" className="h-16" />
                        <div className="">
                            <h1 className="text-xl font-semibold">Assam Skill Development Mission</h1>
                            <p className="text-gray-500">Convergence Dashboard</p>
                        </div>
                    </div>
                    {/* {/* Options */ }
                    <div className="flex gap-2">
                        {/* {/* Current Date */ }
                        <div className="border rounded-md p-2 flex gap-2 text-xs">
                            <i className="bi bi-calendar-week"></i>
                            <p className="text-gray-600">Feb 20, 2025</p>
                        </div>
                        {/* Theme Changer */ }
                        <label htmlFor="themeChanger" className="border rounded-md p-2 flex gap-2 text-xs cursor-pointer">
                            <input type="checkbox" className="peer/theme hidden" id="themeChanger" />
                            <i className="bi bi-brightness-high peer-checked/theme:hidden"></i>
                            <i className="bi bi-moon hidden peer-checked/theme:block"></i>
                        </label>
                        {/* User */ }
                        <button className="">
                            <img src="https://images.pexels.com/photos/7956488/pexels-photo-7956488.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="h-8 w-8 rounded-full object-cover object-top" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Breadcrumb */ }
            <div className="">
                <div className="max-w-7xl mx-auto py-2">
                    <div className="flex items-center gap-2">
                        <a href="./Dashboard.html" className="text-gray-500 text-xs hover:underline">Dashboard</a> <i className="bi bi-chevron-right text-gray-600 text-xs"></i> <p className="text-xs">Department-wise Training Program Analysis – Batch Summary</p>
                    </div>
                </div>
            </div>

            {/* Content */ }
            <section className="flex-grow">
                {/* Search & Filter */ }
                <div className="border-b mt-10">
                    <div className="max-w-7xl mx-auto py-2 flex gap-4 items-center justify-between">
                        {/* Search */ }
                        <div className="relative">
                            <input type="text" className="pl-8 border-none focus:border-none focus:ring-0 text-xs bg-transparent" placeholder="Search htmlFor something" />
                            <i className="bi bi-search absolute top-1/2 left-0 -translate-y-1/2 text-gray-800"></i>
                        </div>
                        {/* Filters */ }
                        <div className="flex gap-2 flex-nowrap">

                            {/* Integration Type */ }
                            <button className="relative flex-shrink-0">
                                <div className="border rounded-md p-1.5 flex gap-2 text-xs" id="filterIType">
                                    <p className="text-gray-600">Integration Type</p>
                                    <input type="text" className="w-16 truncate text-orange-600 font-medium text-left bg-transparent text-xs border-0 p-0 pointer-events-none" id="selectedIType" value="Manual Upload" />
                                    <i className="bi bi-chevron-down text-[.6rem]"></i>
                                </div>
                                <div className="absolute border rounded-md p-2 text-xs mt-1 top-full left-0 text-left w-full z-10 bg-white shadow-md hidden max-h-96 overflow-y-auto" id="dropIType">
                                    <ul>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="iType-checkbox" value="Manual Upload" checked /> Manual Upload
                                        </li>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="iType-checkbox" value="Bulk Upload (xlsx)" /> Bulk Upload (xlsx)
                                        </li>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="iType-checkbox" value="API Integration" /> API Integration
                                        </li>
                                    </ul>
                                </div>
                            </button>

                            {/* Department */ }
                            <button className="relative flex-shrink-0">
                                <div className="border rounded-md p-1.5 flex gap-2 text-xs" id="filterDepartment">
                                    <p className="text-gray-600">Department</p>
                                    <input type="text" className="w-16 truncate text-orange-600 font-medium text-left bg-transparent text-xs border-0 p-0 pointer-events-none" id="selectedDepartment" value="3 selected" />
                                    <i className="bi bi-chevron-down text-[.6rem]"></i>
                                </div>
                                <div className="absolute border rounded-md p-2 text-xs mt-1 top-full left-0 text-left w-full z-10 bg-white shadow-md hidden max-h-96 overflow-y-auto" id="dropDepartment">
                                    <ul>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="department-checkbox" value="Agriculture" checked /> Agriculture
                                        </li>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="department-checkbox" value="Health" checked /> Health
                                        </li>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="department-checkbox" value="Tourism" /> Tourism
                                        </li>
                                    </ul>
                                </div>
                            </button>

                            {/* Scheme */ }
                            <button className="relative flex-shrink-0">
                                <div className="border rounded-md p-1.5 flex gap-2 text-xs" id="filterScheme">
                                    <p className="text-gray-600">Scheme</p>
                                    <input type="text" className="w-16 truncate text-orange-600 font-medium text-left bg-transparent text-xs border-0 p-0 pointer-events-none" id="selectedScheme" value="1 selected" readOnly />
                                    <i className="bi bi-chevron-down text-[.6rem]"></i>
                                </div>
                                <div className="absolute border rounded-md p-2 text-xs mt-1 top-full left-0 text-left w-full z-10 bg-white shadow-md hidden max-h-96 overflow-y-auto" id="dropScheme">
                                    <ul>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="scheme-checkbox" value="DAY-NULM" checked /> DAY-NULM
                                        </li>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="scheme-checkbox" value="Divyangjan Scheme" checked /> Divyangjan Scheme
                                        </li>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="scheme-checkbox" value="JJM-RPL" checked /> JJM-RPL
                                        </li>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="scheme-checkbox" value="PLSDTP" checked /> PLSDTP
                                        </li>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="scheme-checkbox" value="PLSDTP-KSK" checked /> PLSDTP-KSK
                                        </li>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="scheme-checkbox" value="PM-AJAY" checked /> PM-AJAY
                                        </li>
                                    </ul>
                                </div>
                            </button>

                            {/* Year */ }
                            <button className="relative flex-shrink-0">
                                <div className="border rounded-md p-1.5 flex gap-2 text-xs" id="filterYear">
                                    <p className="text-gray-600">Year</p>
                                    <input type="text" className="w-16 truncate text-orange-600 font-medium text-left bg-transparent text-xs border-0 p-0 pointer-events-none" id="selectedYear" value="1 selected" readOnly />
                                    <i className="bi bi-chevron-down text-[.6rem]"></i>
                                </div>
                                <div className="absolute border rounded-md p-2 text-xs mt-1 top-full left-0 text-left w-full z-10 bg-white shadow-md hidden max-h-96 overflow-y-auto" id="dropYear">
                                    <ul>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="year-checkbox" value="2025" checked /> 2025
                                        </li>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="year-checkbox" value="2024" /> 2024
                                        </li>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="year-checkbox" value="2023" /> 2023
                                        </li>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="year-checkbox" value="2022" /> 2022
                                        </li>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="year-checkbox" value="2021" /> 2021
                                        </li>
                                        <li className="py-1 px-3 items-center flex gap-1">
                                            <input type="checkbox" className="year-checkbox" value="2020" /> 2020
                                        </li>
                                    </ul>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

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
                                        <tbody>
                                            <tr className="bg-white border-b hover:bg-gray-50">
                                                <td className="px-4 py-3 text-center">1</td>
                                                <td className="px-4 py-3 text-center">A12345</td>
                                                <td className="px-4 py-3">Rahul Sharma</td>
                                                <td className="px-4 py-3 text-center">1992-05-14</td>
                                                <td className="px-4 py-3 text-center">General</td>
                                                <td className="px-4 py-3 text-center">Male</td>
                                                <td className="px-4 py-3 text-center">9876543210</td>
                                                <td className="px-4 py-3 text-center">Agriculture</td>
                                                <td className="px-4 py-3 text-center">
                                                    <a href="" className="text-blue-600 hover:underline">View</a>
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b hover:bg-gray-50">
                                                <td className="px-4 py-3 text-center">2</td>
                                                <td className="px-4 py-3 text-center">B67890</td>
                                                <td className="px-4 py-3">Priya Verma</td>
                                                <td className="px-4 py-3 text-center">1995-09-21</td>
                                                <td className="px-4 py-3 text-center">OBC</td>
                                                <td className="px-4 py-3 text-center">Female</td>
                                                <td className="px-4 py-3 text-center">9871234567</td>
                                                <td className="px-4 py-3 text-center">Agriculture</td>
                                                <td className="px-4 py-3 text-center">
                                                    <a href="" className="text-blue-600 hover:underline">View</a>
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b hover:bg-gray-50">
                                                <td className="px-4 py-3 text-center">3</td>
                                                <td className="px-4 py-3 text-center">C54321</td>
                                                <td className="px-4 py-3">Amit Kumar</td>
                                                <td className="px-4 py-3 text-center">1990-07-10</td>
                                                <td className="px-4 py-3 text-center">SC</td>
                                                <td className="px-4 py-3 text-center">Male</td>
                                                <td className="px-4 py-3 text-center">9812345678</td>
                                                <td className="px-4 py-3 text-center">Agriculture</td>
                                                <td className="px-4 py-3 text-center">
                                                    <a href="" className="text-blue-600 hover:underline">View</a>
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b hover:bg-gray-50">
                                                <td className="px-4 py-3 text-center">4</td>
                                                <td className="px-4 py-3 text-center">D98765</td>
                                                <td className="px-4 py-3">Sneha Gupta</td>
                                                <td className="px-4 py-3 text-center">1994-03-18</td>
                                                <td className="px-4 py-3 text-center">ST</td>
                                                <td className="px-4 py-3 text-center">Female</td>
                                                <td className="px-4 py-3 text-center">9823456789</td>
                                                <td className="px-4 py-3 text-center">Agriculture</td>
                                                <td className="px-4 py-3 text-center">
                                                    <a href="" className="text-blue-600 hover:underline">View</a>
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b hover:bg-gray-50">
                                                <td className="px-4 py-3 text-center">5</td>
                                                <td className="px-4 py-3 text-center">E13579</td>
                                                <td className="px-4 py-3">Vikram Singh</td>
                                                <td className="px-4 py-3 text-center">1988-11-30</td>
                                                <td className="px-4 py-3 text-center">General</td>
                                                <td className="px-4 py-3 text-center">Male</td>
                                                <td className="px-4 py-3 text-center">9890123456</td>
                                                <td className="px-4 py-3 text-center">Agriculture</td>
                                                <td className="px-4 py-3 text-center">
                                                    <a href="" className="text-blue-600 hover:underline">View</a>
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b hover:bg-gray-50">
                                                <td className="px-4 py-3 text-center">6</td>
                                                <td className="px-4 py-3 text-center">F24680</td>
                                                <td className="px-4 py-3">Meera Das</td>
                                                <td className="px-4 py-3 text-center">1997-06-25</td>
                                                <td className="px-4 py-3 text-center">OBC</td>
                                                <td className="px-4 py-3 text-center">Female</td>
                                                <td className="px-4 py-3 text-center">9845678901</td>
                                                <td className="px-4 py-3 text-center">Agriculture</td>
                                                <td className="px-4 py-3 text-center">
                                                    <a href="" className="text-blue-600 hover:underline">View</a>
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b hover:bg-gray-50">
                                                <td className="px-4 py-3 text-center">7</td>
                                                <td className="px-4 py-3 text-center">G11223</td>
                                                <td className="px-4 py-3">Anil Yadav</td>
                                                <td className="px-4 py-3 text-center">1989-08-15</td>
                                                <td className="px-4 py-3 text-center">SC</td>
                                                <td className="px-4 py-3 text-center">Male</td>
                                                <td className="px-4 py-3 text-center">9876001234</td>
                                                <td className="px-4 py-3 text-center">Agriculture</td>
                                                <td className="px-4 py-3 text-center">
                                                    <a href="" className="text-blue-600 hover:underline">View</a>
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b hover:bg-gray-50">
                                                <td className="px-4 py-3 text-center">8</td>
                                                <td className="px-4 py-3 text-center">H55678</td>
                                                <td className="px-4 py-3">Kavita Sen</td>
                                                <td className="px-4 py-3 text-center">1993-01-05</td>
                                                <td className="px-4 py-3 text-center">ST</td>
                                                <td className="px-4 py-3 text-center">Female</td>
                                                <td className="px-4 py-3 text-center">9834567890</td>
                                                <td className="px-4 py-3 text-center">Agriculture</td>
                                                <td className="px-4 py-3 text-center">
                                                    <a href="" className="text-blue-600 hover:underline">View</a>
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b hover:bg-gray-50">
                                                <td className="px-4 py-3 text-center">9</td>
                                                <td className="px-4 py-3 text-center">I99887</td>
                                                <td className="px-4 py-3">Rajesh Pillai</td>
                                                <td className="px-4 py-3 text-center">1987-12-12</td>
                                                <td className="px-4 py-3 text-center">General</td>
                                                <td className="px-4 py-3 text-center">Male</td>
                                                <td className="px-4 py-3 text-center">9876509876</td>
                                                <td className="px-4 py-3 text-center">Agriculture</td>
                                                <td className="px-4 py-3 text-center">
                                                    <a href="" className="text-blue-600 hover:underline">View</a>
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b hover:bg-gray-50">
                                                <td className="px-4 py-3 text-center">10</td>
                                                <td className="px-4 py-3 text-center">J33445</td>
                                                <td className="px-4 py-3">Sonia Dutta</td>
                                                <td className="px-4 py-3 text-center">1998-04-22</td>
                                                <td className="px-4 py-3 text-center">OBC</td>
                                                <td className="px-4 py-3 text-center">Female</td>
                                                <td className="px-4 py-3 text-center">9801122334</td>
                                                <td className="px-4 py-3 text-center">Agriculture</td>
                                                <td className="px-4 py-3 text-center">
                                                    <a href="" className="text-blue-600 hover:underline">View</a>
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b hover:bg-gray-50">
                                                <td className="px-4 py-3 text-center">11</td>
                                                <td className="px-4 py-3 text-center">K77889</td>
                                                <td className="px-4 py-3">Rohan Mehta</td>
                                                <td className="px-4 py-3 text-center">1991-07-19</td>
                                                <td className="px-4 py-3 text-center">General</td>
                                                <td className="px-4 py-3 text-center">Male</td>
                                                <td className="px-4 py-3 text-center">9812233445</td>
                                                <td className="px-4 py-3 text-center">Agriculture</td>
                                                <td className="px-4 py-3 text-center">
                                                    <a href="" className="text-blue-600 hover:underline">View</a>
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b hover:bg-gray-50">
                                                <td className="px-4 py-3 text-center">12</td>
                                                <td className="px-4 py-3 text-center">L11223</td>
                                                <td className="px-4 py-3">Neha Kapoor</td>
                                                <td className="px-4 py-3 text-center">1996-10-08</td>
                                                <td className="px-4 py-3 text-center">OBC</td>
                                                <td className="px-4 py-3 text-center">Female</td>
                                                <td className="px-4 py-3 text-center">9877654321</td>
                                                <td className="px-4 py-3 text-center">Agriculture</td>
                                                <td className="px-4 py-3 text-center">
                                                    <a href="" className="text-blue-600 hover:underline">View</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* Table pagination */ }
                                <div className="flex items-center justify-between gap-4 mt-2">
                                    <div className="">
                                        <p className="text-xs text-gray-500">Showing 1-12 of 177 records</p>
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
            <section className="mt-auto border-t">
                <div className="max-w-7xl mx-auto py-4">
                    <p className="text-xs text-center text-gray-500 font-light">Copyright &copy; 2024 Assam Skill Development Mission | All Rights Reserved</p>
                </div>
            </section>

        </div>
    )
}
export default ListDetails