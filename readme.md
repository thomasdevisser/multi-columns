# Multi Columns

Example block scaffolded with Create Block tool.

## Notes

### Steps for adding a new component

1.  In `block.json`, define required attributes
2.  In `edit.js`, import the component, add it to the `Edit()` function and add an event handler to update the attribute
3.  In `save.js`, import the component and add it to `save()`

### Theme Supports

If you add support in your block.json, it can still be overwritten by theme.json supports. Check if something is also enabled or disabled there.
