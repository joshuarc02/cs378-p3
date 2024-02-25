import './App.css';
import MenuItem from './components/MenuItem';
import MenuHeader from './components/MenuHeader';
import MenuFooter from './components/MenuFooter'
import {OrderPopup} from './components/OrderPopup'
import { useState } from "react";

// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.


const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];



function App() {
  let tempcounts = new Array(menuItems.length)
  tempcounts.fill(0)
  const [counts, setCounts] = useState(tempcounts)
  const [subTotal, setSubTotal] = useState(0)

  function updateCount(id, inc){
    tempcounts = [...counts] 
    tempcounts[id - 1] = Math.max(tempcounts[id-1] +inc, 0)
    setCounts(tempcounts)
    setSubTotal(Math.max(subTotal + inc * menuItems[id-1].price, 0))
  }

  function clear_all(){
    setCounts(new Array(menuItems.length).fill(0))
    setSubTotal(0)
  }

  return (
    <div class="d-flex flex-column">
      <OrderPopup counts={counts} menuItems={menuItems}/>
      <MenuHeader />
      <div className="items">
        {/* Display menu items dynamicaly here by iterating over the provided menuItems */}
        {menuItems.map((menuItem) => (
          <MenuItem id={menuItem.id} title={menuItem.title} description={menuItem.description} imageName={menuItem.imageName} price={menuItem.price}  count={counts[menuItem.id-1]} updateCount={updateCount}/>
        ))}
      </div>
      <MenuFooter subTotal={subTotal} clear_all={clear_all}/>
    </div>
  );
}

export default App;
