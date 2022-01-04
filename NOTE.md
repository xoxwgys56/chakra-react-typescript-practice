# NOTE

personal note about this project

## in progress

- [ ] test code
- [ ] documentation
- [ ] github webhook ci
- [ ] use local storage

## Fun stuff

### prettier Mixed spaces and tabs

https://github.com/prettier/prettier/issues/4199

In my case I met this issue below code:

```ts
switch (action.type) {
    // ...
    case ActionType.TOGGLE_COMPLETE:
        return {
            ...state,
            todoList: state.todoList.map((item) =>
                item.id === action.itemId
                    ? {
                        ...item,
                        isCompleted: !item.isCompleted,
                    } // <--- here
                    : item
            ),
        };
    // ...
}
```

#### solution

```eslint
"extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier" // <-- add this
],
```