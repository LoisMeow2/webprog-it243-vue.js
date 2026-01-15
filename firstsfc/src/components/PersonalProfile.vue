<template>
  <div class="profile-wrapper">
    <h1>Personal Profile Web page Lois Vera Cruz</h1>

    <div class="container">
      <div class="grid-item">About Me!</div>
      <div class="grid-item">
        Education / Achievements<br> Course BSIT APC <br> 
        <img src="https://www.serebii.net/rumblerush/pokemon/357.png" width="50" height="50">
      </div>
      <div class="grid-item">
        IT Experience<br> Programmer 2024 <br> 
        <img src="https://www.serebii.net/rumblerush/pokemon/357.png" width="50" height="50">
      </div>
      <div class="grid-item">
        Hobbies & Interest<br> I draw, play games, Tekken, Pokémon... <br> 
        <img src="https://www.serebii.net/rumblerush/pokemon/357.png" width="50" height="50">
      </div>
    </div>

    <div class="grid-container">
      <div class="header"><h1>Tropius</h1></div>

      <div class="menu">
        <ul>
          <li>The Style</li>
          <li>The Cost</li>
          <li>The Species</li>
        </ul>
      </div>

      <div class="content">
        <h2>Meow</h2>
        <p>Tropius</p>
        <img src="https://www.serebii.net/rumblerush/pokemon/357.png" class="main-img">
      </div>  

      <div class="facts">
        <h2>Facts:</h2>
        <ul>
          <li>I love Earthy tones</li>
          <li>Big men are cool</li>
        </ul>
      </div>

      <div class="footer">
        <p>Resize the browser window to see the responsive effect.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Paste the contents of your css/rwd.css here */
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
}
.grid-item {
  border: 1px solid #ccc;
  padding: 10px;
}
.main-img {
  width: 100%;
  max-width: 460px;
  height: auto;
}
/* Add your specific .grid-container, .header, .menu styles here */
</style>