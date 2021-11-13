import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container, Row, TabContainer, Table } from 'react-bootstrap';
import swal from 'sweetalert';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch('https://lit-fjord-01579.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [control])


    const handleDelete = (id) => {
        console.log(id);
        swal({
            title: "Are you sure?",
            text: "Do you want to delete this Product ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    fetch(`https://lit-fjord-01579.herokuapp.com/products/${id}`, {
                        method: "DELETE",
                        headers: { "content-type": "application/json" },
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount) {
                                swal("Product has been deleted! Successfully", { icon: "success", });
                                setControl(!control);
                            }
                            else {
                                setControl(false);
                            }
                        })
                }
            });
    }


    return (
        <Container className="">
           <h2 className="text-center my-3  ">Manage All Products</h2>
            <Container>
            <Table responsive="sm" className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>Product Image</th>
                        <th>Model </th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Color</th>
                        {/* <th>Stock</th> */}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map((product, index) => (
                            <tr key={product._id}>
                                {/* <td>{index + 1}</td> */}
                                <td><img src={product?.photo} width="100px" height="50px" alt=""></img></td>
                                <td>{product?.model}</td>
                                <td>{product?.brand}</td>
                                <td>{product?.price}</td>
                                <td>{product?.color}</td>
                                {/* <td className="text-warning">{product?.stock}</td> */}
                                <td><button onClick={() => handleDelete(product._id)} className="btn bg-danger text-white px-3 py-1"> <i className="far fa-trash-alt me-2"></i>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>

            </Table>
            </Container>

        </Container>

                
        //                 products.map((product) => (
        //                     <CardGroup>
        //                         <Card>
        //                             <Card.Img variant="top" src={product?.photo} />
        //                             <Card.Body>
        //                                 <Card.Title>{product?.model}</Card.Title>
        //                                 <Card.Text>
        //                                     <h5 className="fst-italic">{product?.brand}</h5>
        //                                     <h6><i className="fas fa-coins text-warning me-1"></i>{product?.price} BDT</h6>
        //                                     <h6><i className="fas fa-palette me-1 text-danger"></i> {product?.color}</h6>
        //                                     <h6><i className="fas fa-check text-success me-1"></i>{product?.stock}</h6>
        //                                     <p className="fst-italic">{product?.details}</p>
        //                                 </Card.Text>
        //                             </Card.Body>
        //                             <Card.Footer className=" bproduct bproduct-0 bg-white" >
        //                                 <button onClick={() => handleDelete(product._id)} className="btn btn-danger w-100">Delete Product <i className="fas fa-backspace  ms-2 "></i></button>
        //                             </Card.Footer>
        //                         </Card>
        //                     </CardGroup>

        //                 ))
        //             }
        //         </Row>

        // </Container>
    );
};

export default ManageProducts;