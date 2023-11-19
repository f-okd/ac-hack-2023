import { useState } from "react";
import { CourseDrawer } from "@/components/courseDrawer";
import CourseNavbar from "@/components/courseNavbar";
import VideoPlayer from "@/components/videoPlayer";

type TabName = "overview" | "QA";

export default function CoursePage() {
  const [activeTab, setActiveTab] = useState<TabName>("overview");

  return (
    <main className="container">
      <CourseDrawer />
      <VideoPlayer src="https://www.youtube.com/watch?v=gQojMIhELvM&list=PLoYCgNOIyGAB_8_iq1cL8MVeun7cB6eNc" />
      <CourseNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
    </main>
  );
}
