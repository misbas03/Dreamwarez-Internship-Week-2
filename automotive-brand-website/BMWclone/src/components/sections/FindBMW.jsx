import "./FindBMW.css";

function FindBMW(){

    return(
        <section className="find-bmw">
            <h2>Find your BMW.</h2>

        <div className="bmw-options"> 

            <div className="bmw-card">
                <span className="material-symbols-outlined icon">directions_car</span>
                <p>Find a new car</p>
                <button className="outline-btn">Search now</button>
            </div>

            <div className="bmw-card">
               <span className="material-symbols-outlined icon">search_check_2</span>
                <p>Book a test drive</p>
                <button className="outline-btn">Request a test drive</button>
            </div>

            <div className="bmw-card">
                <span className="material-symbols-outlined icon">build_circle</span>
                <p>Build your own</p>
                <button className="outline-btn">Configure&Price</button>
            </div>
            </div>
        </section>
    )
}

export default FindBMW;
