const Team = () => {
  const teamMembers = [
    { name: "Prince Caspian", role: "UI Designer", img: "img/caspian.jpg" },
    { name: "Aslan", role: "Project Manager", img: "img/aslan.jpg" },
    { name: "Gandalf the Grey", role: "Backend Developer", img: "img/gandalf.jpg" },
    { name: "Legolas", role: "Frontend Developer", img: "img/legolas.jpg" },
  ];

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Meet Our Team</h2>
      <div className="row justify-content-center">
        {/* Mapping array object teamMembers */}
        {teamMembers.map((member, idx) => (
          <div className="col-md-6 col-lg-3 mb-4" key={idx}>
            <div className="card text-center border-0 shadow-sm h-100">
              <img
                src={member.img}
                alt={member.name}
                className="card-img-top"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text text-muted">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
