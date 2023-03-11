import React, { useEffect, useState } from 'react'
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { auth, db, storage } from '../Firebase/ConfiqFirebase'
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import style from '../../styles/admin.module.css'
import { Container, Table, Button, Modal, Toast } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { logout } from '../Firebase/Auth';
import Link from 'next/link';

interface Todo {
  id: string;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}
const Dashboard = () => {

  // state variables
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [todoData, setTodoData] = useState<Todo[]>([]);
  const [showToast, setShowToast] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  // Auth state
  const [currentUser, setCurrentUser] = useState(null);
  const router = useRouter();
  // check login user or not logged in
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // setCurrentUser(user);
      } else {
        router.push("/");
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/"); // Redirect to login page on successful logout
    } catch (error) {
      console.error(error);
    }
  };

  //  addData in todo 
  const addData = async (e: any) => {
    e.preventDefault();
    if (!formSubmitted) {
      setFormSubmitted(true);

      if (imageFile) {
        // Create a reference to the storage location where the image will be stored
        const storageRef = ref(storage, `Product_images/${imageFile.name}`);
        // Upload the image to Firebase Storage
        await uploadBytes(storageRef, imageFile);
        // Get the URL of the uploaded image
        const imageUrl = await getDownloadURL(storageRef);



        const dataRef = collection(db, 'Products')

        const newData = {
          title: title,
          description: description,
          price: price,
          imageUrl: imageUrl
        }

        const doc = await addDoc(dataRef, newData)
        console.log('New todo added with ID:', doc.id);
        // Clear the form inputs
        setTitle('');
        setDescription('');
        setPrice('');
        setImageFile(null);
        setShowToast(true);

        // Hide the toast message after a few seconds
        setTimeout(() => setShowToast(false), 3000);
        setTimeout(() => {
          setFormSubmitted(false);
        }, 3000);
      }
    }
  }

  const handleProductImage = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0]);
    }
  }
  // fetch data from firebase

  useEffect(() => {
    const fetchData = async () => {
      const Ref = collection(db, 'Products')
      const getData = await getDocs(Ref);
      const TodoData: Todo[] = [];
      getData.forEach((doc: any) => {
        TodoData.push({ id: doc.id, ...doc.data() })
      })
      setTodoData(TodoData)
    }
    fetchData()
  }, [])



  // Delete data from the database and storage of firebase

  const deleteTodo = async (id: string, imageUrl: string) => {
    try {
      // Delete image from 
      if (imageUrl) {
        const storageRef = ref(storage, imageUrl);
        await deleteObject(storageRef);
      }

      // Delete data from Firestore
      const docRef = doc(db, 'Products', id);
      await deleteDoc(docRef);

      // Update state with remaining todo data
      const remainingTodos = todoData.filter((todo) => todo.id !== id);
      setTodoData(remainingTodos);
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };



  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Container fluid className={style.adminCon}>
        {/* <Button variant="primary" onClick={getTodosHandler}>Product</Button> */}
        <h1>Only for Admin Control!</h1>

        <Container fluid>
          <Button onClick={handleLogout} variant='danger'>Logout</Button>

          <Button variant="primary" onClick={handleShow}>   Add New Product</Button>
          <Link href='GalleryImg' >   <Button variant="success">   Add Gallery</Button> </Link>




          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title> Add New Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <form autoComplete="off" >

                <input type="text" name='title' value={title} className={style.contactus} placeholder="Add New Product Title" required
                  onChange={(e: any) => setTitle(e.target.value)}
                />
                <input type="text" name='des' className={style.contactus} placeholder="Add New Product Discription" required
                  onChange={(e: any) => setDescription(e.target.value)} value={description} />

                <input type="text" name='price' className={style.contactus} placeholder="Add New Product Price" required
                  onChange={(e: any) => setPrice(e.target.value)} value={price} />

                <input type="file" id='file' onChange={handleProductImage} placeholder="Add New Product Image" required />

                <button type='submit' onClick={addData} className={style.btn} disabled={formSubmitted} >Upload</button>

              </form>
              <Toast show={showToast} onClose={() => setShowToast(false)}>
                <Toast.Header>
                  <strong className="me-auto">Data Submitted</strong>
                </Toast.Header>
                <Toast.Body>Your data has been successfully submitted.</Toast.Body>
              </Toast>
            </Modal.Body>
          </Modal>
        </Container>
        <Container>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Title</th>
                <th>Product Price</th>
                <th>Product Description</th>
                <th>Product Image</th>
                <th></th>

              </tr>
            </thead>
            <tbody>
              {todoData.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.title}</td>
                  <td>{todo.description}</td>
                  <td>{todo.price}</td>
                  <td><img src={todo.imageUrl} alt="" width='150px' /></td>
                  <td> <Button variant="danger" onClick={() => deleteTodo(todo.id, todo.imageUrl)}> Delete </Button></td>
                </tr>
              ))}

            </tbody>
          </Table>

        </Container>

      </Container>
    </>
  )
}

export default Dashboard
