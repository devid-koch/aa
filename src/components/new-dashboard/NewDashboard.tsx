import { useEffect, useState } from "react";
import useDashboardData from "../../hooks/useDashboardData";
import AnalyticsCards from "./AnalyticsCards";
import Charts from "./Charts";
import Filters from "./Filters";
import Footer from "./Footer";
import Table from "./Table";
import Topbar from "./Topbar";
import "./style.css"

const NewDashboard = () => {
    const [filters, setFilters] = useState({
        integrationType: null,
        departmentId: [],
        schemeId: null,
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


    const payload = {
        integrationType: filters.integrationType?.map(type => integrationTypeMapping[type]) || [],
        departmentId: filters.departmentId,
        schemeId: Array.isArray(filters.schemeId) ? filters.schemeId.flat() : [],
        year: filters.year
    };


    const { data, refetch } = useDashboardData(payload);

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