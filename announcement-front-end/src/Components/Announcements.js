import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Announcement = () => {

    const [announcements, setAnnouncements] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        (
            async () => {
                const response = await fetch("https://localhost:44367/Announcement/GetAllAnnouncement", {
                    headers: { 'Content-Type': 'application/json' },
                });

                const content = await response.json();
                console.log('content', content);

                setAnnouncements(content);
            }


        )();
    }, []);

    useEffect(() => {
        const filtered = announcements.filter((ann) =>
            ann.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setSearchResults(filtered);
        console.log(filtered)
    }, [announcements, searchTerm]);


    if (!searchResults) {
        return (
            <div className="announcements">
                <p>Check Announcements in Console</p>
                <input type="text"
                    id="announcement"
                    className="form-control"
                    placeholder="Search Announcement"
                    required
                    autoFocus
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                >
                </input>
            </div>
        )
    }



    return (

        <div className="announcements">
            <p>განცხადებების ჩატვირთვას ჭირდება რამდენიმე წამი</p>
            <input type="text"
                id="announcement"
                className="form-control"
                placeholder="Search Announcement"
                required
                autoFocus
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            >
            </input>

            <div>
                <a href="/create" style={{ height: "20px", width: "100px", backgroundColor: "orange" }}>Create Announcement</a>
            </div>



            {searchResults.map((res, i) => (
                <ul key={i}>
                    <li>{res.title}</li>
                    <img src={res.image} alt="" />

                    <li>
                        <Link to={{
                            pathname: '/details',
                            anns: {
                                description: res.description,
                                title: res.title,
                                image: res.image,
                                phoneNumber: res.phoneNumber
                            }
                        }}>Details</Link>
                    </li>
                </ul>
            ))}

        </div >
    )
}

export default Announcement;