import React from 'react';

export default function RegionPage({ children }) {
    return (
        <main className="container my-3" style={{ minHeight: '80vh' }}>
            {children}
        </main>
    );
}