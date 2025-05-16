import { useParams } from "react-router-dom";
import books from "../../Utils/books";

const BookDetail = () => {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <p className="text-center">Book not found!</p>;

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-5">
          <img src={book.image} className="img-fluid" alt={book.title} />
        </div>
        <div className="col-md-7">
          <h2>{book.title}</h2>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Genre:</strong> {book.genre}</p>
          <p><strong>Year:</strong> {book.year}</p>
          <p><strong>Rating:</strong> {book.rating} out of 5.00</p>
          <p>{book.description}</p>
          <h4 className="text-danger">
            {(book.price * 15000).toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
            })}
          </h4>
          <button className="btn btn-dark mt-3">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
