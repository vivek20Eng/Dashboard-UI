import React from 'react';

// Sample data
const tableData = [
  { name: 'Dakota Rice', country: 'Niger', city: 'Oud-Turnhout', salary: '$36,738' },
  { name: 'Minerva Hooper', country: 'Curaçao', city: 'Sinaai-Waas', salary: '$23,789' },
  { name: 'Sage Rodriguez', country: 'Netherlands', city: 'Baileux', salary: '$56,142' },
  { name: 'Philip Chaney', country: 'Korea, South', city: 'Overland Park', salary: '$38,735' },
  { name: 'Doris Greene', country: 'Malawi', city: 'Feldkirchen in Kärnten', salary: '$63,542' },
  { name: 'Mason Porter', country: 'Chile', city: 'Gloucester', salary: '$78,615' },
  { name: 'Jon Porter', country: 'Portugal', city: 'Gloucester', salary: '$98,615' }
];

const TableComponent = () => (
  <div className="bg-[#27293d] p-6 rounded-lg text-white w-full lg:w-6/12">
    <h3 className="text-xl mb-4">Simple Table</h3>
    <div class="overflow-x-scroll hide-scrollbar">

    <table className="w-full border-collapse ">
      <thead>
        <tr className="border-b border-gray-600">
          <th className="py-6 px-4 text-left">Name</th>
          <th className="py-6 px-4 text-left">Country</th>
          <th className="py-6 px-4 text-left">City</th>
          <th className="py-6 px-4 text-left">Salary</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index} className="border-b border-gray-600">
            <td className="py-6 px-4">{row.name}</td>
            <td className="py-6 px-4">{row.country}</td>
            <td className="py-6 px-4">{row.city}</td>
            <td className="py-6 px-4">{row.salary}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  </div>
);

export default TableComponent;
