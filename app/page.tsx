"use client";
import { IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import rawCoursesData from "../courses.json";
import ReviewsDisplay from "./(components)/ReviewsDisplay";

interface Course {
  course_prefix: string;
  course_code: number;
  course_title: string;
  average_stars: number;
  total_reviews: number;
  offered_terms: string[];
}

export default function Home() {
  const [coursesData, setCoursesData] = useState<Course[]>([]);
  useEffect(() => {
    return setCoursesData(rawCoursesData);
  }, []);

  return (
    <div className="pl-28 pt-8 w-full">
      <div>
        <p>DevSoc presents</p>
        <h1 className="text-7xl font-bold my-4 text-blue-600">unilectives</h1>
        <p className="font-bold">
          Your one-stop shop for UNSW course and elective reviews.
        </p>
        <div className="flex border-2 border-textbox mt-12 h-12 w-3/4 rounded ">
          <IconSearch className="color-textbox mr-6 mt-2.5 ml-3 " />
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
      <div className="grid grid-cols-3">
        {coursesData.map((course, index) => (
          <div key={index} className="bg-card border-2 m-4">
            <div className="flex">
              <p className="font-bold">
                {course.course_prefix}
                {course.course_code}
              </p>
              <div>
                <ReviewsDisplay />
                <p>{course.total_reviews}</p>
              </div>
            </div>

            <p>{course.course_title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
