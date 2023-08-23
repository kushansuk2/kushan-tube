# kushan-tube

# Debouncing:

### difference between two key press (strokes)

typing slow : 200ms
typing fast : 30 ms

### performance

-   iphone pro max = 14 letter \* 1000 people => 14000 api calls (for every key press)
-   with debouncing = 3 calls \* 1000 => 1000 api calls
-   imagine it with millions of people
-   it gives huge performance boost as api calls are heavy because data is not in our app hand shake and http all network stuff takes place

### debouncing with 200ms

if diff between two key stroke is less than 200ms don't do api call else do api calls
