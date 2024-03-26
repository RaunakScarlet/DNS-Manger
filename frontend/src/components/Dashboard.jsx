import { useEffect } from "react";
import axios from "axios";

function Dashboard() {
    useEffect(() => {
        const getResults = axios.get("/api/data");
    }, []);

    const records = [
        { type: "A", host: "example.com", pointsTo: "192.0.2.1", ttl: "3600" },
        {
            type: "MX",
            host: "example.com",
            pointsTo: "mail.example.com",
            ttl: "3600",
        },
        { type: "CNAME", host: "www", pointsTo: "example.com", ttl: "3600" },
    ];
    return (
        <div className="flex h-screen">
            <div className="w-[240px] bg-gray-200 p-8">
                <div className="mb-4 ">
                    <h2 className="text-lg mb-2">dashboard</h2>
                </div>
                <h1 className="pink"></h1>
                <div>
                    <h2 className="text-lg  mb-2">logout</h2>
                </div>
            </div>

            <div className="w-full bg-gray-100 p-8">
                <div className="flex items-center gap-3 ">
                    <input
                        type="text"
                        placeholder="...search"
                        className="border-4 border-gray-600 text-end p-1 text-lg"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="30"
                        height="30"
                        viewBox="0 0 50 50"
                        onClick={() => getResults}
                    >
                        <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                    </svg>
                </div>
                <div className="mt-12">
                    <div className="border border-gray-300 rounded-md p-4">
                        <div className="flex font-semibold mb-2">
                            <div className="w-1/5">Type</div>
                            <div className="w-1/5">Host</div>
                            <div className="w-1/5">Points To</div>
                            <div className="w-1/5">TTL</div>
                        </div>

                        {records.map((record, index) => (
                            <div key={index} className="flex items-center mb-2">
                                <div className="w-1/5">{record.type}</div>
                                <div className="w-1/5">{record.host}</div>
                                <div className="w-1/5">{record.pointsTo}</div>
                                <div className="w-1/5">{record.ttl}</div>
                                <div className="w-1/5 flex justify-center">
                                    <button
                                        onClick={() => onEdit(index)}
                                        className="mr-2 text-blue-600 hover:text-blue-800 focus:outline-none"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => onDelete(index)}
                                        className="text-red-600 hover:text-red-800 focus:outline-none"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
