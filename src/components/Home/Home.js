import React from 'react';
import './Home.css';
import img from '../Images/soccerBall.jpg'
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import { useNavigate } from 'react-router-dom';



const Home = () => {

    const navigate = useNavigate();
    const [reviews, setReviews] = useReviews();

    return (
        <div>
            <div className='container mx-auto mt-8 grid md:grid-cols-2 grid-cols-1 gap-4 mx-4'>
                <div className='mt-8 mx-8 mb-8 md:text-left'>
                    <h2 className='text-5xl font-bold text-gray-500 md:mt-8 lg:text-6xl '>A High Quality <br /> <span className='text-green-600'>Soccer Ball</span>
                    </h2>
                    <p className='mt-8'>Very high quality soccer ball. The players like this ball very much. Little boys and girls also buy this soccer ball for learning. The price of the ball is very cheap compared to the quality. Order online now to buy the ball. Thank you.</p>
                    <button className='mt-8 bg-green-100 px-8 py-2 text-green-700 font-bold rounded-full border-solid border-2 border-green-500'>Live Demo</button>
                </div>
                <div className='md:mt-8'>
                    <img className='md:mt-4 m-auto rounded-full' src={img} alt="" />
                </div>

            </div >
            <div className='container'>
                <h3 className='my-16 font-bold text-3xl'>Customer Reviews (3)</h3>
                <ul>
                    <li className='grid md:grid-cols-2 lg:grid-cols-3'>

                        {
                            reviews.map(review => <Review
                                key={review.id}
                                review={review}
                            ></Review>)
                        }

                    </li>
                </ul>
                <button onClick={() => navigate("/reviews")} className='text-2xl bg-green-500 px-16 py-2 rounded-full hover:bg-green-200 hover:font-bold hover:text-green-700 mb-20 '>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;