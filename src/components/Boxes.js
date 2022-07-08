import { useState } from 'react'

const Boxes = () => {

  const isEqual = () => {

    let total = 0;
    for (let i = 0; i < 9; i += 3) {
      for (let j = 1; j < 9; j++) {
        if (j === i + 1 || j === i + 2) {
          boxValues.values[i].value === boxValues.values[j].value ? total += 1 : total += -1
        }
        else {
          continue;
        }
        console.log(" i: " + i)
        console.log("------------");
        console.log("total: " + total)
      }
    }
  }


  const boxArray = Array(9).fill(null);
  const [isOver, setIsOver] = useState(false);
  const [boxValues, setBoxValue] = useState({

    values: [
      {
        id: 1,
        value: ""
      },
      {
        id: 2,
        value: ""
      },
      {
        id: 3,
        value: ""
      },
      {
        id: 4,
        value: ""
      },
      {
        id: 5,
        value: ""
      },
      {
        id: 6,
        value: ""
      },
      {
        id: 7,
        value: ""
      }, {
        id: 8,
        value: ""
      }, {
        id: 9,
        value: ""
      },
    ]
  }
  );


  const clickHandler = (index) => {

    const updateState = () => {

      const updatedValues = boxValues.values.map(item => {
        if (item.id === index && item.value === "") {
          return { ...item, value: "X" };
        }
        else if (item.id === index && item.value === "X") {
          return { ...item, value: "O" }
        }
        else if (item.id === index && item.value === "O") {
          return { ...item, value: "" }
        }
        return item;
      });

      setBoxValue({ values: updatedValues });
      console.log(boxValues.values[1].value);
      isEqual()
      console.log(boxValues.values[1].value);

      //console.log(boxValues.values[1].value);
    }

    updateState()

  }

  const boxes = boxArray.map((item, index) => {
    return (
      <div className={`box ${boxValues.values[index].value === "X" ? `x` : boxValues.values[index].value === "O" ? `o` : ""}`} key={index} onClick={() => clickHandler(index + 1)}>
        {boxValues.values[index].value}
      </div>
    )
  });

  return (
    <>
      <div className='boxes'>
        {boxes}
      </div>
    </>
  )
}

export default Boxes