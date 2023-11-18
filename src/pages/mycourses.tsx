import ModuleCard from "@/components/modulecards";

export default function Home() {

  return (
    <main className="container">
      <div className="flex w-full flex-col">
        <div className="card flex grid h-40 items-center rounded-box bg-base-300">
          <p className="ml-40 text-left">My Learning</p>
        </div>
      </div>
      <div role="tablist" className="tabs tabs-bordered ml-40 mr-40">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="My Courses"
          defaultChecked={true}
        />
        <div role="tabpanel" className="tab-content">
          <ModuleCard title="title" author="author" />
          <ModuleCard title="title" author="author" />
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Completed"
        />
        <div role="tabpanel" className="tab-content"></div>
      </div>
    </main>
  );
}
