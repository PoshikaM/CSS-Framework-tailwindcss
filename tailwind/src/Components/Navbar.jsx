function Navbar(){
    return(
        <div className="bg-red-400 h-20 items-center flex justify-between">
            <div className="flex flex justify-between">
                <h3 className="text-white mx-5">Kalvium</h3>
                <p className="text-teal-400">About us</p>
                <p className="text-teal-400 mx-5">Contact</p>
                <p className="text-teal-400">Courses</p>
            </div>
            <div>
                <button className="text-white px-4 py-1.5 border-2 rounded mx-5">Log in</button>
            </div>
        </div>
    )
}

export default Navbar;