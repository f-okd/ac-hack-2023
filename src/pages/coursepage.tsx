// CoursePage.tsx
import React, { useState } from 'react';
import {CourseDrawer} from '../components/courseDrawer';
import QA from '../components/qa';
import Overview from '../components/overView';
import CourseNavbar from '../components/courseNavbar';

type TabName = 'overview' | 'QA';

export default function CoursePage() {
    const [activeTab, setActiveTab] = useState<TabName>('overview');

    return (
        <div className='course-page'>
            <CourseDrawer />
            <div className='course-content'>
                <CourseNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
                <div className='tab-content'>
                    {activeTab === 'overview' && <Overview />}
                    {activeTab === 'QA' && <QA />}
                </div>
            </div>
        </div>
    );
}
