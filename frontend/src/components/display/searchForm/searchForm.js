import React, {Component} from 'react';

class SearchForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            location: '',
            checkIn: '',
            checkOut: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const booking = {
            "location": event.target.location.value,
            "checkIn": event.target.checkIn.value,
            "checkOut": event.target.checkOut.value
        }
        // this.setState({location: ''})
        //send this somewhere
        // TODO: <Main />
        
        
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <select>
                        {locations}
                    </select>
                    <input type="date" placeholder="Check-in" name="checkIn"/> 
                    <input type="date" placeholder="Check-out" name="checkOut" />
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default SearchForm;