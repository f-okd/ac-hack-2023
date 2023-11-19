import ModuleCard from "@/components/modulecards";
import Link from "next/link";
import { Course } from "@/types/model_interfaces";

interface Props {
  courses: any;
}

function Home({courses}: Props) {
  console.log(courses)

  return (
    <main className="container">
      <div className="flex w-full flex-col">
        <div className="card flex grid h-40 items-center rounded-box bg-base-300">
          <p className="ml-40 text-2xl text-left">My Learning</p>
        </div>
      </div>
      <div role="tablist" className="tabs tabs-bordered ml-40 mr-40 pt-4">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab text-base w-max"
          aria-label="My Courses"
          defaultChecked={true}
        />
        <div role="tabpanel" className="tab-content">
          <div className="grid grid-cols-4">
            {courses.map((course: Course) => (
              <ModuleCard key={course.id} id={course.id} title={course.title} author={course.creator} thumbnail={course.thumbnail} rating={course.rating} completed={false}/>
            ))}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab text-base"
          aria-label="Completed"
        />
        <div role="tabpanel" className="tab-content">
          <div className="grid grid-cols-4">
            {/*<ModuleCard title="completed" author="author" rating={5} completed={true}/>
            TODO: get list of modules and display*/}
          </div>
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps() {

  const res = await fetch("http://localhost:3000/database.json");
  const data = await res.json();

  const courses = data.courses;

  return {
    props: {
      courses,
    },
  };
}

export default Home;