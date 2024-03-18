
import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";

const AdminServicesAdd = () => {
  const {API} = useAuth();

     const [service, setservice] = useState({
    service: "",
    price: "",
    provider: "",
    description: "",
    });
    const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setservice({ ...service, [name]: value });
    }

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/api/data/addService`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(service),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        setservice({
          service: "",
          price: "",
          provider: "",
          description: "",
        });
      } else {
        toast.error(data.extraDetails? data.extraDetails : data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
    }

        
  return (
    <>
        <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Add Service</h1>
        </div>
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/design.png" alt="services" />
          </div>
          <section className="section-form">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div>
                <label htmlFor="service">Service</label>
                <input
                  type="text"
                  name="service"
                  id="service"
                  autoComplete="off"
                  value={service.service}
                  onChange={handleInput}
                  required
                />
              </div>
              <div>
                <label htmlFor="price">Price </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  placeholder="10.00-20.00"
                  autoComplete="off"
                  value={service.price}
                  onChange={handleInput}
                  pattern="\d+(\.\d{0,2})?-\d+(\.\d{0,2})?"
                  title="Please enter a valid price  (e.g., 10.00-20.00)"
                  required
                />
              </div>
              <div>
                <label htmlFor="provider">provider</label>
                <input
                  type="text"
                  name="provider"
                  id="provider"
                  autoComplete="off"
                  value={service.provider}
                  onChange={handleInput}
                  required
                />
              </div>
              <div>
                <label htmlFor="description">description</label>
                <textarea
                  name="description"
                  id="description"
                  autoComplete="off"
                  value={service.description}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                ></textarea>
              </div>
              {/* <div>
              <label htmlFor="image">Image</label>
              <input
                type="file"
                name="image"
                placeholder="Upload Image Here"
                id="image"
                autoComplete="off"
                required
              />
              </div> */}

              <div>
                <button type="submit">Add Service</button>
              </div>
            </form>
          </section>
        </div>
        </section>
        
    </>
  )
}

export default AdminServicesAdd