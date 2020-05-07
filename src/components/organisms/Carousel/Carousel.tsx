import React from 'react';
import { useCarousel } from '../../../utils';

export interface ICarousel {
  slides: React.ReactNode[];
  interval: number;
}

export default function Carousel({ slides, interval = 5000 }: ICarousel) {
  const length = slides.length;
  const [active, setActive, handlers, style] = useCarousel(length, interval);

  return (
    length > 0 && (
      <div className="carousel">
        <ol className="carousel-indicators">
          {slides.map((_, index) => (
            <li
              onClick={() => setActive(index)}
              key={index}
              className={`${active === index ? 'active' : ''}`}
            />
          ))}
        </ol>
        <div className="carousel-content" {...handlers} style={style}>
          <div className="carousel-item">{slides[slides.length - 1]}</div>
          {slides.map((slide, index) => (
            <div className="carousel-item" key={index}>
              {slide}
            </div>
          ))}
          <div className="carousel-item">{slides[0]}</div>
        </div>
      </div>
    )
  );
}

// type People = {
//   img: string;
//   name: string;
//   id: string;
// };

// interface CarouselProps {
//   pageSize: number;
//   people: People[];
// }

// const CarouselWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
// `;

// export default function Carousel(props: CarouselProps) {
//   const { pageSize, people } = props;
//   const [page, setPage] = useState(0);

//   const totalPages = Math.floor(people.length / pageSize);
//   const content = people.slice(page * pageSize, pageSize);

//   <CarouselWrapper>{}</CarouselWrapper>;
// }
