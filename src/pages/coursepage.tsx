// CoursePage.tsx
import React, { useState } from 'react';
import {CourseDrawer} from '../components/courseDrawer';
import CourseNavbar from '../components/courseNavbar';
import VideoPlayer from '../components/videoPlayer';

type TabName = 'overview' | 'QA';

export default function CoursePage() {
    const [activeTab, setActiveTab] = useState<TabName>('overview');

    return (
        <div className=''>
            <CourseDrawer />
            <VideoPlayer src="https://www.youtube.com/watch?v=eIrMbAQSU34&t=7662s" />
            <CourseNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
    );
}
