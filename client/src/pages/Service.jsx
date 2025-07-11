import { useState, useEffect } from "react";
import { useAuth } from "../store/auth";

export const Service = () => {
  const { services } = useAuth();
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    if (services.length > 0) {
      setLoading(false); 
    }
  }, [services]);  

  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Services</h1>
      </div>
      <div className="container grid grid-three-cols">
        {loading ? (  
            <div  className="loader"/>
        ) : (
          services.map((curElem, index) => {
            const { price, description, provider, service } = curElem;

            return (
              <div className="card" key={index}>
                <div className="card-img">
                  <img
                    src="/images/design.png"
                    alt="our services info"
                    width="200"
                  />
                </div>

                <div className="card-details">
                  <div className="grid grid-two-cols">
                    <p>{provider}</p>
                    <p>{'Rs.' + price}</p>
                  </div>
                  <h2>{service}</h2>
                  <p>{description}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};
