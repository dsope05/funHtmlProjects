const d1 = document.getElementById('d1');
d1.onmouseover = (e) => {
  d1.childNodes.forEach((child) => {
    if (child.id) {
      if (child.id <= e.srcElement.id) {
        child.className = 'far fa-star gold';
      } else {
        child.className = 'far fa-star standard';
      }
    }
  });
};
