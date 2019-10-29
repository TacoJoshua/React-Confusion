import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    renderDish(dish) {
        if (dish) {
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle> {dish.name} </CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else {
            return (
                <div> </div>
            );
        }
    }
    renderComments(dish){
        if (dish) {
            const commentList = dish.comments.map( comments => {
                return(
                        <ul className='list-unstyled'>
                            <li key={comments.id}>
                                <p>{comments.comment}</p>
                                <p> -- {comments.author}, &nbsp; {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))} </p>
                            </li>
                        </ul>
                );
            });
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4> Comments </h4>
                    {commentList}
                </div>
            )
        }
        else {
            return (
                <div></div>
            );
        }
    }
    
    render(){
        const {dish} = this.props;
        if(dish) {
            return (
            <div className="container">
            <div className="row">
                {this.renderDish(this.props.dish)}
                {this.renderComments(this.props.dish)}
            </div>
            </div>
            );
        }
        else  {
            return <div></div>
        }
    }
}

export default DishDetail