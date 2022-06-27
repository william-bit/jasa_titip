import React, { useState } from "react";
import { DateRange, Range } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { CalendarIcon } from "@heroicons/react/outline";

const CheckInView = () => {
  const [state, setState] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: undefined,
      key: "selection",
    },
  ]);
  const [showCalendar, setShowCalendar] = useState(false);

  const items = [];
  for (let index = 1; index <= 5; index++) {
    items.push(
      <div>
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <label className="ml-1">{index} Star</label>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full p-2 border rounded-lg">
      <label className="mt-2 mb-0">Minimum Ranting</label>
      <div className="ml-1">{items}</div>
    </div>
  );
};

export default CheckInView;
