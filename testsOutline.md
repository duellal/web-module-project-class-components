# Tests for Todo App:

### On Render:
- App renders correctly
- App has a header of 'Todo App'
   - Won't be able to do this, b/c this header is not in the App component
- Todos have a header of 'Todos:'

- List of todos renders - may not be accessible within the App component
- Input box renders - may not be accessible within the App component
- Submit button renders - may not be accessible within the App component
- Clear completed button renders - may not be accessible within the App component

### Adding Todo:
- User cannot submit no text for a todo
- User can type into the input box with the placeholder text "Todo"
   - User can submit the Todo using the submit button
   - The new todo renders on the page, being added to the list

### Clearing Todos:
- User can click on a todo to cross it out
   - User can click on the same todo, to not have it crossed out
- User crosses out todo(s), then clicks the "Clear Completed" button
   - All selected todos with a line through them, are deleted -> User no longer sees them on the page
