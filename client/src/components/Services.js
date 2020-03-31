import React from 'react';
import leftIcon from '../assets/icons/006-driving-license.png'
import middleIcon from '../assets/icons/pickup-car.png'
import rightIcon from '../assets/icons/002-gps.png'
const Services = () => {
    const placeholderText11 = "Get each city's accident reports, weather trends, and rankings!"
    const placeholderText22="Compare accident reports between cities!"
    const placeholderText33="Take driving quizzes and put your road knowledge to the test!" 
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
            <div>Services We Provide</div>
            <div style={flexContainer}>
                <div style={divLeft}>
                    <img
                    style={imageStyling}
                    src={leftIcon}            
                    />      
                    <div style={textContainer}><div style={textBlock}><div style={textStyling}>{placeholderText11}</div></div></div>          
                </div>

                <div style={divMiddle}>
                    <img
                    style={imageStyling}
                    src={middleIcon}            
                    />
                    <div style={textContainer}><div style={textBlock}><div style={textStyling}>{placeholderText22}</div></div></div> 
                </div>

                <div style={divRight}>
                    <img
                    style={imageStyling}
                    src={rightIcon}            
                    />
                    <div style={textContainer}><div style={textBlock}><div style={textStyling}>{placeholderText33}</div></div></div>  
                </div>                        
            </div>
        </div>        
        
    );
}

export default Services;
