'use client';

// interfaces.ts
export interface TableColumn {
  key: string;
  label: string;
}

export interface TableData {
  [key: string]: any;
}

// SearchBar.tsx
import React from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
      <div className="w-full md:w-1/2">
          <form className="flex items-center">
              <label htmlFor="simple-search" className="sr-only">Search</label>
              <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                      </svg>
                  </div>
                  <input 
                      type="text" 
                      id="simple-search" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                      placeholder="Search" 
                      required 
                      onChange={(e) => onSearch(e.target.value)}
                  />
              </div>
          </form>
      </div>
  );
};


interface TableHeaderProps {
  columns: TableColumn[];
}

export const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => {
  return (
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
              {columns.map((column) => (
                  <th key={column.key} scope="col" className="px-4 py-3">{column.label}</th>
              ))}
              <th scope="col" className="px-4 py-3"><span className="sr-only">Actions</span></th>
          </tr>
      </thead>
  );
};


interface TableRowProps {
  rowData: TableData;
  columns: string[];
}

export const TableRow: React.FC<TableRowProps> = ({ rowData, columns }) => {
  return (
      <tr className="border-b dark:border-gray-700">
          {columns.map((col) => (
              <td key={col} className="px-4 py-3">{rowData[col]}</td>
          ))}
          <td className="px-4 py-3 flex items-center justify-end">
              <Dropdown rowId={rowData.id || rowData.name} />
          </td>
      </tr>
  );
};


interface DropdownProps {
  rowId: string;
}

export const Dropdown: React.FC<DropdownProps> = ({ rowId }) => {
  return (
      <div>
          <button 
              id={`${rowId}-dropdown-button`} 
              data-dropdown-toggle={`${rowId}-dropdown`} 
              className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" 
              type="button"
              onClick={() => document.getElementById(`${rowId}-dropdown`)?.classList.toggle('hidden')}
          >
              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
          </button>
          <div id={`${rowId}-dropdown`} className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
              <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby={`${rowId}-dropdown-button`}>
                  <li>
                      <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                  </li>
                  <li>
                      <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                  </li>
              </ul>
              <div className="py-1">
                  <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
              </div>
          </div>
      </div>
  );
};


interface TableProps {
  columns: TableColumn[];
  data: TableData[];
}

export const Table: React.FC<TableProps> = ({ columns, data }) => {
  const columnKeys = columns.map(col => col.key);
  return (
      <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <TableHeader columns={columns} />
              <tbody>
                  {data.map(row => (
                      <TableRow key={row.id || row.name} rowData={row} columns={columnKeys} />
                  ))}
              </tbody>
          </table>
      </div>
  );
};


export const Pagination: React.FC = () => {
  return (
      <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing
              <span className="font-semibold text-gray-900 dark:text-white">1-10</span>
              of
              <span className="font-semibold text-gray-900 dark:text-white">1000</span>
          </span>
          <ul className="inline-flex items-stretch -space-x-px">
              <li>
                  <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      <span className="sr-only">Previous</span>
                      <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                  </a>
              </li>
              <li>
                  <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
              </li>
              <li>
                  <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
              </li>
              <li>
                  <a href="#" aria-current="page" className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
              </li>
              <li>
                  <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
              </li>
              <li>
                  <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
              </li>
              <li>
                  <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      <span className="sr-only">Next</span>
                      <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                  </a>
              </li>
          </ul>
      </nav>
  );
};


interface FilterProps {
    onFilter: (criteria: string, value: string) => void;
}

export const Filter: React.FC<FilterProps> = ({ onFilter }) => {
    return (
        <div className="flex items-center space-x-3">
            <select 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                onChange={(e) => onFilter('category', e.target.value)}
            >
                <option value="">All Categories</option>
                <option value="PC">PC</option>
                <option value="Phone">Phone</option>
                <option value="Tablet">Tablet</option>
                <option value="Gaming/Console">Gaming/Console</option>
                <option value="Watch">Watch</option>
                <option value="Photo">Photo</option>
                <option value="TV/Monitor">TV/Monitor</option>
            </select>
        </div>
    );
};

interface ExportProps {
    data: TableData[];
}

export const Export: React.FC<ExportProps> = ({ data }) => {
    const handleExport = () => {
        const csvData = data.map(row => Object.values(row).join(',')).join('\n');
        const blob = new Blob([csvData], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('hidden', '');
        a.setAttribute('href', url);
        a.setAttribute('download', 'data.csv');
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <button 
            type="button" 
            className="flex items-center justify-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
            onClick={handleExport}
        >
            Export CSV
        </button>
    );
};

