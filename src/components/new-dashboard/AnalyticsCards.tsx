import React from "react";

const AnalyticsCards = ({data}) => {
    // const cardsData = [
    //     { label: "Departments", value: 10, icon: "bi-stack", color: "sky" },
    //     { label: "Schemes", value: 9, icon: "bi-stack", color: "purple" },
    //     // Add more card data here
    // ];

    const icons = {
        departments: 'bi-building',    // Example icon class
        schemes: 'bi-file-earmark',    // Example icon class
        sectors: 'bi-globe',           // Example icon class
        courses: 'bi-book',            // Example icon class
        tps: 'bi-clock',               // Example icon class
        tcs: 'bi-person',              // Example icon class
        batchs: 'bi-layers',           // Example icon class
        candidates: 'bi-person-lines-fill',  // Example icon class
        trainers: 'bi-person-circle',  // Example icon class
        assessors: 'bi-person-check',  // Example icon class
        assessments: 'bi-check-circle', // Example icon class
        placements: 'bi-briefcase',    // Example icon class
      };
      
      const colors = {
        departments: 'blue',
        schemes: 'green',
        sectors: 'yellow',
        courses: 'red',
        tps: 'purple',
        tcs: 'teal',
        batchs: 'indigo',
        candidates: 'orange',
        trainers: 'pink',
        assessors: 'brown',
        assessments: 'gray',
        placements: 'cyan',
      };

    return (
        <div className="grid grid-cols-6 gap-6">
            {Object.keys(data)?.map((card, index) => (
                <div key={ index } className="shadow-md sm:rounded-lg bg-white rounded-md p-4 flex items-center gap-4">
                    <div className={ `flex-shrink-0 px-3 py-1.5 bg-${colors[card]}-100 rounded-full` }>
                        <i className={`bi ${icons[card]} text-${colors[card]}-600 text-xs`}></i>
                    </div>
                    <div>
                        {/* <p className="text-xs text-gray-400">{ card.label }</p> */}
                        <p className="text-xs text-gray-400">{card.charAt(0).toUpperCase() + card.slice(1)}:</p>
                        <p className="text-sm font-bold">{data[card]}</p>
                    </div>
                </div>
            )) }
        </div>
    );
};

export default AnalyticsCards;