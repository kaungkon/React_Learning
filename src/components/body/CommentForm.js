import React from "react";
import { Component } from "react";
import { Form, Button, Input } from "reactstrap";




class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: "",
            rating: "",
            comment: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        //console.log(this.state);
        this.props.addComment(this.props.dishId,this.state.rating, this.state.author, this.state.comment);

        this.setState({
            author: "",
            rating: "",
            comment: ""
        });
        event.preventDefault();
    }

    render(){
        //console.log(this.props);
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Input
                        type="text"
                        name="author"
                        value={this.state.author}
                        placeholder="Your Name"
                        onChange={this.handleInputChange}
                        required
                    />
                    <br/>
                    <Input 
                        type="select"
                        name="rating"
                        value={this.state.rating}
                        onChange={this.handleInputChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                    </Input>
                    <br />
                    <Input 
                        type="textarea"
                        name="comment"
                        value={this.state.comment}
                        placeholder="Your Comment"
                        onChange={this.handleInputChange}
                        required
                    >
                    </Input>
                    <br />
                    <Button type="submit" color="primary">Submit Comment</Button>
        
                </Form>
            </div>
        )
    }
}
export default CommentForm;
//export default connect(null, mapDispatchToProps) (CommentForm); //connect er 1st parameter na thakay null deya hoise
