import Navbar from '../../common/navbar/navbar.js'
import {useState} from "react";

const ImageGenerator = () => {
    const [searchText, setSearchText] = useState("");
    const [imageSrc, setImageSrc] = useState("https://img.freepik.com/premium-psd/image-3d-graphic-illustration_689261-193.jpg?size=626&ext=jpg&ga=GA1.1.482985772.1714508851&semt=ais");

    const textChanged = (val) => {
        setSearchText(val);
    }

    const getData = async() => {
        const req = await fetch('http://localhost:1400/api/image-generator', {
            method: "POST",
            body: JSON.stringify({
                searchText: searchText,
            }),
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await req.json();
        setImageSrc(data.image);
    }

    return (
        <div>
            <Navbar />
            <div className='image-generator-main-container'>
                <div className='image-container'>
                    <img width='340px' height='340px' src={imageSrc}></img>
                </div>
                <div className='search-container'>
                    <input onChange={(e)=>{textChanged(e.target.value)}}/>
                    <button onClick={()=>{getData()}}>Generate</button>
                </div>
            </div> 
        </div> 
    );
}

export default ImageGenerator;