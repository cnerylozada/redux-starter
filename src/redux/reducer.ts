let lastId = 0;

export const reducer = (
  state: any[] = [],
  action: { type: string; payload: any }
) => {
  if (action.type === "bugAdded") {
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  } else if (action.type === "bugRemoved") {
    return state.filter((_) => _.id !== action.payload.id);
  } else {
    return state;
  }
};
