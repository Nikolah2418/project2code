const Home = (props) => {
    const mainHeading = props.mainHeading;

    return ( 
        <div className="home">
            <h2>{mainHeading}</h2>
        </div>
     );
}
 
export default Home;