import React from 'react'
import leftIcon from '../assets/icons/earth.png'
import middleIcon from '../assets/icons/graphic.png'
import rightIcon from '../assets/icons/008-online-test.png'
const Options = () => {
    const placeholderText1 = "This option will provide the user to choose a city and then compare it with 4 different cities. The comparison will provide information about the number of accidents, weather, and ranking."
    const placeholderText2 = "This option will provide the user with a general ranking of the cities, ordered by their number of accidents. It will have a chart and a graph for the user to easily visualize their chosen city’s statistics."
    const placeholderText3 = "This option will provide the user with sample driving test questions where they can test their understanding of the driving rules. If the user does well, they will receive a star to encourage the user to complete more quizzes."
    const outerDiv = {
        backgroundColor: "royalblue",
        textAlign: 'center',
        borderTop: '2px solid',
		borderLeft: '2px solid',
		borderRight: '2px solid',
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
            <div>Options</div>
            <div style={flexContainer}>
                <div style={divLeft}>
                    <img
                    style={imageStyling}
                    src={leftIcon}            
                    />      
                    <div style={textContainer}><div style={textBlock}><div style={textStyling}>{placeholderText1}</div></div></div>          
                </div>

                <div style={divMiddle}>
                    <img
                    style={imageStyling}
                    src={middleIcon}            
                    />
                    <div style={textContainer}><div style={textBlock}><div style={textStyling}>{placeholderText2}</div></div></div> 
                </div>

                <div style={divRight}>
                    <img
                    style={imageStyling}
                    src={rightIcon}            
                    />
                    <div style={textContainer}><div style={textBlock}><div style={textStyling}>{placeholderText3}</div></div></div>  
                </div>                        
            </div>
        </div>        
        
    );
}

export default Options;
