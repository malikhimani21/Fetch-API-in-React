import React, { useEffect, useState } from 'react'

const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0])
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <div>
            <h1>LIVE</h1>
            <h2>COVID 19 CORONAVIRUS TRACKER</h2>
            <hr />
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title"><span>Our</span> Country</h4>
                    <p class="card-text">India</p>
                    <a href="#" class="card-link">Another link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <h4 class="card-title"><span>Total</span> Recovered</h4>
                    <p class="card-text">{ data.recovered }</p>
                    <a href="#" class="card-link">Another link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <h4 class="card-title"><span>Total</span> Confirm</h4>
                    <p class="card-text">{data.confirmed}</p>
                    <a href="#" class="card-link">Another link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <h4 class="card-title"><span>Total</span> Deaths</h4>
                    <p class="card-text">{data.deaths}</p>
                    <a href="#" class="card-link">Another link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <h4 class="card-title"><span>Total</span> Active</h4>
                    <p class="card-text">{data.active}</p>
                    <a href="#" class="card-link">Another link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <h4 class="card-title"><span>Last</span> UPDATED</h4>
                    <p class="card-text">{data.lastupdatedtime}</p>
                    <a href="#" class="card-link">Another link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
            
        </div>
    )
}

export default Covid