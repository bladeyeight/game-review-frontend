import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReviewDetails() {
    const { id } = useParams();
    const [review, setReview] = useState(null);

    useEffect(() => {
        // Fetch the review using the `id` and set it to state
        axios.get(`http://localhost:5000/reviews/${id}`)
            .then(response => setReview(response.data))
            .catch(error => console.log(error));
    }, [id]);

    if (!review) return <div>Loading...</div>;

    return (
        <div>
            <h1>{review.title} - {review.rating}</h1>
            <p>{review.content}</p>
            {/* You can add more review details here */}
        </div>
    );
}

export default ReviewDetails;
