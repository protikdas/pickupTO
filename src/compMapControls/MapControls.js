import React from 'react';
import './MapControls.css';

class MapControls extends React.Component {
    render() {
        let bballBtnClasses, fballBtnClasses, btnJSX
        if (this.props.show === "Basketball") {
            bballBtnClasses = "map-button active";
            fballBtnClasses = "inactive map-button";
            btnJSX = 
            <div className="map-controls-container">
            <button className={bballBtnClasses} onClick={this.props.showBasketball}>Basketball Courts</button>
            <button className={fballBtnClasses} onClick={this.props.showSoccer}>Soccer Fields</button>
            </div>
        } else {    
            bballBtnClasses = "inactive map-button";
            fballBtnClasses = "map-button active";
            btnJSX =
            <div className="map-controls-container">
            <button className={fballBtnClasses} onClick={this.props.showSoccer}>Soccer Fields</button>
            <button className={bballBtnClasses} onClick={this.props.showBasketball}>Basketball Courts</button>
            </div>
        }
        return (
            btnJSX
        )
    }
}

export default MapControls;