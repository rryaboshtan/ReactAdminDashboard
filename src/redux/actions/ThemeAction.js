const setMode = mode => {
   return {
      type: 'SET_MODE',
      payload: mode,
   };
};

const setColor = mode => {
   return {
      type: 'SET_COLOR',
      payload: mode,
   };
};

const getTheme = () => {
   return {
      type: 'GET_THEME',
   };
};

const exportDefault = {
   setColor,
   setMode,
   getTheme,
};

export default exportDefault;
