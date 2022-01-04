## Technical questions

1.	How long did you spend on the coding assignment? 
```
6h in total
```
a.	What would you add to your solution if you had more time?
```
I'll included an pop-up for the book details and version selector
```
b.	If you didn't spend much time on the coding test, then use this as an opportunity to explain what you would add.
```
Right now it just a single page application. If I had more time, there are a few thing I would like to develop on.
1. Make the sorting part more powerful(ASC, DESC), add more details to it(hover effects)
2. This application will have two section one for quick search, one for detail search;for quick check what I have down will be enough.
3. For the detail search, it will have 100 per page and each one of them can be clicked with an detail pop-up.
4. In the pop-up user can see different editions book cards with cover image, short description, isbn, publish date, author, language, and source to purchase.
when they click the card will lead to the preview link. and each source to purchase will attached a link.
5. If possible to have a backend connect with the app, it will be great to have recommendation section base on search times and ratings.

```
2.	What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
```
The sorting part, I think it is more useful and it can be reused in the future.
```
/**
Because for js I can use .sort() to sort a array below is a compareFunc to help me sort the obj-array according to it's values wether you want asc or desc. 
*/
export const sort = (field, reverse, format) => {
  const key = format?
    (x) =>{
      return format(x[field])
    } :
    (x)=> {
      return x[field]
    };

  reverse = !reverse ? 1 : -1;

  return (a, b)=> {
    return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
  }
}
```
3.	How would you track down a performance issue in production? Have you ever had to do this?
```
Like in this project, if I allow the user filler book title or date ASC, I need to call two times(API) to get all the data. this will take a long time but most user if they want to find one book it worth to wait for a little bit longer. If this is a quick checking then may need to change the structure a little bit. Instead of get all the data one time, using 100 per pages and sort accordingly will be a solution too.
```
4.	How would you improve the API that you just used?
```
1. Solve the SameSite issue from the backend
2. Add the publish date, title filters
```
5.	Please describe yourself using correctly formatted JSON.
```
I was check it's official documents carefully, and I find they have a field query for apis to query the field they want. I only get what I needed the most. With the end xxx.json? all the api will return me the JSON formate data, which is the most easiest way to manipulate.

## gitpage link https://esther12.github.io/book-search/