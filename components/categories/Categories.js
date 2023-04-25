import { categories } from '../../data';
import CategoryItem from '../categories/CategoryItem';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import styles from "../../styles/Categories.module.scss";

const Categories = () => {
  return (
    <div className={styles.container__categories}>
           <Swiper
        className={styles.work__container}
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          dynamicBullets: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {categories.map((item) => (
             <SwiperSlide 
             className={styles.work__card} 
             key={item.id}
             >
        <CategoryItem item={item} key={item.id} />
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
  )
}

export default Categories