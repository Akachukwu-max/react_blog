import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

    return (
        <div className='home'>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
            {/* props is a  way to pass data from parent component to child component, const is the parent component bloglist is the child component */}
            {/* we do that by making a property name on bloglist tag */}
        </div>
    )
}

export default Home;