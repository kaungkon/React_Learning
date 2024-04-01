import React from 'react';
import {Card, CardImg,CardImgOverlay, CardTitle,CardText} from 'reactstrap';
import { baseUrl } from '../../redux/baseUrl';

const MenuItem = ({ dish, onSelectDish }) => {
  return (
    <div className='container'>
        
            <Card inverse style={{ margin:10, cursor:'pointer' }} onClick={() => onSelectDish(dish)}>
                <CardImg
                    alt={dish.name}
                    src={baseUrl + dish.image}
                    style={{width: '100%', height: 270, opacity: 0.7}}
                />
                <CardImgOverlay>
                    <CardTitle tag="h5" style={{fontSize:25, fontWeight: 'bold', color:'#000'}}>{ dish.name }</CardTitle>
                </CardImgOverlay>
            </Card>

    </div>
  )
}

export default MenuItem;