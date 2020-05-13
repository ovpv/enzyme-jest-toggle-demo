import React from 'react';

export const _handleName = (name) => {
  console.log(name);
};

export const onClickSaveLayout = (name, fn) => {
  name = name.replace(/\s{2,}/g, ' ').trim();
  let nameExists = name.length;
  if (nameExists) {
    //compute this block if nameexists
    fn(name);
    return true;
  } else {
    //compute this block if not nameexists
    return false;
  }
};

const MyComp = () => {
  const saveLayout = (e) => {
    onClickSaveLayout(e.target.value, _handleName);
  };
  return (
    <div>
      <input type="text" />
      <button onClick={(e) => saveLayout(e)}>Save</button>
    </div>
  );
};

export default MyComp;
