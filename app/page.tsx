"use client";

import { useEffect, useState } from "react";
import rawCoursesData from "../courses.json";
import ReviewsDisplay from "./(components)/ReviewsDisplay";
import { IconSearch } from "@tabler/icons-react";

interface Course {
  course_prefix: string;
  course_code: number;
  course_title: string;
  average_stars: number;
  total_reviews: number;
  offered_terms: string[];
}

export default function Home() {
  const [headerColor, setHeaderColor] = useState("text-blue-600");
  const [coursesData, setCoursesData] = useState<Course[]>([]);

  useEffect(() => {
    setCoursesData(rawCoursesData);
  }, []);

  const changeHeaderColor = () => {
    const colors = [
      "text-blue-600",
      "text-red-600",
      "text-green-600",
      "text-yellow-600",
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setHeaderColor(randomColor);
  };

  return (
    <div className="pt-8 w-full mx-52">
      <div className="mx-4">
        <p>DevSoc presents</p>
        <h1
          className={`text-7xl font-bold my-4 ${headerColor} cursor-pointer`}
          onClick={changeHeaderColor}
        >
          unilectives
        </h1>
        <p className="font-bold">
          Your one-stop shop for UNSW course and elective reviews.
        </p>
        <div className="flex border-2 border-textbox mt-12 h-12 rounded ">
          <IconSearch className="color-textbox mr-6 mt-2.5 ml-3 text-textbox" />
          <input
            className="w-full placeholder-textbox"
            type="text"
            name="test"
            placeholder="Search for a course e.g. COMP1511"
            id="1"
          />
        </div>
        <select
          name="test"
          id="2"
          className="h-12 border-2 mt-4 w-60 rounded border-sort"
        >
          <option value="" className="text-sort">
            Sort by
          </option>
        </select>
      </div>
      <div className="grid grid-cols-3 justify-center">
        {coursesData.map((course, index) => (
          <div key={index} className="bg-card m-4 shadow-lg rounded-xl p-6">
            <div className="flex justify-between mb-4">
              <h1 className="font-bold text-2xl">
                {course.course_prefix}
                {course.course_code}
              </h1>
              <div className="">
                <ReviewsDisplay rating={course.average_stars} />
                <p className="text-xs text-reviews">
                  {course.total_reviews} reviews
                </p>
              </div>
            </div>

            <p className="mb-12 text-sm">{course.course_title}</p>
            <div className="flex">
              {course.offered_terms.map((term, termIndex) => (
                <div
                  key={termIndex}
                  className="bg-term px-2 py-1 rounded-full mr-2 mb-2 text-xs"
                >
                  {term}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
