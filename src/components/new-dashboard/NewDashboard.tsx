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
        schemeId: [],
        year: []
    });
    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    console.log(filters);
    
    const payload = {
        integrationType: filters.integrationType?.[0] === "Manual Upload" ? [1] :
                     filters.integrationType?.[0] === "Bulk Upload (xlsx)" ? [2] :
                     filters.integrationType?.[0] === "API Integration" ? [3] : null,
        departmentId: filters.departmentId,
        schemeId: filters.schemeId,
        year: filters.year
    };
    
    const { data, isLoading, refetch } = useDashboardData(payload);

    useEffect(()=>{
        refetch();
    },[filters])
    
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Topbar />
            <Filters onFilterChange={handleFilterChange} departmentList = {data?.department} />
            <section className="flex-grow">
                <div className="max-w-7xl mx-auto">
                    <div className="grid gap-6">
                        <AnalyticsCards data={data?.count || []} />
                        <Charts data={data} />
                        <Table />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default NewDashboard;