# Debouncing vs Throttling

Both used to optimizing web app performance, done by limiting the rate of function calls. Limiting rate of execution of a function

Like API fetches or loggers

## Example 1: How Search bar of ecommerce site uses Debouncing and Throttling

On a keypress or keyup, a getResults APi call for the search bar.

### Debouncing

Difference between two keystroke events is > 300 ms, then API cal

### Throttling

Function call after a specific time limit eg. 300 ms and ignores all other events

## Example 2: Debouncing and Throttling effect on Resizing of Window

How frequently the browser is being resized.

Add an eventListener and add a API call eg. trackResize() - will call more than 1000s

### Debouncing

Difference between two events > 300 ms, then API call - so if the user is resizing slowly

### Throttling

Function call after a specific time limit eg. 300 ms and ignores all other events

## Example 3: Shooting Game scenario using Throttling and Debouncing

On button click, we are triggering an event eg. clickHandler. Example a shooting game.

### Debouncing

Difference between two events > 500 ms, then API call - can have different time values for different gun, this could trigger differently.

### Throttling

Function call after a specific time limit eg. 300 ms and ignores all other events - can have different time values for different gun, this could trigger differently.

> Think about the scenario and what would work better based on the situation and requirement, maybe the user experience or how it is used by users.
