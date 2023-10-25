import React, { useState, useEffect } from 'react';
import Header from './Header';  // Adjust the path if your Header component is located elsewhere
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    reviewsTitle: {
        textDecoration: 'underline',
        textAlign: 'center',    // Centering the title
        marginTop: '20px',      // Giving some spacing from the top
        fontSize: '24px',       // Adjust font size as needed
    }
});

function Home() {
  const classes = useStyles();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/reviews')
    .then(response => {
        // handle success
        console.log(response.data);
        setReviews(response.data);
    })
    .catch(error => {
        // handle error
        console.log(error);
    });
  }, []);

  return (
    <div>
      <Header />
      <Typography variant="h4" className={classes.reviewsTitle}>
          Reviews
      </Typography>
      {reviews.map(review => (
    <Link key={review._id} to={`/review/${review._id}`}>
        <h2>{review.title}</h2>
    </Link>
))}
    </div>
  );
}

// ... (rest of the code)


export default Home;
