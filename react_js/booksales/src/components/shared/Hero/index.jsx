export default function Hero() {
  return (
    <div className="container my-5">
        <div className="row p-2 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h3 className="display-4 fw-bold lh-1 b-text-brown">
              Tiny Changes, Remarkable Results
            </h3>
            <p className="lead mt-3">
              <span className="fw-bold fs-4 b-text-brown">Atomic Habits</span> teaches how to form good habits, break bad ones, and build a better life.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                className="btn b-btn-fill btn-lg px-4 me-md-2 fw-bold"
              >
                Buy Now
              </button>
              <button
                type="button"
                className="btn b-btn-outline btn-lg px-4"
              >
                Detail
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="img-fluid w-100 rounded-lg-3"
              src="img/atomic-habits.jpg"
              alt="Atomic Habits cover"
            />
          </div>
        </div>
      </div>
  );
};
