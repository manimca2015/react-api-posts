import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function PostListWithImages() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 70)))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const handleReadMore = (post) => {
    console.log("Full post:", post);
  };

  // Pagination logic
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = posts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container py-4">
    <h2 className="text-center">Displaying Posts from Public API using React & Bootstrap</h2>
      <h2 className="mb-4 text-center">Latest Posts</h2>
      <div className="row">
        {currentPosts.map((post) => (
          <div key={post.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={`https://picsum.photos/300/200?random=${post.id}`}
                className="card-img-top"
                alt="Post"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body.substring(0, 80)}...</p>
              {/*  <button
                  onClick={() => handleReadMore(post)}
                  className="btn btn-primary mt-auto"
                >
                  Read More
                </button>  */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <nav>
        <ul className="pagination justify-content-center">
          {[...Array(totalPages)].map((_, idx) => (
            <li
              key={idx + 1}
              className={`page-item ${currentPage === idx + 1 ? "active" : ""}`}
            >
              <button onClick={() => paginate(idx + 1)} className="page-link">
                {idx + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default PostListWithImages;
