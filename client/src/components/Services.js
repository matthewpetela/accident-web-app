import React from 'react';
import leftIcon from '../assets/icons/006-driving-license.png'
import middleIcon from '../assets/icons/pickup-car.png'
import rightIcon from '../assets/icons/002-gps.png'
const Services = () => {
    const placeholderText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tubulo putas dicere? Ego vero volo in virtute vim esse quam maximam; Duo enim genera quae erant, fecit tria. Quo modo? Sin tantum modo ad indicia veteris memoriae cognoscenda, curiosorum. Duo Reges: constructio interrete. Tollenda est atque extrahenda radicitus. Quid est, quod ab ea absolvi et perfici debeat? Illa tamen simplicia, vestra versuta. Urgent tamen et nihil remittunt."
    const outerDiv = {
        backgroundColor: "royalblue",
        textAlign: 'center',
        borderTop: '2px solid',
		borderLeft: '2px solid',
		borderRight: '2px solid',
		borderBottom: '2px solid',
        fontSize : '3vw',
        fontWeight: 'bold'
    }
    const flexContainer = {
        margin: 'auto',
        height: '100%',
        width: '100%',
        display: 'flex',
        backgroundColor: 'white'
    }
    const imageStyling = {
        display: 'block',
        margin: 'auto',
        width: '33%',
        marginTop: '18px'
    }
    const divLeft = {
        flex: '1',
        margin: '10px',
        backgroundColor: 'CornflowerBlue',
        borderRadius: '20px'
    }
    const divRight = {
        flex: '1',
        margin: '10px',
        backgroundColor: 'CornflowerBlue',
        borderRadius: '20px'
    }
    const divMiddle = {
        flex: '1',
        margin: '10px',
        backgroundColor: 'CornflowerBlue',
        borderRadius: '20px'
    }
    const textBlock = {         
        fontSize: '1.1vw',
        backgroundColor: 'white',           
        width: '90%',
        margin: 'auto',
        flex: '1',
        marginBottom: '18px',
        marginTop: '18px',
        borderRadius: '20px',
        border: '2px solid'
    }
    const textStyling = {
        fontSize: '1vw',
        margin: '12px',
        fontWeight: 'normal'
    }
    const textContainer = {
        display: 'flex',
        flexDirection: 'column'
    }
    return (
        <div style={outerDiv}>
            <div>Services we provide</div>
            <div style={flexContainer}>
                <div style={divLeft}>
                    <img
                    style={imageStyling}
                    src={leftIcon}            
                    />      
                    <div style={textContainer}><div style={textBlock}><div style={textStyling}>{placeholderText}</div></div></div>          
                </div>

                <div style={divMiddle}>
                    <img
                    style={imageStyling}
                    src={middleIcon}            
                    />
                    <div style={textContainer}><div style={textBlock}><div style={textStyling}>{placeholderText}</div></div></div> 
                </div>

                <div style={divRight}>
                    <img
                    style={imageStyling}
                    src={rightIcon}            
                    />
                    <div style={textContainer}><div style={textBlock}><div style={textStyling}>{placeholderText}</div></div></div>  
                </div>                        
            </div>
        </div>        
        
    );
}

export default Services;
