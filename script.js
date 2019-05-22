'use strict';
   
const table = document.getElementById('grid');

function sorted(event) {
  const target = event.target;
  const trBody = table.lastElementChild.rows;
  const index = target.cellIndex;

  function compareNumber(a, b) {
    return a.cells[index].innerHTML - b.cells[index].innerHTML;
  }

  function compareString(a, b) {
    if (a.cells[index].innerHTML[0] < b.cells[index].innerHTML[0]) {
      return -1;
    }
    if (a.cells[index].innerHTML[0] > b.cells[index].innerHTML[0]) {
      return 1;
    }
    return 0;
  }

  let compare = target.dataset.type === 'number' ? compareNumber : compareString;
  
  table.tBodies[0].append(...[...trBody].sort(compare));
}

table.tHead.addEventListener('click', () => sorted(event));
    

    
    
