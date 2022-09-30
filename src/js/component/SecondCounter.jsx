import React from 'react';


function SecondCounter({one, two, three}) {
  return (
    <div>
<p>{three%10}{two%10}{one%10}</p>
    </div>


  );
}


export default SecondCounter;
