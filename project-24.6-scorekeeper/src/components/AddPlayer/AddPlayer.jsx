import React from 'react';

const AddPlayer = props => {
    let input;
    const onSubmit = event => {
        event.preventDefault();
        props.onPlayerAdd(input.value);
        input.value = '';
    };
    return (
        <div className="AddPlayer__container">
            <form className="AddPlayer" onSubmit={onSubmit}>
                <input
                    type="text"
                    className="AddPlayer__input form-control"
                    ref={node => (input = node)}
                />
                <div class="input-group-prepend">
                    <input type="submit" className="AddPlayer__submit btn btn-outline-secondary" value="Add" />
                </div>
            </form>
        </div>

    );
};

export default AddPlayer;