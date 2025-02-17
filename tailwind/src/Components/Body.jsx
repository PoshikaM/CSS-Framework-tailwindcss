function Body(){
    return(
        <div>
            <div>
                <button className="bg-blue-800 text-white p-2 mx-20 m-7 rounded">Button one</button>
            </div>
            <div className="bg-red-100 border-red-500 border-2 p-3 mx-20 rounded">
                <span className="text-red-700 font-bold">Alert ! </span>
                <span className="text-red-700">This is awesome !</span>
            </div>

            <div className="m-20 justify-center flex">
                <div className="flex shadow-md flex-wrap justify-center rounded h-20 m-3 px-10 w-fit p-20">
                    <img src="https://kalvium.com/wp-content/uploads/2023/04/Kalvium-Logo-SVG.svg" alt="" className="h-16 w-16"/>
                    <div className="px-5">
                        <h1>Kalvium Store</h1>
                        <p className="text-gray-700">You have a new course!</p>
                    </div>
                </div>
            </div>

            <div>
                <h4 className="h-18 p-3 bg-gray-300 flex justify-center align-center">
                   <h4>&copy; 2021 Copyright: <b>Kalvium</b></h4>
                </h4>
            </div>
            
        </div>
    )
}

export default Body;