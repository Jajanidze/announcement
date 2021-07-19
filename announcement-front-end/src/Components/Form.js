import React, { useState } from "react";
import { Redirect } from "react-router-dom";



const Form = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [selectedFile, setSelectedFile] = useState([]);
    const [image, setImage] = useState("");
    const [redirect, setRedirect] = useState(false);


    const submit = async (e) => {
        e.preventDefault();


        const url = "https://localhost:44367/Announcement/CreateAnnouncement";
        const response = await fetch(url, {

            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title,
                image,
                description,
                phoneNumber,
            })
        })
        const content = await response.json();
        console.log(content);

        setRedirect(true);

    }

    if (redirect) {
        return <Redirect to="/"></Redirect>
    }


    const onFileChange = (e) => {
        setSelectedFile(e.target.files);
        console.log(e.target.files[0]);
    };


    const encodeBase64String = (file) => {
        let reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            reader.onload = () => {
                var Base64 = reader.result;
                console.log('encoded', Base64);
                setImage(Base64);
            }
            reader.onerror = (error) => {
                console.log('error', error);
            }

        }
    }



    return (
        <div className="form">
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 font-weight-normal">Create Announcement</h1>
                <input type="text" id="title" className="form-control" placeholder="Title" required autoFocus
                    onChange={e => setTitle(e.target.value)}
                />
                <input type="text" id="description" className="form-control" placeholder="Description" required
                    onChange={e => setDescription(e.target.value)}
                />
                <input type="phone" id="phoneNumber" className="form-control" placeholder="Phone Number" required
                    onChange={e => setPhoneNumber(e.target.value)}
                />
                <input type="file" id="input" onChange={onFileChange} />

                <button className="btn btn-lg btn-primary btn-block" type="submit"
                    onSubmit={encodeBase64String(selectedFile[0])}>Submit</button>
            </form>
            <a href="/" style={{height:"20px", width:"100px", backgroundColor:"orange"}}>Check all Announcements</a>
        </div>
    )


}
export default Form;