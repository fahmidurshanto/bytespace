import React from "react";
import Icon from "./Icon";

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
}

export default function Pagination({ currentPage = 1, totalPages = 5 }: PaginationProps) {
  return (
    <div className="pagination-container">
      <button className="pagination-btn" aria-label="Previous Page" disabled={currentPage === 1}>
        <Icon name="chevron-left" size={20} strokeWidth={2.5} />
      </button>
      
      <div className="pagination-numbers">
        {[...Array(totalPages)].map((_, i) => (
          <button 
            key={i} 
            className={`pagination-number ${currentPage === i + 1 ? "active" : ""}`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <button className="pagination-btn" aria-label="Next Page" disabled={currentPage === totalPages}>
        <Icon name="chevron-right" size={20} strokeWidth={2.5} />
      </button>
    </div>
  );
}
