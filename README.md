
# Wanderlust – Travel Listing & Review Platform  
LIVE LINK: #
[**Live Demo**](https://airbnb-clone-mern-stack-project-ihqk.onrender.com/listings)

Wanderlust is a full-stack web application that lets users explore, create, and review travel destinations. Built using the MERN stack (MongoDB, Express.js, React, Node.js), it provides a seamless platform for travelers to share their experiences and discover new places.  





***

## Features  

- Create, edit, and delete travel listings with images and descriptions  
- User authentication and authorization using Passport.js  
- Review system with rating and comment functionality  
- Responsive and intuitive UI for desktop and mobile users  
- Secure server-side validation for form submissions  
- RESTful API design for scalability and maintainability  
- Map integration using Leaflet for location visualization  

***

## Tech Stack  

| Category | Technologies Used |
|-----------|-------------------|
| Frontend | React.js, Bootstrap, CSS3, HTML5 |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | Passport.js, Express-Session |
| Maps | Leaflet.js |
| Other Tools | Cloudinary (for image uploads), Multer, EJS, dotenv, nodemon |

***

## Folder Structure  

```
Wanderlust/
│
├── models/           # Mongoose schemas
├── routes/           # Express route handlers
├── public/           # Static assets (CSS, JS, images)
├── views/            # EJS templates (if SSR used)
├── utils/            # Middleware and helpers
├── app.js            # Main Express app
├── package.json
└── README.md
```

If you used React for the frontend instead of EJS, replace the `views/` part with your `client/` directory setup.

***

## Installation & Setup  

Follow these steps to run Wanderlust locally:  

1. **Clone the repository**  
   ```
   git clone https://github.com/your-username/Wanderlust.git
   cd Wanderlust
   ```

2. **Install dependencies**  
   ```
   npm install
   ```

3. **Setup environment variables**  
   Create a `.env` file in the root directory and add:  
   ```
   MONGO_URI=your_mongodb_connection_string
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_KEY=your_api_key
   CLOUDINARY_SECRET=your_api_secret
   SESSION_SECRET=your_secret_key
   ```


## Screenshots  

<img width="1917" height="823" alt="image" src="https://github.com/user-attachments/assets/bc02f817-ed01-4b41-9e4d-014206a0fdf5" />

<img width="1898" height="948" alt="image" src="https://github.com/user-attachments/assets/1d84064a-0d70-4970-a089-58a532ba73fd" />

<img width="1914" height="924" alt="image" src="https://github.com/user-attachments/assets/9291cdff-0910-450c-8acb-e7b06fe9bf52" />


  
For example:  

- Homepage  
- Listing Details Page  
- Create/Edit Form    

***

## Future Improvements  

- Add pagination for listings  
- Implement wishlist/favorites feature  
- Add user profiles and social sharing  
- Include advanced search and filtering options  

***

## Deployment  

You can deploy this project using services like:  
- **Frontend:** Netlify or Vercel  
- **Backend:** Render, Railway, or Cyclic  
- **Database:** MongoDB Atlas  

***

## Contributing  

Contributions are welcome! If you’d like to improve this project:  
1. Fork the repository  
2. Create a new branch (`feature/new-feature`)  
3. Commit your changes and push  
4. Submit a pull request  


***

## Author  

Developed with passion by [Aditya](https://github.com/aditya-am-mishra).  

***
