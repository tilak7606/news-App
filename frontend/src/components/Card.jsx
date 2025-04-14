import React from 'react'

const Card = ({ data}) => {
  // console.log(data);
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {data.map((currItem, idx) => {
        if(currItem.urlToImage){
        return (
          <div
            key={idx}
            className="bg-white shadow-md rounded-2xl overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={currItem.urlToImage}
              alt={currItem.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4 space-y-2">
              <a
                href={currItem.url || "#"}
                className="block text-xl font-semibold text-blue-800 hover:underline"
              >
                {currItem.title}
              </a>

              <p className="text-gray-600 text-sm">
                {currItem.description || 'No description available.'}
              </p>

              <a
                href={currItem.url || "#"}
                className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
              >
                Read More
              </a>
            </div>
          </div>
        );
    }
    else{
        return null;
    }
      })}
    </div>
  );
};

export default Card;
