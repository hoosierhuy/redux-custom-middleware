export default function({ dispatch }) {
  return next => action => {
    // If payload doesn't have a .then property, we don't care, send it to reducer
    if (!action.payload || !action.payload.then) {
      // to to next middleware
      return next(action);
    }

    // Ensure the promise resolves
    action.payload
      .then(response => {
        const newAction = {
          ...action,
          payload: response,
        };

        dispatch(newAction);
      });
  };
}