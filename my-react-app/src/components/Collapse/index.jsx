import { useState, useRef } from 'react';
import './Collapse.css';

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}>
      <button 
        className="collapse-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {title}
        <span className="collapse-icon">
          <svg 
            width="16" 
            height="10" 
            viewBox="0 0 16 10" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M1 1L8 8L15 1" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      
      <div
        className="collapse-content"
        ref={contentRef}
        style={{
          height: isOpen ? `${contentRef.current.scrollHeight}px` : '0px'
        }}
      >
        <div className="collapse-inner">{children}</div>
      </div>
    </div>
  );
}

export default Collapse;