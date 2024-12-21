const express = require('express');
const app = express();
const port = 3000;


const RESTAURANT = {
  name: 'The Green Byte Bistro',
  isOpen: true,
  address: '742 Evergreen Rd, Mapleview, OS 45502',
  phone: '555-321-9876',
  menu: [
    { id: 1, name: 'Quantum Quinoa Mushroom Burger', price: 13.00, rating: 4, category: 'mains', details: 'A vegetarian burger made with a quinoa and mushroom patty.' },
    { id: 2, name: 'Binary Berry Cheesecake', price: 10.11, rating: 3, category: 'desserts', details: 'A creamy cheesecake bursting with flavor.' },
    { id: 3, name: 'Recursive Rigatoni', price: 17.00, rating: 5, category: 'mains', details: 'Classic rigatoni pasta with tomato sauce.' },
    { id: 4, name: 'Pumpkin Pi Squared', price: 3.14, rating: 5, category: 'desserts', details: 'Delightful pumpkin dessert, squared and spiced.' },
    { id: 5, name: 'Fibonacci String Bean Fries', price: 11.23, rating: 5, category: 'sides', details: 'Crispy string bean fries with a fun twist.' }
  ]
};

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home', { restaurant: RESTAURANT });
  });
  app.get('/menu', (req, res) => {
    res.render('menu', { menu: RESTAURANT.menu });
  });
  app.get('/menu/:category', (req, res) => {
    const category = req.params.category;
    const menuItems = RESTAURANT.menu.filter(item => item.category === category);
    res.render('category', { 
      category: category.charAt(0).toUpperCase() + category.slice(1),
      menuItems: menuItems
    });
  });
  
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  