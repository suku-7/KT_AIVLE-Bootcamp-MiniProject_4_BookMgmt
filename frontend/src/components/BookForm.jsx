// 등록, 수정 공용 폼

function BookForm({ book, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input name="title" defaultValue={book?.title} placeholder="제목" />
      <input name="author" defaultValue={book?.author} placeholder="작가" />
      <textarea name="cover_prompt" defaultValue={book?.cover_prompt} placeholder="표지 프롬프트" />
      <button type="submit">저장</button>
    </form>
  );
}

export default BookForm;
