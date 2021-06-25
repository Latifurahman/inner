import React, { useState } from 'react';

const Review = () => {
    const [review, setReview] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newReview = {...review}
        newReview[e.target.name] = e.target.value;
        setReview(newReview)
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', review.name)
        formData.append('description', review.description)
        formData.append('designation', review.designation)

        fetch('http://localhost:5000/review', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Name</label>
                <input onBlur={handleBlur} type="text" placeholder="Name" className="form-control" name="name"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Company's name/Designation</label>
                <input onBlur={handleBlur} type="text" placeholder="Company's name/Designation" name="designation" className="form-control" />
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Description</label>
                <input onBlur={handleBlur} type="text" placeholder="Description" className="form-control" name="description" />
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Upload Image</label>
                <input onChange={handleFileChange} type="file" className="form-control"  />
            </div>
            <button type="submit" className="btn btn-secondary">Submit</button>
        </form>
    );
};

export default Review;