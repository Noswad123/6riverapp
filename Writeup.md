# Candidate Writeup

Please fill in this file with a brief description of the items you selected from the backlog and how you addressed them.
<<<<<<< HEAD

## Clean up the redundant code in `Robot.move`
- I removed the switch statement
- created validate bounds function that takes in the new x and new y coordinates and calls canvasView.validatebounds for both the x and the y
- I also created an object to better handle the x/y incrementing/decrementing, depending on the direction

## Port the code to Angular (or another framework)
- I migrated program to React
- Canvas(the grid), the instructions, controls, and current status have their own container(view) file
- they make use of helper files for some of the business logic and constant variables
- I imported styled-components library for inline css
- right and left  names were changed to right and left respectfully
-

## Replace canvas view with PixiJS (or another graphics package)
- I used Konva and react-konva libraries to help render objects to the canvas
-The canvas and robot make use of the Rect object
-The goal uses the circle object
=======
>>>>>>> 8c4b1a53c5244ecf6f9dd02a935f39e84812d064
