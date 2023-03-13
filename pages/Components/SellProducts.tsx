import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Card, Container } from 'react-bootstrap';
import { collection, getDocs } from 'firebase/firestore';
import {db, } from '../../Firebase/ConfiqFirebase'


interface Todo {
    id: string;
    title: string;
    description: string;
    price: string;
    imageUrl: string;
  }

const SellProducts = () => {

    const [todoData, setTodoData] = useState<Todo[]>([]);

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
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
       // fetch data from firebase

       useEffect(() => {
        const fetchData = async () => {
          try {
            const Ref = collection(db, 'Products');
            const getData = await getDocs(Ref);
            const TodoData: Todo[] = [];
            getData.forEach((doc: any) => {
              TodoData.push({ id: doc.id, ...doc.data() });
            });
            setTodoData(TodoData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        fetchData();
      }, []);
      

  return (
   <>
<Container id='gallery'>
<Carousel responsive={responsive} infinite={true}
  showDots={true}
  autoPlaySpeed={1000}  >
   {todoData.map((todo) => (
        <Card style={{ width: '25rem' }}  key={todo.id}>
        <Card.Img variant="top" src={todo.imageUrl} style={{ height: '10rem', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title className='text-primary'>{todo.title}</Card.Title>
          <Card.Title className='text-success'>{todo.price}</Card.Title>
          <Card.Text>{todo.description}</Card.Text>
        </Card.Body>
      </Card>
             
              ))}

</Carousel>
</Container>
   </>
  )
}

export default SellProducts
