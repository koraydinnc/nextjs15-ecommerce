function RoundedCategory() {


   const categories = [{
        name: "Category 1",
        image: "./next.svg",
        description: "This is category 1"
    },
    {
        name: "Category 2",
        image: "./next.svg",
        description: "This is category 2"
    },
    {
        name: "Category 3",
        image: "./next.svg",
        description: "This is category 3"
    },
    {
        name: "Category 4",
        image: "./next.svg",
        description: "This is category 4"
   }]


    return (
        <div className="flex flex-wrap justify-center">
               {categories.map((category, index) => (
                <button key={index} className="rounded-full  shadow-md bg-white p-4 m-2 flex flex-col items-center justify-center hover:bg-gray-100 transition duration-300 ease-in-out">
                    <img src={category.image} alt={category.name} className="items-center   justify-center  w-24 h-24 mb-2" />
                  
                </button>
            ))} 
        </div>
    );
}

export default RoundedCategory;