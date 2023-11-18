// CourseNavbar.tsx
import React from 'react';

type TabName = 'overview' | 'QA';

interface CourseNavbarProps {
    activeTab: TabName;
    setActiveTab: (tab: TabName) => void;
}

export default function CourseNavbar({ activeTab, setActiveTab }: CourseNavbarProps) {
    return (
        <div className="navbar bg-base-100" style={{ marginLeft: 'auto', marginRight: 0 }}>
            <a className={`btn btn-ghost text-xl ${activeTab === 'overview' ? 'active' : ''}`} 
               onClick={() => setActiveTab('overview')}>
                Overview
            </a>
            <a className={`btn btn-ghost text-xl ${activeTab === 'QA' ? 'active' : ''}`} 
               onClick={() => setActiveTab('QA')}>
                Q&A
            </a>
        </div>
    );
}
