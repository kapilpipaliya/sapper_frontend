<style>
  .cards {
    display: flex;
    flex-flow: row wrap;

    justify-content: center;
  }
  .card {
    border: 1px dashed #ccc;
    margin: 10px 10px;
    /* padding: 0 20px; */

    display: flex;
    flex-direction: column;
    
  }
  button {
    height: 40px;
    background: #fff;
    padding: 0 40px;
    border: 1px solid #000;
  }
  p:last-child {
    text-align: center;
    margin-top: auto;
  }
  /* ￼    transition: all 0.25s ease-in; */
</style>


<div class="cards">
  <slot>
    <div class="card">
      <p>Lorem ipsum Magna proident ex anim mollit labore dolore voluptate ullamcoetut sed qui minim.</p>
      <p><button>Action</button></p>
    </div>
    <div class="card">
      <p>Lorem ipsum Magna proident ex anim mollit labore dolore voluptate ullamcoetut sed qui minim.</p>
      <p><button>Action</button></p>
    </div>

    <div class="card">
      <p>Lorem ipsum Magna proident ex anim mollit labore dolore voluptate ullamcoetdolor ullamco pariatur reprehenderit culpa esse enim ut sed qui minim.</p>
      <p>Lorem ipsum Magna proident ex anim mollit labore dolore voluptate ullamcoetdolor ullamco pariatur reprehenderit culpa esse enim ut sed qui minim.</p>
      <p>Lorem ipsum Magna proident ex anim mollit labore dolore voluptate ullamcoetdolor ullamco pariatur reprehenderit culpa esse enim ut sed qui minim.</p>
      <p>Lorem ipsum Magna proident ex anim mollit labore dolore voluptate ullamcoetdolor ullamco pariatur reprehenderit culpa esse enim ut sed qui minim.</p>

      <p><button>Action</button></p>
    </div>
  </slot>
</div>