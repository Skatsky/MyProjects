<template>
  <div id="app">
    <div class="wrapper">
      <div class="circle">
        <div class="battom-part">
          <div class="top-left-color part"></div>
          <div class="top-right-color part"></div>
        </div>
          <div class="top-part">
            <div class="bottom-left-color part"></div>
            <div class="bottom-right-color part"></div>
        </div>
      </div>
      <div class="controller-wrapper">
        <div class="controller">
          <h2 id="round-text">ROUND <span id="round-number"></span></h2>
          <button id="startBtn">Start</button>
          <ul class="game-mode">
            <li><input type="radio" name="compexity" id="easy" checked><label for="easy">  Easy</label></li>
            <li><input type="radio" name="compexity" id="normal"><label for="normal">  Normal</label></li>
            <li><input type="radio" name="compexity" id="hard"><label for="hard">  Hard</label></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
  body {
    margin: 0px;
    background-color: aliceblue;
    font-family: cursive;
  }
  .wrapper {
    font-size: 1.5em;
    display: flex;
    justify-content: space-between;
    width: 40%;
    margin: auto;
    margin-top: 300px;
  }
  .part {
    width: 150px;
    height: 150px;
    display: inline-block;
    cursor: pointer;
  }

  .part:hover {
    /* border: 2px solid black; */
    box-shadow: 0px 0px 0px 3px black;
    box-sizing: border-box;
  }

  .bottom-left-color {
    border-bottom-left-radius: 100%;
    background-color: red;
    margin-right: 2px;
  }
  .bottom-right-color {
    border-bottom-right-radius: 100%;
    background-color: blue;
    margin-left: 2px;
  }
  .top-left-color {
    border-top-left-radius: 100%;
    background-color: green;
    margin-right: 2px;
  }
  .top-right-color {
    border-top-right-radius: 100%;
    background-color: yellow;
    margin-left: 2px;
  }
  button {
    font-size: 1em;
    padding: 15px 70px;
    border-radius: 5px;
    border-color: white;
    font-family: cursive;
  }
  button:hover {
    border-color: black;
  }
  .game-mode {
    list-style-type: none;
  }
  .active {
    background-color: white;
  }
  .controller h2 {
    display: flex;
    justify-content: center;
  }
</style>
