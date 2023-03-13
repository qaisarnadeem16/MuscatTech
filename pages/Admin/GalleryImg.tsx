import React, { useEffect, useState } from 'react'
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { auth, db, storage } from '../../Firebase/ConfiqFirebase'
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import style from '../../styles/admin.module.css'
import { Container, Table, Button, Modal, Toast } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify'
import { logout } from '../../Firebase/Auth';


interface Todo {
    id: string;
    imageUrl: string;
}
const GalleryImg = () => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [todoData, setTodoData] = useState<Todo[]>([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
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
        setIsLoading(true);

        try {
            if (imageFile) {
                // Create a reference to the storage location where the image will be stored
                const storageRef = ref(storage, `Gallery_images/${imageFile.name}`);
                await uploadBytes(storageRef, imageFile);
                const imageUrl = await getDownloadURL(storageRef);
                const dataRef = collection(db, 'Gallery_Images');

                const newData = {
                    imageUrl: imageUrl
                };

                const doc = await addDoc(dataRef, newData);
                console.log('New todo added image ID:', doc.id);
                // Clear the form inputs
                setImageFile(null);
                setIsLoading(false);
                toast.success('Successfully Upload Image....');
            } else {
                console.error('Error adding document: imageFile is null');
                setIsLoading(false);
                toast.error('Error uploading image');
            }
        } catch (error) {
            console.error('Error adding document: ', error);
            setIsLoading(false);
            toast.error('Error uploading image');
        }
    };
    const handleProductImage = (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            setImageFile(e.target.files[0]);
        }
    }

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
    // Delete data from the database and storage of firebase
    const deleteTodo = async (id: string, imageUrl: string) => {
        try {
            if (imageUrl) {
                const storageRef = ref(storage, imageUrl);
                await deleteObject(storageRef);
            }
            // Delete data from Firestore
            const docRef = doc(db, 'Gallery_Images', id);
            await deleteDoc(docRef);
            // Update state with remaining todo data
            const remainingTodos = todoData.filter((todo) => todo.id !== id);
            setTodoData(remainingTodos);
            toast.success('Image deleted successfully');
        } catch (error) {
            console.error("Error removing document: ", error);
            toast.error('Error deleting image');
        }
    };

    return (
        <>
            {isLoading}

            <Container fluid className={style.adminCon}>
                {/* <Button variant="primary" onClick={getTodosHandler}>Product</Button> */}
                <h1>Only for Admin Control!</h1>

                <Container fluid>
                    <Button onClick={handleLogout} variant='danger'>Logout</Button>
                    <div className="p-1">
                        <form >
                            <h4>Select Image</h4>

                            <input type="file" id='file' onChange={handleProductImage} placeholder="Add New Product Image" required />
                            <Button type='submit' onClick={addData} className='btn mt-1' variant='primary' >Upload</Button>
                        </form>

                    </div>

                </Container>
                <Container>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Gallery Image</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {todoData.map((todo) => (
                                <tr key={todo.id}>
                                    <td><img src={todo.imageUrl} alt="" width='100px' /></td>
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

export default GalleryImg
