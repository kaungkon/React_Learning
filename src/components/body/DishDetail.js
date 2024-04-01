import React from 'react';
import {Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import LoadComments from './LoadComments';
import CommentForm from './CommentForm';
import { baseUrl } from '../../redux/baseUrl';

const DishDetail = ({ dish, comments, addComment }) => {
  return (
    <div>
        <Card className="my-2" >
            <CardImg
            alt="Card image cap"
            src={baseUrl + dish.image}
            style={{
                height: '100%',
            }}
            top
            width="100%"
            />
            <CardBody style={{ textAlign:'left'}}>
                <CardTitle tag="h5">
                    {dish.name }
                </CardTitle>
                <CardText>
                    { dish.description }
                </CardText>
                <CardText>
                    Price: { dish.price } /-
                </CardText>

                <hr />
                <LoadComments comments={comments } />
                <hr />
                <CommentForm dishId={dish.id} addComment={addComment}/>
            </CardBody>
        </Card>
    </div>
  )
}

export default DishDetail;