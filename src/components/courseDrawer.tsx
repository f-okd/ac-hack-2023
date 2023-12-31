import { useState } from "react";

// Define the structure of each subsection
interface Subsection {
  id: number;
  title: string;
  completed: boolean;
}

// Define the structure of each section
interface Section {
  id: number;
  title: string;
  subsections: Subsection[];
}

export function CourseDrawer() {
  // Example data for sections and subsections
  const [sections, setSections] = useState<Section[]>([
    {
      id: 1,
      title: "Section 1: Introduction to CSS",
      subsections: [
        { id: 1, title: "Lecture 1.1 Course Roadmap", completed: false },
        { id: 2, title: "Lecture 1.2 CSS format", completed: false },
        // More lectures...
      ],
    },
    // More sections...
    {
      id: 2,
      title: "Section 2: Introduction to HTML",
      subsections: [
        { id: 1, title: "Lecture 1.1 Course Roadmap", completed: false },
        { id: 2, title: "Lecture 1.2 HTML Format", completed: false },
        // More lectures...
      ],
    },
    {
      id: 3,
      title: "Section 3: Introduction to Javascript",
      subsections: [
        { id: 1, title: "Lecture 1.1 Course Roadmap", completed: false },
        { id: 2, title: "Lecture 1.2 JS Format", completed: false },
        // More lectures...
      ],
    },
    {
      id: 4,
      title: "Section 4: Introduction to React",
      subsections: [
        { id: 1, title: "Lecture 1.1 Course Roadmap", completed: false },
        { id: 2, title: "Lecture 1.2 React Format", completed: false },
        // More lectures...
      ],
    },
    {
      id: 5,
      title: "Section 5: Test",
      subsections: [
        { id: 1, title: "Develop a website", completed: false },
        // More lectures...
      ],
    },
  ]);

  // Track which section is currently expanded
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  // Handle expanding/collapsing sections
  const toggleSection = (sectionId: number) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  // Handle checkbox change
  const toggleSubsectionCompleted = (
    sectionId: number,
    subsectionId: number,
  ) => {
    setSections(
      sections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            subsections: section.subsections.map((subsection) => {
              if (subsection.id === subsectionId) {
                return { ...subsection, completed: !subsection.completed };
              }
              return subsection;
            }),
          };
        }
        return section;
      }),
    );
  };

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer" type="checkbox" className="drawer-toggle " />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="btn btn-primary drawer-button absolute right-0"
        >
          Navigate Course
        </label>
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay "
        ></label>
        <ul className="menu mt-16 min-h-full w-80 bg-base-200 p-4 text-base-content">
          {/* Sidebar content with collapsible sections */}
          {sections.map((section) => (
            <li key={section.id}>
              <a onClick={() => toggleSection(section.id)}>{section.title}</a>
              {expandedSection === section.id && (
                <ul>
                  {section.subsections.map((subsection) => (
                    <li key={subsection.id}>
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={subsection.completed}
                          onChange={() =>
                            toggleSubsectionCompleted(section.id, subsection.id)
                          }
                          className="checkbox"
                        />
                        <span>{subsection.title}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
