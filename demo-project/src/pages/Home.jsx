
const Home = () => {
    return (
        <div>
  <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
     
      <img src={"src/images/01.jpg"} className="mx-auto d-block w-50 h-20" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={"src/images/02.jpg" }className="d-block mx-auto w-50" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={"src/images/kl16_vgl7_220303.jpg" }className="d-block mx-auto w-50" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </div>
    );
};

export default Home;