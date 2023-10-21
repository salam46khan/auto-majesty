
const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const type = form.type.value
        const description = form.description.value
        const product = {name, brand, price, rating, image, type, description}
        console.log(product);
        fetch('http://localhost:5000/products', {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset()
            })
    }
    return (
        <div className="bg-orange-100">
            <div className="container mx-auto px-3 py-10 flex justify-center items-center">
                <div className="bg-base-100 rounded-xl p-3 shadow-lg">
                    <div className="pb-4 text-center">
                        <h2 className="text-4xl text-lime-400 font-bold">Add New Product</h2>
                        <p className="w-full mx-auto md:w-4/5  my-2">
                            Automajesty was founded with a vision to create a platform that offers more than just a transaction
                        </p>
                    </div>

                    <form onSubmit={handleAddProduct}>
                        <div className="flex my-2 flex-col md:flex-row gap-3">
                            <div className="w-full">
                                <input className="w-full px-3 py-1 border rounded" type="text" name="name" placeholder="Name" />
                            </div>
                            <div className="w-full">
                                <input className="w-full px-3 py-1 border rounded" type="text" name="price" placeholder="Price" />
                            </div>
                        </div>
                        <div className="flex my-2 flex-col md:flex-row gap-3">
                            <div className="w-full">
                                {/* <input className="w-full px-3 py-1 border rounded" type="text" name="brand" placeholder="brand name" /> */}

                                <select className="w-full px-3 py-1 border rounded" name="brand" id="brand">
                                    <option value="toyota">Toyota</option>
                                    <option value="ford">Ford</option>
                                    <option value="bmw">BMW</option>
                                    <option value="mercedes-benz">Mercedes-Benz</option>
                                    <option value="tesla">Tesla</option>
                                    <option value="honda">Honda</option>
                                    
                                </select>
                            </div>
                            <div className="w-full">
                                <input className="w-full px-3 py-1 border rounded" type="text" name="rating" placeholder="Rating" />
                            </div>
                        </div>
                        <div className="flex my-2 flex-col md:flex-row gap-3">
                            <div className="w-full">
                                <input className="w-full px-3 py-1 border rounded" type="text" name="image" placeholder="Image link" />
                            </div>
                            <div className="w-full">
                                <input className="w-full px-3 py-1 border rounded" type="text" name="type" placeholder="Type" />
                            </div>
                        </div>
                        <div className="flex my-2 flex-col md:flex-row gap-3">
                            <div className="w-full">
                                <input className="w-full px-3 py-1 border rounded" type="text" name="description" placeholder="Short Description" />
                            </div>
                        </div>

                        <div className="text-center">
                            <input className="btn btn-md bg-lime-400 hover:bg-lime-200 mx-auto" type="submit" value="Add Product" />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddProduct;