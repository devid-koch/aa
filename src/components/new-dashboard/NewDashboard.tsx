import { useEffect, useState } from "react";
import useDashboardData from "../../hooks/useDashboardData";
import AnalyticsCards from "./AnalyticsCards";
import Charts from "./Charts";
import Filters from "./Filters";
import Footer from "./Footer";
import Table from "./Table";
import Topbar from "./Topbar";
import "./style.css"
import Loader from "../loader/loader";
import { DashboardData } from "../../types/types";

const NewDashboard = () => {
    const [filters, setFilters] = useState({
        integrationType: [],
        departmentId: [],
        schemeId: [],
        year: []
    });
    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    const integrationTypeMapping = {
        "Manual Upload": 1,
        "Bulk Upload (xlsx)": 2,
        "API Integration": 3
    };


    const payload = filters ? {
        integrationType: filters.integrationType?.map(type => integrationTypeMapping[type]) || [],
        departmentId: filters.departmentId,
        schemeName: Array.isArray(filters.schemeId) ? filters.schemeId.flat() : [],
        year: filters.year
    } : null;

    const { data, refetch } = payload ? useDashboardData<DashboardData>("home", payload) : { data: null, refetch: () => { } }

    //save the department list and scheme list in local storage
    useEffect(() => {
        if (data?.department) {
            localStorage.setItem("departmentList", JSON.stringify(data.department));
        }
        if (data?.deptBySchemes) {
            localStorage.setItem("schemeList", JSON.stringify(data.deptBySchemes));
        }
    }, [data]);

    useEffect(() => {
        refetch();
    }, [filters])


    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Topbar />
            <Filters onFilterChange={ handleFilterChange } departmentList={ data?.department } schemesList={ data?.deptBySchemes } />
            <section className="flex-grow">
                <div className="max-w-7xl mx-auto">
                    <div className="grid gap-6">
                        <AnalyticsCards data={ data?.count || [] } />
                        <Charts data={ data } />
                        <Table />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default NewDashboard;