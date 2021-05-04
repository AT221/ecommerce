import './_Ratings.scss';


export let handleRatings = (x)=>{
    if(x === 0){
        return (
            <div className='stars'>
             
                    <p>No Ratings Yet</p>
            
            </div>
    )}else if(x === 1){
        return (
            <div className='star_container'>
                <img src="https://img.icons8.com/fluent/48/000000/star.png"/>
            </div>
        
    )}else if(x === 2){
        return (
            <div className='star_container'>
                <img src="https://img.icons8.com/fluent/48/000000/star.png"/>
                <img src="https://img.icons8.com/fluent/48/000000/star.png"/>
            </div>
    )}else if(x === 3){
        return (
             <div className='star_container'>
                    <img src="https://img.icons8.com/fluent/48/000000/star.png"/>
                    <img src="https://img.icons8.com/fluent/48/000000/star.png"/>
                    <img src="https://img.icons8.com/fluent/48/000000/star.png"/>
            </div>
    )}else if(x === 4){
         return (
             <div className='star_container'>
                    <img src="https://img.icons8.com/fluent/48/000000/star.png"/>
                    <img src="https://img.icons8.com/fluent/48/000000/star.png"/>
                    <img src="https://img.icons8.com/fluent/48/000000/star.png"/>
                    <img src="https://img.icons8.com/fluent/48/000000/star.png"/>
            </div>
    )}else if(x === 5){
        return (
             <div className='star_container'>
                    <img src="https://img.icons8.com/fluent/48/000000/star.png"/>
                    <img src="https://img.icons8.com/fluent/48/000000/star.png"/>
                    <img src="https://img.icons8.com/fluent/48/000000/star.png"/>
                    <img src="https://img.icons8.com/fluent/48/000000/star.png"/>
                    <img src="https://img.icons8.com/fluent/48/000000/star.png"/>
            </div>
                    )}
}