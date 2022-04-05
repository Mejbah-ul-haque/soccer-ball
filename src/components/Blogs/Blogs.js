import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto  md:w-3/4 grid lg:grid-cols-2'>
            <div className='text-left m-8 bg-green-100 p-6'>
                <h3 className='text-left text-xl font-bold'><span className='text-3xl text-red-500'>Q.1</span> What is the purpose of context API?</h3>
                <p className='ml-8 mt-4 '><span className='text-2xl '>Ans.</span> A popular feature of React JS is the context API. Previously, only props were used to send one component data to React. It took a lot of effort to pass data from one component to another. The next component had to be drilled and passed. But the context API has made the developer's job much easier. A lot of data can be passed like a tree.</p>
            </div>
            <div className='text-left m-8 bg-green-100 p-6'>
                <h3 className='text-left text-xl font-bold'><span className='text-3xl text-red-500'>Q.2</span> Why do we use semantic tags?</h3>
                <p className='ml-8 mt-4'><span className='text-2xl '>Ans.</span> The biggest change in HTML-5 is the addition of semantic tags. In the past, browsers used to be very confusing for reading websites. Most of the time I couldn't understand which article, which heading. But that problem is gone. Semantic tags make it easy for search engines to understand what is written where. The code in the semantic tag is very clear. Each part is described separately. Semantic tags make everything much easier for browsers and developers.</p>
            </div>
            <div className='text-left m-8 bg-green-100 p-6'>
                <h3 className='text-left text-xl font-bold'><span className='text-3xl text-red-500'>Q.3</span> What is block-level and inline block elements?</h3>
                <p className='ml-8 mt-4'><span className='text-2xl '>Ans.</span> There are three types of positioning in CSS. Block Level Elements, Inline Elements and Inline-Block Elements. Block level means always starting on a new line. There will be automatic space and full width. Inline is just the opposite. Will always start on the same line. Such as span tags. And by combining block level and inline, inline-block is being done.</p>
            </div>
        </div>
    );
};

export default Blogs;