import { useState } from "react";
import books from "../../../Utils/books";

export default function ProductList() {
  const [bookList, setBookList] = useState([...books]);

  // state untuk menyimpan data buku
  const handleBookList = () => {
    const newBook = {
      id: bookList.length + 1,
      title: "Prince Caspian",
      author: "C.S. Lewis",
      genre: "Fiction",
      year: 1951,
      price: 9.99,
      rating: 4.6,
      description: "Prince Caspian is one of seven novels in The Chronicles of Narnia series by C.S. Lewis. It is the second novel he wrote, but the fourth in his internal chronology. Prince Caspian tells the story of a prince named Caspian, or more precisely, Caspian the Tenth.",
      image: "https://upload.wikimedia.org/wikipedia/id/7/7b/PrinceCaspian%281stEd%29.jpg",
    };
    setBookList((prevBooks) => [...prevBooks, newBook]);
    alert("Book added successfully!");
  };
  return (
    <>
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Best Seller</h1>
            <p className="lead text-body-secondary">
              The most liked and recommended books. Easy to read, full of meaning, and might be right for you.
            </p>
            <p>
              <a href="#" className="btn b-btn-fill my-2 me-2">
                View
              </a>
              <a href="#" className="btn b-btn-outline my-2">
                Other Book
              </a>
            </p>
          </div>
        </div>
      </section>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {bookList.map((book, index) => (
              <div className="col" key={index}>
                <div className="card shadow-sm">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="card-img-top"
                    style={{ height: "500px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="card-title mb-0 text-truncate" style={{ maxWidth: "70%" }}>{book.title}</h5>
                      <span className="heart-icon">
                        <i className="fa-regular fa-heart fa-xl" style={{ color: "#e2222b" }}></i>
                        <i className="fa-solid fa-heart fa-xl" style={{ color: "#e2222b" }}></i>
                      </span>
                    </div>
                    <p className="card-text mb-1 text-truncate"><strong>Author:</strong> {book.author}</p>
                    <p className="card-text mb-1"><strong>Year:</strong> {book.year}</p>
                    <p className="card-text text-muted mb-2 text-truncate" style={{ fontSize: "0.9rem" }}>
                      {book.description.length > 80
                        ? book.description.substring(0, 80) + "..."
                        : book.description}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-grid gap-2 d-md-flex mt-2">
                        <a href={`/books/${book.id}`} className="btn btn-sm btn-dark mt-auto">
                          View
                        </a>
                        <button type="button" className="btn btn-sm btn-outline-dark">
                          Add to Cart
                        </button>
                      </div>
                      <p className="card-text fw-semibold mb-0">
                        {(book.price * 15000).toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          minimumFractionDigits: 0,
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <button className="btn b-btn-fill" onClick={handleBookList}>
              Add Book
            </button>
          </div>
        </div>
      </div>
    </main>
    </>
  );
};
