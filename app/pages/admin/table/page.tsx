"use client";
import { Export, Filter, Pagination, SearchBar, Table, TableColumn, TableData } from '@/app/_components/admin/Table';
import React, { useState } from 'react';


const Page: React.FC = () => {
    const [data, setData] = useState<TableData[]>([
        { name: 'Apple iMac 27"', category: 'PC', brand: 'Apple', description: '300', price: '$2999', quantity: 300 },
        { name: 'Apple iMac 20"', category: 'PC', brand: 'Apple', description: '200', price: '$1499', quantity: 200 },
        { name: 'Apple iPhone 14', category: 'Phone', brand: 'Apple', description: '1237', price: '$999', quantity: 1237 },
        { name: 'Apple iPad Air', category: 'Tablet', brand: 'Apple', description: '4578', price: '$1199', quantity: 4578 },
        { name: 'Xbox Series S', category: 'Gaming/Console', brand: 'Microsoft', description: '56', price: '$299', quantity: 56 },
        { name: 'PlayStation 5', category: 'Gaming/Console', brand: 'Sony', description: '78', price: '$799', quantity: 78 },
        { name: 'Xbox Series X', category: 'Gaming/Console', brand: 'Microsoft', description: '200', price: '$699', quantity: 200 },
        { name: 'Apple Watch SE', category: 'Watch', brand: 'Apple', description: '657', price: '$399', quantity: 657 },
        { name: 'NIKON D850', category: 'Photo', brand: 'Nikon', description: '465', price: '$599', quantity: 465 },
        { name: 'Monitor BenQ EX2710Q', category: 'TV/Monitor', brand: 'BenQ', description: '354', price: '$499', quantity: 354 },
    ]);

    const [searchQuery, setSearchQuery] = useState<string>('');
    const [filterCriteria, setFilterCriteria] = useState<string>('');
    const [filterValue, setFilterValue] = useState<string>('');

    const columns: TableColumn[] = [
        { key: 'name', label: 'Product Name' },
        { key: 'category', label: 'Category' },
        { key: 'brand', label: 'Brand' },
        { key: 'description', label: 'Description' },
        { key: 'price', label: 'Price' },
    ];

    const filteredData = data.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (filterValue === '' || item[filterCriteria]?.toLowerCase() === filterValue.toLowerCase())
    );

    const handleFilter = (criteria: string, value: string) => {
        setFilterCriteria(criteria);
        setFilterValue(value);
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
            <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                        <SearchBar onSearch={setSearchQuery} />
                        <Filter onFilter={handleFilter} />
                        <Export data={filteredData} />
                        <button 
                            type="button" 
                            className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded
                            // continued
                            px-4 py-2 transition duration-300 ease-in-out"
                        >
                            Add New
                        </button>
                    </div>
                    <Table columns={columns} data={filteredData} />
                    <Pagination />
                </div>
            </div>
        </div>
    );
};

export default Page;
