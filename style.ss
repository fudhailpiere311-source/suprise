body {
  background: linear-gradient(to right, #ff758c, #ff7eb3);
  font-family: Arial, sans-serif;
  text-align: center;
  padding-top: 50px;
  margin: 0;
  overflow-x: hidden;
}

.card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  width: 90%;
  max-width: 420px;
  margin: auto;
  box-shadow: 0px 10px 20px rgba(0,0,0,0.3);
}

h1 { color: #ff4d6d; }

.message {
  font-size: 15px;
  line-height: 1.6;
}

button {
  background: #ff4d6d;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
}

.popup {
  display: none;
  background: white;
  padding: 25px;
  border-radius: 20px;
  position: fixed;
  inset: 0;
  margin: auto;
  width: 80%;
  max-width: 300px;
  box-shadow: 0px 10px 20px rgba(0,0,0,0.4);
  z-index: 10;
}

#confetti {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 5;
}

/* GALLERY */
.gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 20px;
}

.gallery img {
  width: 100%;
  border-radius: 15px;
}
