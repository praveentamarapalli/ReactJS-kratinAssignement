_Description:_

_Assumption:_

> In this project, we are assuming that Sunita Sharma is suffering from diabetes and high blood pressure.

_Why To-do list application?_

> Generally, people aged 65+ tend to forget things easily. To help with reminders for daily tasks, a to-do list application is a great option.

> As the user is a diabetic and has high blood pressure, she needs regular physical activities as well as mental activities, which are included in the sample to-do list.

> The user also needs a proper diet and should take medication regularly. In many cases, a patient may require a companion to take care of them. This to-do application will simplify these tasks for the patient.

> If she wants to add any other activities like doctor appointments or anything else beyond the daily activities, she can easily add a task to the list with a simple "add" button.

> Whenever a task is completed, the user can strike off the to-do item with a single click. The user can also undo completed tasks.

> This is a user-friendly application that alerts the user if a task is deleted or if all tasks are deleted.

_Future Scope:_

> This application has future scope, such as persisting the to-do list in local storage using JSON methods.

> Alerting the user about incomplete tasks at regular intervals to motivate them towards completion.

> Adding animations to cheer up the user every time they strike off a task.

> The possibilities for application development are endless, as there are unlimited customizations that can be made.

_Code Summery:_

> This code is a React component for a simple todo list application. It allows users to add tasks, mark them as completed, and delete them from the list. The component maintains a state with two properties: todosList and newTodoInput. The todosList holds an initial list of todos, while newTodoInput stores user input for adding new todos.

> The initial list of tasks is defined in the initialTodosList array. Each task has an ID, a title, and a status indicating whether it is checked or not.

> The component includes methods to handle user interactions. onChangeUserInput updates the newTodoInput state as the user types in the input box. onClickAddBtn adds a new todo to the todosList state with a unique ID and the title from the newTodoInput. It also clears the input box. It shows an alert to interact with the user on empty input and confirm the addition of a task to the list. ChangeTodoStatus toggles the checked/unchecked status of a todo based on its ID. deleteTodo removes a todo from the todosList state based on its ID and shows an alert to confirm the deletion. completingTodoList checks if the todo list is empty and displays a completion message if so.

> The render method defines the structure of the todo list application using JSX. It includes headings, input fields, buttons, and a list of todos. It maps through the todosList state and renders a TodoItem component for each todo, passing the necessary props. The TodoItem component handles the display and functionality of individual todos.

> Overall, the code creates a functional todo list application that allows users to manage tasks by adding, marking as completed, and deleting them. It provides a user-friendly interface and incorporates React's component-based architecture.

_Working Samples:_

> https://drive.google.com/drive/folders/16sEsnAnfQXzC3wA3m0XjK-eKm3-YtgLS?usp=sharing

> https://ptkratin.ccbp.tech
