import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { collection, getDocs } from 'firebase/firestore';
import {db, } from '../../Firebase/ConfiqFirebase'
import { Container } from 'react-bootstrap';
import { toast } from 'react-toastify';

interface Todo {
  imageUrl: string | undefined;
  id: string;
}


const Gallery = () => {
  
  const [todoData, setTodoData] = useState<Todo[]>([]);
    // fetch data from firebase

    useEffect(() => {
      const fetchData = async () => {
          try {
              const Ref = collection(db, 'Gallery_Images');
              const getData = await getDocs(Ref);
              const TodoData: Todo[] = [];
              getData.forEach((doc: any) => {
                  TodoData.push({ id: doc.id, ...doc.data() })
              })
              setTodoData(TodoData);
          } catch (error) {
              console.error('Error fetching data: ', error);
              toast.error('Error fetching data');
          }
      };

      fetchData();
  }, []);
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          partialVisibilityGutter: 30 
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


  return (
   <>
<Container id='gallery'>
  <div className="carousel-container">
      <Carousel
        responsive={responsive}
        infinite={true}
        showDots={true}
        autoPlaySpeed={1000}
      >
    {todoData.map((item) =>

        <div key={item.id}>
          <img src={item.imageUrl} alt=''  className='gImg'/>
          </div>
    )}
      </Carousel>

  </div>
</Container>
   </>
  )
}

export default Gallery
