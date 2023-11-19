import ModuleCard from "@/components/modulecards";
import Link from "next/link";

export default function Home() {

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
          className="tab text-base"
          aria-label="My Courses"
          defaultChecked={true}
        />
        <div role="tabpanel" className="tab-content">
          <div className="grid grid-cols-4">
            <ModuleCard title="title" author="author" rating={5} completed={false}/>
            <ModuleCard title="title" author="author" rating={2} completed={false}/>
            <ModuleCard title="title" author="author" rating={3} completed={false}/>
            <ModuleCard title="title" author="author" rating={4} completed={false}/>
            <ModuleCard title="title" author="author" rating={4} completed={false}/>
            <ModuleCard title="title" author="author" rating={2} completed={false}/>
            {/*TODO: get list of modules and display*/}
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
            <ModuleCard title="completed" author="author" rating={5} completed={true}/>
            {/*TODO: get list of modules and display*/}
          </div>
        </div>
      </div>
    </main>
  );
}
