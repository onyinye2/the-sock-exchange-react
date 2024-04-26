import React from 'react';

const Sock = (props) => {

    return (
        <div className="card card-background" style={{ flex: '1', minWidth: '300px', maxWidth: '45%' }}>
            <div className="card-body">
                <h5 className="card-title">Sock Details</h5>
                <div className="card-text">Size: {props.data.sockDetails.size}</div>
                <div className="card-text">Color: {props.data.sockDetails.color}</div>
                <div className="card-text">Pattern: {props.data.sockDetails.pattern}</div>
                <div className="card-text">Material: {props.data.sockDetails.material}</div>
                <div className="card-text">Condition: {props.data.sockDetails.condition}</div>
                <div className="card-text">For Foot: {props.data.sockDetails.forFoot}</div>
            </div>
            <div className="card-body">
                <h5 className="card-title">Additional Features</h5>
                <div className="card-text">Water Resistant: {props.data.additionalFeatures.waterResistant ? "Yes" : "No"}</div>
                <div className="card-text">Padded: {props.data.additionalFeatures.padded ? "Yes" : "No"}</div>
                <div className="card-text">Anti Bacterial: {props.data.additionalFeatures.antiBacterial ? "Yes" : "No"}</div>
            </div>
            <div className="card-footer" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <small className="text-muted">Added: {props.data.addedTimestamp}</small>
                <button className="btn btn-sm btn-danger" onClick={() => props.handleDelete(props.data._id)}>Delete</button>
            </div>
        </div>
    );
};

export default Sock;