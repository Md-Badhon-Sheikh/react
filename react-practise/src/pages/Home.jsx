import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function App() {
  return (
    <div>
      <div className="mb-20">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 2500 }}
          pagination={{ clickable: true }}
          navigation
        >
          <SwiperSlide>
            <img src="/src/assets/carousel/carousel 01.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/carousel/carousel 02.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/carousel/carousel 03.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>

{/* car section  */}

      <div className="max-w-6xl mx-auto mb-20">
        <div className="grid grid-cols-3 gap-6">
          {/* card 1 */}
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          {/* card 1 */}
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          {/* card 1 */}
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
    //    card section
  );
}

export default App;
