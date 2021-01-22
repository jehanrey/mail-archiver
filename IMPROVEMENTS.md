## List of UX improvements

1. It might be helpful to have separate fields for FROM date and TO date. This way, the user can do a one-way filtering by date of mails.
    - To implement this, there would be 2 input fields; 1 for FROM date, and 1 TO date. A separate search button will also be needed to have a filter trigger.

2. Adding a clear filter button would make it easier for the user to remove all filters in just a click of a button.
    - To implement this, we can add a CLEAR FILTERS button on the right side of the page. It can be beside the SEARCH button if we decide to implement the first suggestion.

3. We can also add a COLLAPSE all button to make it easier for the user to collapse the content of all the mails displayed, rather than having to toggle each item.
    - To implement this, we can add a toggle icon in the columns header portion of both the mails-table and mails-list.

4. Adding a searchbox that queries the mails based on the input could be helpful if the user knows exactly what he/she is looking for.
    - To implement this, we can add an input box beside the date filters component.

5. To make the UI less-cluttered, we can place all the filter-fields in a side-drawer. Filtering by FROM date, TO date, and even to MULTIPLE recipients can be done in the side-drawer.
    - To implement this, we can create a side-drawer that can be opened from the list. On the drawer, there would be a FILTER and CLEAR FILTER button on the bottom to trigger filtering of the displayed mails. What will be left outside is a searchbox text field.