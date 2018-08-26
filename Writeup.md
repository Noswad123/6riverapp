# Candidate Writeup

Please fill in this file with a brief description of the items you selected from the backlog and how you addressed them.

## Clean up the redundant code in `Robot.move`
- I removed the switch statement
- created validate bounds function that takes in the new x and new y coordinates and calls canvasView.validatebounds for both the x and the y
- I also created an object to better handle the x/y incrementing/decrementing, depending on the direction

## Port the code to Angular (or another framework)
- I migrated program to React
- Canvas(the grid), the instructions, controls, and current status have their own container(view) file
- they make use of helper files for some of the business logic and constant variables
- I imported styled-components library for inline css
- I imported redux to manage the state of the canvas and number of walls

## Replace canvas view with PixiJS (or another graphics package)
- I used Konva and react-konva libraries to help render objects to the canvas
- The canvas, walls, and robot make use of the Rect object
- The goal uses the circle object
- lines utilize the line object
- grid dimensions are affected by react-redux canvas state.
- they are easily changed under the simulator options

## Add walls to block robot motion
- walls can be selected from the simulator options
- walls may appear under the robot or under the goal
- if goal is under the robot, the robot is unaffected unless it moves then tries to move back to the previous location
- if goal is on top of wall, the goal should be deterined unreachable
