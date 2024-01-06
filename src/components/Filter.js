import React from 'react';

const Filter = (props) => {
    let filterData = props.filterData;
    let category = props.category;
    let SetCategory = props.SetCategory;

    function filterHandler(title) {
        SetCategory(title);
    }

    return (
        <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify center'>
            {filterData.map((data) => (
                <button
                    className={`text-lg px-2 px-2 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transaction-all duration-300 
                    ${category === data.title ? 
                      "bg-opacity-60 border-white" :
                       "bg-opacity-40 border-transparent"}`}
                    key={data.id}
                    onClick={() => filterHandler(data.title)}
                >
                    {data.title}
                </button>
            ))}
        </div>
    );
};

export default Filter;
