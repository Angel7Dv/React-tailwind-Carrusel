import React from 'react'
import './carrusel1.css'

export const Carrusel1 = ({images}) => {

    console.log(images)
  
    return (
        <div>
            <div id="carousel-container">
                <div>
                    <ul id="carousel" className="animate">

                        {images && images.map((e,i)=>{

                        <li key={i} className="slide animate">
                            <img src={"/gallery/02.jpg"} alt={e}/>
                        </li>
                        })}
                        
                    </ul>
                </div>
                <div id="controls">
                    <span id="prev"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/prev.png"/></span>
                    <span id="next"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/next.png"/></span>
                </div>
            </div>

        </div>
    )
}


/**
 * 
 * var index = 0,
    amount = 0,
    currTransl = [],
    translationComplete = true,
    moveOffset = 0;

var transitionCompleted = function(){
    translationComplete = true;
}

document.addEventListener("DOMContentLoaded", function(event) 
{
    var carousel = document.getElementById('carousel');

    amount = document.getElementsByclassNameName("slide").length;
    // get the width of the container
    moveOffset = parseInt(window.getComputedStyle(document.getElementById('carousel-container')).width, 10);
    // calcuate the width of the carousel
    document.getElementById('carousel').style.width = (amount * moveOffset) + 'px';
    // prevent multiple click when transition
    for(var i = 0; i < amount; i++)
    {
        currTransl[i] = -moveOffset;
        document.getElementsByclassNameName("slide")[i].addEventListener("transitionend", transitionCompleted, true);                    
        document.getElementsByclassNameName("slide")[i].addEventListener("webkitTransitionEnd", transitionCompleted, true);                    
        document.getElementsByclassNameName("slide")[i].addEventListener("oTransitionEnd", transitionCompleted, true);                    
        document.getElementsByclassNameName("slide")[i].addEventListener("MSTransitionEnd", transitionCompleted, true);                  
    }
    // add the last item to the start so that translateX(-moveOffset) works (In case the first click is the previous button)
    document.getElementById('carousel').insertBefore(document.getElementById('carousel').children[4], document.getElementById('carousel').children[0])
    // add click events to control arrows
    document.getElementById('prev').addEventListener('click', prev, true);
    document.getElementById('next').addEventListener('click', next, true);
});

function prev()
{
    if (translationComplete === true)
    {
        translationComplete = false;
        index--;
        if (index == -1)
        {
            index = amount-1;
        }
        var outerIndex = (index) % amount;
        for (var i = 0; i < amount; i++)
        {
            var slide = document.getElementsByclassNameName("slide")[i];    
            slide.style.opacity = '1';    
            slide.style.transform = 'translateX('+(currTransl[i]+moveOffset)+'px)';
            currTransl[i] = currTransl[i]+moveOffset;
        }
        var outerSlide = document.getElementsByclassNameName("slide")[outerIndex];
        outerSlide.style.transform = 'translateX('+(currTransl[outerIndex]-(moveOffset*amount))+'px)';
        outerSlide.style.opacity = '0';
        currTransl[outerIndex] = currTransl[outerIndex]-moveOffset*(amount);
    }
}

function next()
{
    if (translationComplete === true)
    {
        translationComplete = false;
        var outerIndex = (index) % amount;
        index++;
        for(var i = 0; i < amount; i++)
        {
            var slide = document.getElementsByclassNameName("slide")[i];    
            slide.style.opacity = '1';    
            slide.style.transform = 'translateX('+(currTransl[i]-moveOffset)+'px)';
            currTransl[i] = currTransl[i]-moveOffset;
        }
        var outerSlide = document.getElementsByclassNameName("slide")[outerIndex];
        outerSlide.style.transform = 'translateX('+(currTransl[outerIndex]+(moveOffset*amount))+'px)';
        outerSlide.style.opacity = '0';
        currTransl[outerIndex] = currTransl[outerIndex]+moveOffset*(amount);
    }
}
 */
