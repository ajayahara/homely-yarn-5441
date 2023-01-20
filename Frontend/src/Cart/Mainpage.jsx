import { useState } from "react";
import Item from "./Item";
import Total from "./Total";
import { Flex } from "@chakra-ui/react";
const Initialdata = [
  {
    id: 1,
    name: "Indo Era Solid Wine Straight Kurta Palazzo With D...By INDO ERA DESIGNS",
    image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/186b702c5f004a0aae3eae2400c46a1e_9366/3_STRIPES_TEE_Black_HA7013_21_model.jpg",
    price: 30,
    qyt: 1
  },
  {
    id: 2,
    name: "Indo Era Solid Wine Straight Kurta Palazzo With D...By INDO ERA DESIGNS",
    image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/186b702c5f004a0aae3eae2400c46a1e_9366/3_STRIPES_TEE_Black_HA7013_21_model.jpg",
    price: 30,
    qyt: 1
  },
 
];
const MainPage = () => {
  const [data, setData] = useState(Initialdata);

  const totalsum = (sum) => {
    return sum.reduce((acc, c) => acc + c.qyt * c.price, 0);
  };

  const hendalqty = (id, amount) => {
    let newdata = data.map((item) =>
      item.id === id ? { ...item, qyt: item.qyt + amount } : item
    );
    setData(newdata);
  };
  return (
    <div style={{ border: "1px solid red", padding: 5 }}>
      {
        //  body
      }
      {data.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          image={item.image}
          label={item.name}

          price={item.price}
          qyt={item.qyt}
          hendalqty={hendalqty}
        />
      ))}

      {
        // total
      }
      <Flex style={{display:"flex",justifyContent:"end"}}>Final Price :- <Total  total={totalsum(data)} /></Flex>
    </div>
  );
};
export default MainPage;
