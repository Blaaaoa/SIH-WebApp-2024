"use client";

import React, { useState, useEffect } from "react";

const TimelineGraph = () => {
  const [selectedDateIndex, setSelectedDateIndex] = useState<number | null>(null);

  // Full schedule from the provided PDF
  const schedule = [
    {
      date: "2024-12-10",
      events: [
        "Registration of Teams",
        "Equipment and consumable rechecks",
        "Audio/Video setup testing",
      ],
    },
    {
      date: "2024-12-11",
      events: [
        "8:00 AM: Inauguration of Grand Finale SIH 2024",
        "9:30 AM: Hackathon for Hardware Edition goes Live",
        "11:30 AM - 1:00 PM: First Round of Mentoring Session",
        "6:30 PM - 8:00 PM: First Round of Evaluation",
      ],
    },
    {
      date: "2024-12-12",
      events: [
        "6:00 AM - 7:00 AM: Yoga Session",
        "8:00 AM - 11:00 AM: Hackathon continues",
        "6:00 PM - 8:00 PM: Second Round of Mentoring Session",
      ],
    },
    {
      date: "2024-12-13",
      events: [
        "10:00 AM - 11:00 AM: Innovation Talk",
        "6:00 PM - 8:00 PM: Second Round of Evaluation",
      ],
    },
    {
      date: "2024-12-14",
      events: [
        "4:00 PM - 5:00 PM: Talk on Designing",
        "6:00 PM - 8:00 PM: Third Round of Mentoring Session",
      ],
    },
    {
      date: "2024-12-15",
      events: [
        "8:00 AM - 3:00 PM: Hackathon continues",
        "3:00 PM - 5:00 PM: Final Round of Evaluation",
        "6:30 PM - 8:00 PM: Valedictory Session and Prize Distribution",
      ],
    },
  ];

  // Set the default selected date if today's date exists in the schedule
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const index = schedule.findIndex((event) => event.date === today);

    // Only set the default date on the initial render
    if (index >= 0 && selectedDateIndex === null) {
      setSelectedDateIndex(index);
    }
  }, [schedule, selectedDateIndex]);

  const handleSelectDate = (index: number) => {
    setSelectedDateIndex(index);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Timeline of Events</h2>
      <div className="relative w-full max-w-4xl">
        {/* Vertical Timeline */}
         <div className="border-l-4 border-gray-300 relative">
          {schedule.map((day, index) => (
            <div
              key={index}
              className={`mb-6 pl-1 relative flex items-start ${
            selectedDateIndex === index ? "bg-gray-100 p-4 rounded-md" : ""
              }`}
            >
              {/* Date Label */}
              <div className="flex items-center mb-2">
                <div
                  className={`h-4 w-4 ${
                    selectedDateIndex === index ? "bg-blue-600" : "bg-gray-400"
                  } rounded-full cursor-pointer`}
                  onClick={() => handleSelectDate(index)}
                ></div>
                <h3
                  className={`ml-3 font-bold text-gray-800 text-lg cursor-pointer ${
                    selectedDateIndex === index ? "text-blue-600" : ""
                  }`}
                  onClick={() => handleSelectDate(index)}
                >
                  {new Date(day.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </h3>
              </div>

              {/* Display Schedule when selected */}
              {selectedDateIndex === index && (
                <div className="ml-6">
                  <ul className="text-gray-700">
                    {day.events.map((event, idx) => (
                      <li key={idx} className="mb-2">
                        - {event}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineGraph;