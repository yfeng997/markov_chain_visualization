

## Markov Visualization
---

### Purpose

This local web application is built to represent a Markov Chain graphically. More specifically, users can get a visual representation of the Markov Chain by inputting any **transition matrix** and specifying the labels for all states. 

### Build

To build and deploy the website, simply locate the *index.html* file inside the *markov* folder and open it with any web browser. A demo version of the visualization will show up. 

### How to use

The web app has three major sections. 
> Right hand side
> Input the Transition matrix of the Markov Chain. Node that the number of columns must equal to number of rows. 

> Left hand side
> Input a String array containing names of all states. Note that the length of this array should match the column number of the Transition matrix. 

> Middle ground
> This is where the visual representation will show up. 

**Important:** After inputting the Transition matrix and the array of state names, **refresh** the page in order to view the result. 

### Example

<img src="https://github.com/YuansongFeng/markov_chain_visualization/blob/master/screenshot/demo.png?raw=true" width="500">

### Attribution

This application is built upon the foundation of [Setosa Markov Chain](http://setosa.io/blog/2014/07/26/markov-chains/index.html), a web application built with Angular JS and D3 JS. 

Modifications:
1. Remove the restriction that all rows of the transition matrix need to sum up to one, so that rounding errors are tolerated.  
2. Allow users to label each state instead of naming all states alphabetically. 
3. Show the probability of transition on all connecting edges. 

