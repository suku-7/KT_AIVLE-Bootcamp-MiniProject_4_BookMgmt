function BookCard({ book }) {
  return (
    <div>
      <h3>{book.title}</h3>
      <img src={book.cover_url} alt="표지 이미지" width={100} />
    </div>
  );
}

export default BookCard;
