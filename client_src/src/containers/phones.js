import React from 'react';
import {Link} from 'react-router-dom';


class Phones extends React.Component{

  

    renderPhone = (phone,index)=>{
        
      
        return (
            <div className='col-sm-4 col-lg-4 col-md-4 book-list' key={index}>
                <div className="thumbnail">
                    <img className='img-thumbnail'
                        src={phone.image}
                        alt={phone.name}
                    />
                </div>
                <div className="caption">
                    <h4 className="pull-right">
                        ${phone.price}
                    </h4>
                    <h4>
                        <Link to={`./Phones/${phone.id}`}>
                            {phone.name}
                        </Link>
                    </h4>
                    <p> </p>
                    <p className='itemButton'>
                        <button className="btn btn-primary">
                            Buy Now
                        </button>
                        <Link to={`/Phones/${phone.id}`}
                            className="btn btn-default">
                            More Info
                        </Link>
                    </p>
                </div>
            </div>
        );
    };

    render(){
       
        return(
        <div>
            <div className="books row">
              
            </div>
            <div className="row">
                <div className="col-md-12">
                    <button className="pull-right btn btn-primary">
                        Load More
                    </button>
                </div>

            </div>
        </div>            
       
        )};
};




export default Phones;