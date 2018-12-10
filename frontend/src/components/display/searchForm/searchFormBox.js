import React, {Component} from 'react'
import SearchForm from './searchForm'

class SearchFormBox extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            selectedLocation: null
        }
    }

    componentDidMount() {
        let request = new Request()
        request.get('/api/properties').then(data => {
            this.setState({
                data: data
            })
        })
    }

    render(){

        return (
            <div>
            <h2>title</h2>
            <p>paragraph</p>
            <SearchForm data={this.state.data}/>
            </div>
        )
    }
}

export default SearchFormBox;