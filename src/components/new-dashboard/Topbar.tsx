import React from "react";

const Topbar = () => {
    return (
        <section>
            <div className="max-w-7xl mx-auto flex gap-4 items-center justify-between">
                {/* Logo & Name */ }
                <div className="flex gap-2 items-center py-2">
                    <img
                        src="https://convergence.skillmissionassam.org/assets/ASDM_logo-eefc391c.png"
                        alt=""
                        className="h-16"
                    />
                    <div>
                        <h1 className="text-xl font-semibold">Assam Skill Development Mission</h1>
                        <p className="text-gray-500">Convergence Dashboard</p>
                    </div>
                </div>
                {/* Options */ }
                <div className="flex gap-2">
                    {/* Current Date */ }
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
                    <button>
                        <img
                            src="https://images.pexels.com/photos/7956488/pexels-photo-7956488.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt=""
                            className="h-8 w-8 rounded-full object-cover object-top"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Topbar;