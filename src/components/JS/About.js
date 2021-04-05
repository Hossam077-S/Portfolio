import React, { useEffect, useRef, useState } from 'react'
import { Image } from 'react-bootstrap';
import NavBar from './NavBar'
import Particle from './Particles/ParticleAbout'
import fire from '../../firebase';


const db = fire.firestore()
export default function AboutMe() {
    const btnRef = useRef()
    const [fileUrl, setFileUrl] = useState(null)
    const [users, setUsers] = useState([])
    const userName = "Hossam"

    const UploadImage = async () => {
        const fileInput = document.getElementById('imageInput')
        fileInput.click()
    }
    const onFileChange = async (e) => {
        const file = e.target.files[0]
        const storageRef = fire.storage().ref()
        const fileRef = storageRef.child("MyImage")
        await fileRef.put(file)
        setFileUrl(await fileRef.getDownloadURL())

        btnRef.current.hidden = false
    }

    const UploadToFireStore = (e) => {
        e.preventDefault()
        setTimeout(function (){
            db.collection("Admin").doc(userName).set({
                name: userName,
                avatar: fileUrl
            })
        }, 2000)
        btnRef.current.hidden = true
       
    }

    useEffect(() =>{
        const fetchUsers = async () => {
            const usersCollection = await db.collection("Admin").get()
            setUsers(usersCollection.docs.map(doc => {
                return doc.data()
            }))
        }
        fetchUsers()
        
    })
    return (
    <>
    <NavBar/>
    <Particle />
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-6">
                <div className="card mt-4" id="imgCard">
                    <div className="card-body text-center">
                    <input id="imageInput" type="file" hidden onChange={onFileChange}/>
                    {users.map((user)=> {
                        return( <Image className="img" src={user.avatar} onDoubleClick={UploadImage} /> )
                    })}
                    <button onClick={UploadToFireStore} hidden ref={btnRef}> Upload </button>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card mt-4 mr-3">
                    <div className="card-body text-center" id="textCard">
                        <h3 id="title-aboutMe">About Me</h3>
                        <p className="aboutme-info">
                            Hello! I am Hossam. I have been developing websites for over 2 years. 
                            I'm a Full-Stack Web Developer. Technologies I use for Back-End(ReactJs, Angular, And JavaScript)
                            and For Front-End(Bootstrap, CSS). 
                            I create responsive websites that are displayed on all devices desktops and smartphones. Of course, 
                            before I begin developing any website, Landing Page,  Business Website, I need to have a ready-made 
                            project layout (sketch). And I'm ready to do this for you, before we start developing your website, 
                            we will discuss all the detail of your niche with you. I will conduct a survey of your competitors 
                            and make a list of their advantages and weaknesses. All this is necessary to give your customers 
                            something that your competitors do not provide, or to present it to, but better! After the website 
                            is finished and ready to deploy and sell a product or service. It is essential that your potential 
                            clients know about you. I will create an advertising campaign for you in Google Adwords and Facebook!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}
