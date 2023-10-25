import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    centered: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column', // ensures that children elements are stacked vertically
    },
    title: {
        fontSize: '3rem',  // Adjust as necessary
        textAlign: 'center',
        margin: '20px 0',
    },
    rating: {
        fontSize: '5rem',  // Adjust to make the rating very large
        textAlign: 'center',
        margin: '20px 0',
        fontFamily: '"Press Start 2P", cursive',
    },
    content: {
        textAlign: 'center',
        margin: '20px 0',
        fontSize: '1.2rem',  // Adjust as necessary
    },
});
function ReviewDetails() {
    const { id } = useParams();
    const [review, setReview] = useState(null);
    const classes = useStyles();


    useEffect(() => {
        // Fetch the review using the `id` and set it to state
        axios.get(`http://localhost:5000/reviews/${id}`)
            .then(response => setReview(response.data))
            .catch(error => console.log(error));
    }, [id]);

    if (!review) return <div>Loading...</div>;

    return (
        <div className={classes.centered}>
            <Header />
            <h1 className={classes.title}>{review.title}</h1>
            <div className={classes.rating}>{review.rating}</div>
            <p className={classes.content}>{review.content}</p>
        </div>
    );
}

export default ReviewDetails;
