import React from 'react';

const Feed: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="card">
        <h1 className="text-2xl font-bold mb-2" style={{ color: 'var(--accent)' }}>Welcome to the Feed!</h1>
        <p style={{ color: 'var(--text-main)' }}>This is your main feed. Content will appear here soon.</p>
      </div>
    </div>
  );
};

export default Feed; 