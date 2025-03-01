import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const Filters = ({ onFilterChange, departmentList, schemesList }) => {
    const integrationTypes = ["Manual Upload", "Bulk Upload (xlsx)", "API Integration"];
    const [selectedIType, setSelectedIType] = useState(integrationTypes);
    const [selectedSchemes, setSelectedSchemes] = useState([]);
    const [selectedYear, setSelectedYear] = useState("1 selected");
    const [openDropdown, setOpenDropdown] = useState(null);
    const [selectedDepartments, setSelectedDepartments] = useState(["ASDM", "Agriculture", "SJ&E", "Tourism", "TA(plain)", "TT&AW", "Handloom", "H&UA",]);

    const handleCheckboxChange = (setter) => (e) => {
        const value = e.target.value;
        setter(value);
    };

    const handleMultipleCheckboxChange = (value, setter) => {
        setter((prev) => {
            if (prev.length === 1 && prev.includes(value)) {
                return prev;
            }
            return prev.includes(value)
                ? prev.filter((item) => item !== value)
                : [...prev, value];
        });
    };
    const handleDropdownToggle = (dropdownId) => {
        setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
    };

    useEffect(() => {
        onFilterChange({
            integrationType: selectedIType,
            departmentId: selectedDepartments,
            schemeId: [selectedSchemes],
            year: [selectedYear]
        });
    }, [selectedIType, selectedDepartments, selectedSchemes, selectedYear]);

    const handleIntregationTypeCheckboxChange = (value) => {
        setSelectedIType((prev) => {
            if (prev.length === 1 && prev.includes(value)) {
                return prev;
            }
            return prev.includes(value)
                ? prev.filter((item) => item !== value)
                : [...prev, value];
        });
    };

    // const handleDepartmentCheckboxChange = (departmentName) => {
    //     setSelectedDepartments((prevSelected) => {
    //       if (prevSelected.includes(departmentName)) {
    //         return prevSelected.filter(name => name !== departmentName); // Deselect if already selected
    //       } else {
    //         return [...prevSelected, departmentName]; // Select if not already selected
    //       }
    //     });
    //   };


    const handleDepartmentCheckboxChange = (departmentName) => {
        setSelectedDepartments((prevSelected) => {
            if (prevSelected.includes(departmentName)) {
                return prevSelected.filter(name => name !== departmentName); // Deselect if already selected
            } else {
                return [...prevSelected, departmentName]; // Select if not already selected
            }
        });
    };

    const isAllSelected = selectedDepartments?.length === departmentList?.length;
    const handleSelectAll = () => {
        if (selectedDepartments.length === departmentList.length) {
            setSelectedDepartments(["ASDM"]);
        } else {
            setSelectedDepartments(departmentList.map(item => item.departmentName));
        }
    };

    return (
        <div className="border-b my-5">
            <div className="max-w-7xl mx-auto py-2 flex gap-4 items-center justify-between">
                {/* Search */ }
                <div className="relative">
                    <input
                        type="text"
                        className="pl-8 border-none focus:border-none focus:ring-0 text-xs bg-transparent"
                        placeholder="Search for something"
                    />
                    <i className="bi bi-search absolute top-1/2 left-0 -translate-y-1/2 text-gray-800"></i>
                </div>
                {/* Filters */ }
                <div className="flex gap-2">
                    {/* Integration Type */ }
                    <div className="relative">
                        <div className="border rounded-md p-2 flex gap-2 text-xs" id="filterIType"
                            onClick={ () => handleDropdownToggle('integration') }>
                            <p className="text-gray-600">Integration Type</p>
                            <input
                                type="text"
                                className="w-16 truncate text-orange-600 font-medium text-left bg-transparent text-xs border-0 p-0 pointer-events-none"
                                value={ selectedIType.join(", ") }
                                readOnly
                            />
                            <i className="bi bi-chevron-down"></i>
                        </div>
                        { openDropdown === 'integration' && (
                            <div className="absolute border rounded-md p-2 text-xs mt-1 top-full left-0 text-left w-full z-10 bg-white shadow-md">
                                <ul>
                                    { integrationTypes.map((type) => (
                                        <li key={ type } className="py-1 px-3 items-center flex gap-1">
                                            <input
                                                type="checkbox"
                                                value={ type }
                                                checked={ selectedIType.includes(type) }
                                                onChange={ () => handleIntregationTypeCheckboxChange(type) }
                                            />
                                            { type }
                                        </li>
                                    )) }
                                </ul>
                            </div>
                        ) }
                    </div>
                    <div className="relative">
                        <div className="border rounded-md p-2 flex gap-2 text-xs" id="filterDepartment" onClick={ () => handleDropdownToggle('department') }>
                            <p className="text-gray-600">Department</p>
                            <input
                                type="text"
                                className="w-16 truncate text-orange-600 font-medium text-left bg-transparent text-xs border-0 p-0 pointer-events-none"
                                value={ selectedDepartments }
                                readOnly
                            />
                            <i className="bi bi-chevron-down"></i>
                        </div>
                        { openDropdown === 'department' && (
                            <div className="absolute border rounded-md p-2 text-xs mt-1 top-full left-0 text-left w-full z-10 bg-white shadow-md">
                                <ul>
                                    <li key="all" className="py-1 px-3 items-center flex gap-1">
                                        <input
                                            type="checkbox"
                                            checked={ isAllSelected }
                                            onChange={ handleSelectAll }
                                        />
                                        All
                                    </li>
                                    { departmentList?.map((item, index) => {
                                        return (
                                            <li key={ index } className="py-1 px-3 items-center flex gap-1">
                                                <input
                                                    type="checkbox"
                                                    value={ item.departmentName }
                                                    checked={ selectedDepartments.includes(item.departmentName) }
                                                    onChange={ () => handleDepartmentCheckboxChange(item.departmentName) }
                                                />{ " " }
                                                { item?.departmentName }
                                            </li>
                                        )
                                    }) }
                                </ul>
                            </div>
                        ) }
                    </div>
                    <div className="relative">
                        <div className="border rounded-md p-2 flex gap-2 text-xs" id="filterScheme" onClick={ () => handleDropdownToggle('scheme') }>
                            <p className="text-gray-600">Scheme</p>
                            <input
                                type="text"
                                className="w-24 truncate text-orange-600 font-medium text-left bg-transparent text-xs border-0 p-0 pointer-events-none"
                                value={ selectedSchemes }
                                readOnly
                            />
                            <i className="bi bi-chevron-down"></i>
                        </div>
                        { openDropdown === 'scheme' && (
                            <div className="absolute border rounded-md p-2 text-xs mt-1 top-full left-0 text-left w-full z-10 bg-white shadow-md">
                                <ul>
                                    { schemesList?.map((item, index) => (
                                        <li key={ index } className="py-1 px-3 items-center flex gap-1">
                                            <input
                                                type="checkbox"
                                                value={ item?.schemeName }
                                                checked={ selectedSchemes.includes(item?.schemeName) }
                                                onChange={ () => handleMultipleCheckboxChange(item?.schemeName, setSelectedSchemes) }
                                            />
                                            { item?.schemeName }
                                        </li>
                                    )) }
                                </ul>
                            </div>
                        ) }
                    </div>
                    <div className="relative">
                        <div className="border rounded-md p-2 flex gap-2 text-xs" id="filterYear" onClick={ () => handleDropdownToggle('year') }>
                            <p className="text-gray-600">Scheme Year</p>
                            <input
                                type="text"
                                className="w-16 truncate text-orange-600 font-medium text-left bg-transparent text-xs border-0 p-0 pointer-events-none"
                                value={ selectedYear }
                                readOnly
                            />
                            <i className="bi bi-chevron-down"></i>
                        </div>
                        { openDropdown === 'year' && (
                            <div className="absolute border rounded-md p-2 text-xs mt-1 top-full left-0 text-left w-full z-10 bg-white shadow-md">
                                <ul>
                                    <li className="py-1 px-3 items-center flex gap-1">
                                        <input
                                            type="checkbox"
                                            value="2025"
                                            checked={ selectedYear === "2025" }
                                            onChange={ handleCheckboxChange(setSelectedYear) }
                                        />{ " " }
                                        2025
                                    </li>
                                    <li className="py-1 px-3 items-center flex gap-1">
                                        <input
                                            type="checkbox"
                                            value="2024"
                                            checked={ selectedYear === "2024" }
                                            onChange={ handleCheckboxChange(setSelectedYear) }
                                        />{ " " }
                                        2024
                                    </li>
                                    <li className="py-1 px-3 items-center flex gap-1">
                                        <input
                                            type="checkbox"
                                            value="2023"
                                            checked={ selectedYear === "2023" }
                                            onChange={ handleCheckboxChange(setSelectedYear) }
                                        />{ " " }
                                        2023
                                    </li>
                                </ul>
                            </div>
                        ) }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filters;