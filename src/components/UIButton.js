import React from 'react';
import { useHistory } from 'react-router-dom';

function UIButton(props) {

    const history = useHistory();
    const path = props.path
    const buttonTitle = props.title

    function handleClick() {
        history.push(path);
    }

    return (
        <button type="button" onClick={ handleClick }>
            {buttonTitle}
        </button>
    );
}

export default UIButton;