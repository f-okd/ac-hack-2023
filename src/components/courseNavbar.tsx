// CourseNavbar.tsx
import CommentsPage from '@/pages/comments';
import React from 'react';

type TabName = 'overview' | 'QA';

interface CourseNavbarProps {
    activeTab: TabName;
    setActiveTab: (tab: TabName) => void;
}

export default function CourseNavbar({ activeTab, setActiveTab }: CourseNavbarProps) {
    return (
        <main>
            <div role="tablist" className="tabs tabs-bordered">
                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Overview" defaultChecked={true}/>
                <div role="tabpanel" className="tab-content p-10">
                   <h1>About this Course</h1>
                   <p> Java is one of the most widely used and versatile programming languages in the world. This comprehensive introductory course is designed to equip students with the fundamental skills and knowledge needed to become proficient Java programmers. Whether you're a complete beginner or have some programming experience, this course will guide you through the core concepts and practical applications of Java.
                   </p>
                </div>
                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Comments" />
                <div role="tabpanel" className="tab-content p-10"><CommentsPage/></div>

            </div>
        </main>
    );
}
