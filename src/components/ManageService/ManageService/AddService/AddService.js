import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const [imageURL, setImageURL] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const serviceData = {
            name: data.name,
            description: data.description,
            price: data.price,
            imageURL: imageURL
        };
        const url = `http://localhost:5000/addService`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => console.log(res))

    };

    const handleUploadImage = event => {
        const imageData = new FormData();
        imageData.set('key', '81651e35087eb2b11931d1d5e6599967');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="container form-container">
            <div className="row">
                <div className="col-md-6">
                    <h5 className="product-title">Product Name</h5>
                    <input defaultValue="" {...register("name")} placeholder="Enter name" className="form-input" />
                </div>
                <div className="col-md-6">
                    <h5 className="product-title">Description</h5>
                    <input defaultValue="" {...register("description")} placeholder="Description" className="form-input" />
                </div>
                <div className="col-md-6">
                    <h5 className="product-title">Add Price</h5>
                    <input defaultValue="" {...register("price")} type="number" placeholder="Enter price" className="form-input" />
                </div>
                <div className="col-md-6 ">
                    <h5 className="product-title">Add Photo</h5>
                    <input type="file" onChange={handleUploadImage} />
                </div>
                <div className="col-md-1">
                    <input type="submit" value="Submit" className="btn btn-danger mt-3" />
                </div>
            </div>

        </form>
    );
};

export default AddService;